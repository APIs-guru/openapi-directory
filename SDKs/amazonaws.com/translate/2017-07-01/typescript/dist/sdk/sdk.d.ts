import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://translate.{region}.amazonaws.com", "https://translate.{region}.amazonaws.com", "http://translate.{region}.amazonaws.com.cn", "https://translate.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createParallelData - Creates a parallel data resource in Amazon Translate by importing an input file from Amazon S3. Parallel data files contain examples of source phrases and their translations from your translation memory. By adding parallel data, you can influence the style, tone, and word choice in your translation output.
    **/
    createParallelData(req: operations.CreateParallelDataRequest, config?: AxiosRequestConfig): Promise<operations.CreateParallelDataResponse>;
    /**
     * deleteParallelData - Deletes a parallel data resource in Amazon Translate.
    **/
    deleteParallelData(req: operations.DeleteParallelDataRequest, config?: AxiosRequestConfig): Promise<operations.DeleteParallelDataResponse>;
    /**
     * deleteTerminology - A synchronous action that deletes a custom terminology.
    **/
    deleteTerminology(req: operations.DeleteTerminologyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTerminologyResponse>;
    /**
     * describeTextTranslationJob - Gets the properties associated with an asycnhronous batch translation job including name, ID, status, source and target languages, input/output S3 buckets, and so on.
    **/
    describeTextTranslationJob(req: operations.DescribeTextTranslationJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTextTranslationJobResponse>;
    /**
     * getParallelData - Provides information about a parallel data resource.
    **/
    getParallelData(req: operations.GetParallelDataRequest, config?: AxiosRequestConfig): Promise<operations.GetParallelDataResponse>;
    /**
     * getTerminology - Retrieves a custom terminology.
    **/
    getTerminology(req: operations.GetTerminologyRequest, config?: AxiosRequestConfig): Promise<operations.GetTerminologyResponse>;
    /**
     * importTerminology - <p>Creates or updates a custom terminology, depending on whether or not one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. Currently, the only supported merge strategy is OVERWRITE, and so the imported terminology will overwrite an existing terminology of the same name.</p> <p>If you import a terminology that overwrites an existing one, the new terminology take up to 10 minutes to fully propagate and be available for use in a translation due to cache policies with the DataPlane service that performs the translations.</p>
    **/
    importTerminology(req: operations.ImportTerminologyRequest, config?: AxiosRequestConfig): Promise<operations.ImportTerminologyResponse>;
    /**
     * listParallelData - Provides a list of your parallel data resources in Amazon Translate.
    **/
    listParallelData(req: operations.ListParallelDataRequest, config?: AxiosRequestConfig): Promise<operations.ListParallelDataResponse>;
    /**
     * listTerminologies - Provides a list of custom terminologies associated with your account.
    **/
    listTerminologies(req: operations.ListTerminologiesRequest, config?: AxiosRequestConfig): Promise<operations.ListTerminologiesResponse>;
    /**
     * listTextTranslationJobs - Gets a list of the batch translation jobs that you have submitted.
    **/
    listTextTranslationJobs(req: operations.ListTextTranslationJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListTextTranslationJobsResponse>;
    /**
     * startTextTranslationJob - <p>Starts an asynchronous batch translation job. Batch translation jobs can be used to translate large volumes of text across multiple documents at once. For more information, see <a>async</a>.</p> <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p> <note> <p>Amazon Translate does not support batch translation of multiple source languages at once.</p> </note>
    **/
    startTextTranslationJob(req: operations.StartTextTranslationJobRequest, config?: AxiosRequestConfig): Promise<operations.StartTextTranslationJobResponse>;
    /**
     * stopTextTranslationJob - <p>Stops an asynchronous batch translation job that is in progress.</p> <p>If the job's state is <code>IN_PROGRESS</code>, the job will be marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state. Otherwise, the job is put into the <code>STOPPED</code> state.</p> <p>Asynchronous batch translation jobs are started with the <a>StartTextTranslationJob</a> operation. You can use the <a>DescribeTextTranslationJob</a> or <a>ListTextTranslationJobs</a> operations to get a batch translation job's <code>JobId</code>.</p>
    **/
    stopTextTranslationJob(req: operations.StopTextTranslationJobRequest, config?: AxiosRequestConfig): Promise<operations.StopTextTranslationJobResponse>;
    /**
     * translateText - Translates input text from the source language to the target language. For a list of available languages and language codes, see <a>what-is-languages</a>.
    **/
    translateText(req: operations.TranslateTextRequest, config?: AxiosRequestConfig): Promise<operations.TranslateTextResponse>;
    /**
     * updateParallelData - Updates a previously created parallel data resource by importing a new input file from Amazon S3.
    **/
    updateParallelData(req: operations.UpdateParallelDataRequest, config?: AxiosRequestConfig): Promise<operations.UpdateParallelDataResponse>;
}
export {};
