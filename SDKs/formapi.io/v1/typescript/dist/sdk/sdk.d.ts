import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.docspring.com/api/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * addFieldsToTemplate - Add new fields to a Template
    **/
    addFieldsToTemplate(req: operations.AddFieldsToTemplateRequest, config?: AxiosRequestConfig): Promise<operations.AddFieldsToTemplateResponse>;
    /**
     * batchGeneratePdfV1 - Generates multiple PDFs
    **/
    batchGeneratePdfV1(req: operations.BatchGeneratePdfV1Request, config?: AxiosRequestConfig): Promise<operations.BatchGeneratePdfV1Response>;
    /**
     * batchGeneratePdfs - Generates multiple PDFs
    **/
    batchGeneratePdfs(req: operations.BatchGeneratePdfsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGeneratePdfsResponse>;
    /**
     * combinePdfs - Merge submission PDFs, template PDFs, or custom files
    **/
    combinePdfs(req: operations.CombinePdfsRequest, config?: AxiosRequestConfig): Promise<operations.CombinePdfsResponse>;
    /**
     * combineSubmissions - Merge generated PDFs together
    **/
    combineSubmissions(req: operations.CombineSubmissionsRequest, config?: AxiosRequestConfig): Promise<operations.CombineSubmissionsResponse>;
    /**
     * copyTemplate - Copy a Template
    **/
    copyTemplate(req: operations.CopyTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CopyTemplateResponse>;
    /**
     * createCustomFileFromUpload - Create a new custom file from a cached presign upload
    **/
    createCustomFileFromUpload(req: operations.CreateCustomFileFromUploadRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomFileFromUploadResponse>;
    /**
     * createDataRequestToken - Creates a new data request token for form authentication
    **/
    createDataRequestToken(req: operations.CreateDataRequestTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateDataRequestTokenResponse>;
    /**
     * createFolder - Create a folder
    **/
    createFolder(req: operations.CreateFolderRequest, config?: AxiosRequestConfig): Promise<operations.CreateFolderResponse>;
    /**
     * createHtmlTemplate - Create a new HTML template
    **/
    createHtmlTemplate(req: operations.CreateHtmlTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateHtmlTemplateResponse>;
    /**
     * createPdfTemplate - Create a new PDF template with a form POST file upload
    **/
    createPdfTemplate(req: operations.CreatePdfTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreatePdfTemplateResponse>;
    /**
     * createPdfTemplateFromUpload - Create a new PDF template from a cached presign upload
    **/
    createPdfTemplateFromUpload(req: operations.CreatePdfTemplateFromUploadRequest, config?: AxiosRequestConfig): Promise<operations.CreatePdfTemplateFromUploadResponse>;
    /**
     * deleteFolder - Delete a folder
    **/
    deleteFolder(req: operations.DeleteFolderRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFolderResponse>;
    /**
     * expireCombinedSubmission - Expire a combined submission
    **/
    expireCombinedSubmission(req: operations.ExpireCombinedSubmissionRequest, config?: AxiosRequestConfig): Promise<operations.ExpireCombinedSubmissionResponse>;
    /**
     * expireSubmission - Expire a PDF submission
    **/
    expireSubmission(req: operations.ExpireSubmissionRequest, config?: AxiosRequestConfig): Promise<operations.ExpireSubmissionResponse>;
    /**
     * generatePdf - Generates a new PDF
    **/
    generatePdf(req: operations.GeneratePdfRequest, config?: AxiosRequestConfig): Promise<operations.GeneratePdfResponse>;
    /**
     * getCombinedSubmission - Check the status of a combined submission (merged PDFs)
    **/
    getCombinedSubmission(req: operations.GetCombinedSubmissionRequest, config?: AxiosRequestConfig): Promise<operations.GetCombinedSubmissionResponse>;
    /**
     * getDataRequest - Look up a submission data request
    **/
    getDataRequest(req: operations.GetDataRequestRequest, config?: AxiosRequestConfig): Promise<operations.GetDataRequestResponse>;
    /**
     * getPresignUrl - Get a presigned URL so that you can upload a file to our AWS S3 bucket
    **/
    getPresignUrl(req: operations.GetPresignUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetPresignUrlResponse>;
    /**
     * getSubmission - Check the status of a PDF
    **/
    getSubmission(req: operations.GetSubmissionRequest, config?: AxiosRequestConfig): Promise<operations.GetSubmissionResponse>;
    /**
     * getSubmissionBatch - Check the status of a submission batch job
    **/
    getSubmissionBatch(req: operations.GetSubmissionBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetSubmissionBatchResponse>;
    /**
     * getTemplate - Get a single template
    **/
    getTemplate(req: operations.GetTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplateResponse>;
    /**
     * getTemplateSchema - Fetch the JSON schema for a template
    **/
    getTemplateSchema(req: operations.GetTemplateSchemaRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplateSchemaResponse>;
    /**
     * listFolders - Get a list of all folders
    **/
    listFolders(req: operations.ListFoldersRequest, config?: AxiosRequestConfig): Promise<operations.ListFoldersResponse>;
    /**
     * listTemplates - Get a list of all templates
    **/
    listTemplates(req: operations.ListTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListTemplatesResponse>;
    /**
     * moveFolderToFolder - Move a folder
    **/
    moveFolderToFolder(req: operations.MoveFolderToFolderRequest, config?: AxiosRequestConfig): Promise<operations.MoveFolderToFolderResponse>;
    /**
     * moveTemplateToFolder - Move Template to folder
    **/
    moveTemplateToFolder(req: operations.MoveTemplateToFolderRequest, config?: AxiosRequestConfig): Promise<operations.MoveTemplateToFolderResponse>;
    /**
     * renameFolder - Rename a folder
    **/
    renameFolder(req: operations.RenameFolderRequest, config?: AxiosRequestConfig): Promise<operations.RenameFolderResponse>;
    /**
     * testAuthentication - Test Authentication
    **/
    testAuthentication(req: operations.TestAuthenticationRequest, config?: AxiosRequestConfig): Promise<operations.TestAuthenticationResponse>;
    /**
     * updateDataRequest - Update a submission data request
    **/
    updateDataRequest(req: operations.UpdateDataRequestRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDataRequestResponse>;
    /**
     * updateTemplate - Update a Template
    **/
    updateTemplate(req: operations.UpdateTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTemplateResponse>;
}
export {};
