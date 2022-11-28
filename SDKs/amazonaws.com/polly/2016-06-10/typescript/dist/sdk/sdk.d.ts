import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://polly.{region}.amazonaws.com", "https://polly.{region}.amazonaws.com", "http://polly.{region}.amazonaws.com.cn", "https://polly.{region}.amazonaws.com.cn"];
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
     * deleteLexicon - <p>Deletes the specified pronunciation lexicon stored in an Amazon Web Services Region. A lexicon which has been deleted is not available for speech synthesis, nor is it possible to retrieve it using either the <code>GetLexicon</code> or <code>ListLexicon</code> APIs.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
    **/
    deleteLexicon(req: operations.DeleteLexiconRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLexiconResponse>;
    /**
     * describeVoices - <p>Returns the list of voices that are available for use when requesting speech synthesis. Each voice speaks a specified language, is either male or female, and is identified by an ID, which is the ASCII version of the voice name. </p> <p>When synthesizing speech ( <code>SynthesizeSpeech</code> ), you provide the voice ID for the voice you want from the list of voices returned by <code>DescribeVoices</code>.</p> <p>For example, you want your news reader application to read news in a specific language, but giving a user the option to choose the voice. Using the <code>DescribeVoices</code> operation you can provide the user with a list of available voices to select from.</p> <p> You can optionally specify a language code to filter the available voices. For example, if you specify <code>en-US</code>, the operation returns a list of all available US English voices. </p> <p>This operation requires permissions to perform the <code>polly:DescribeVoices</code> action.</p>
    **/
    describeVoices(req: operations.DescribeVoicesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeVoicesResponse>;
    /**
     * getLexicon - Returns the content of the specified pronunciation lexicon stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
    **/
    getLexicon(req: operations.GetLexiconRequest, config?: AxiosRequestConfig): Promise<operations.GetLexiconResponse>;
    /**
     * getSpeechSynthesisTask - Retrieves a specific SpeechSynthesisTask object based on its TaskID. This object contains information about the given speech synthesis task, including the status of the task, and a link to the S3 bucket containing the output of the task.
    **/
    getSpeechSynthesisTask(req: operations.GetSpeechSynthesisTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetSpeechSynthesisTaskResponse>;
    /**
     * listLexicons - Returns a list of pronunciation lexicons stored in an Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.
    **/
    listLexicons(req: operations.ListLexiconsRequest, config?: AxiosRequestConfig): Promise<operations.ListLexiconsResponse>;
    /**
     * listSpeechSynthesisTasks - Returns a list of SpeechSynthesisTask objects ordered by their creation date. This operation can filter the tasks by their status, for example, allowing users to list only tasks that are completed.
    **/
    listSpeechSynthesisTasks(req: operations.ListSpeechSynthesisTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListSpeechSynthesisTasksResponse>;
    /**
     * putLexicon - <p>Stores a pronunciation lexicon in an Amazon Web Services Region. If a lexicon with the same name already exists in the region, it is overwritten by the new lexicon. Lexicon operations have eventual consistency, therefore, it might take some time before the lexicon is available to the SynthesizeSpeech operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/managing-lexicons.html">Managing Lexicons</a>.</p>
    **/
    putLexicon(req: operations.PutLexiconRequest, config?: AxiosRequestConfig): Promise<operations.PutLexiconResponse>;
    /**
     * startSpeechSynthesisTask - Allows the creation of an asynchronous synthesis task, by starting a new <code>SpeechSynthesisTask</code>. This operation requires all the standard information needed for speech synthesis, plus the name of an Amazon S3 bucket for the service to store the output of the synthesis task and two optional parameters (<code>OutputS3KeyPrefix</code> and <code>SnsTopicArn</code>). Once the synthesis task is created, this operation will return a <code>SpeechSynthesisTask</code> object, which will include an identifier of this task as well as the current status. The <code>SpeechSynthesisTask</code> object is available for 72 hours after starting the asynchronous synthesis task.
    **/
    startSpeechSynthesisTask(req: operations.StartSpeechSynthesisTaskRequest, config?: AxiosRequestConfig): Promise<operations.StartSpeechSynthesisTaskResponse>;
    /**
     * synthesizeSpeech - Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes. SSML input must be valid, well-formed SSML. Some alphabets might not be available with all the voices (for example, Cyrillic might not be read at all by English voices) unless phoneme mapping is used. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/how-text-to-speech-works.html">How it Works</a>.
    **/
    synthesizeSpeech(req: operations.SynthesizeSpeechRequest, config?: AxiosRequestConfig): Promise<operations.SynthesizeSpeechResponse>;
}
export {};
