import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Documents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteDocumentResource - Delete the document
     *
     * Completely delete the document.
     *
     * **WARNING** This removes the document from our system: it will not be recoverable
     *
     *
     * **Permission required:** review
    **/
    deleteDocumentResource(req: operations.DeleteDocumentResourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDocumentResourceResponse>;
    /**
     * getDocumentOriginalFileResource - Get document original file
     *
     * Return the document original file, as attachment.
     *
     * **Permission required:** review
    **/
    getDocumentOriginalFileResource(req: operations.GetDocumentOriginalFileResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentOriginalFileResourceResponse>;
    getDocumentPageImageResource(req: operations.GetDocumentPageImageResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentPageImageResourceResponse>;
    /**
     * getDocumentResource - Get the document
     *
     * Simple endpoint that will fetch the given document
     *
     * **Permission required:** review
    **/
    getDocumentResource(req: operations.GetDocumentResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentResourceResponse>;
    /**
     * getDocumentTextResource - Get the document text
     *
     * Return the optimal text for the document; will either be the OCR text, the native text,
     * the raw text or a translated version.
     *
     * **Permission required:** review
    **/
    getDocumentTextResource(req: operations.GetDocumentTextResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentTextResourceResponse>;
    /**
     * postDocumentsSimpleApiResource - Upload a new doc to the inbox
     *
     * This endpoint uploads a new file to the given inbox and will process the file.
     *
     * ## Upload mode: sync
     *
     * When sync=true (default), the call will block and wait for the processing to complete.
     *
     * If you have a custom output configured (this is set by Contract Fit team),
     * passing mimetype *application/vnd.cf.custom* will allow you to get the custom output formatted result
     *
     * Since it might yield inconsistent results if a timeout is raised while waiting,
     * it is recommended to use the **async** mode.
     *
     * ## Upload mode: async
     *
     * When sync=false, the call will schedule the processing and return without waiting for completion.
     * It will return the document ID, so that the processed document can be retrieved at a later date.
     *
     * **Permission required:** upload
    **/
    postDocumentsSimpleApiResource(req: operations.PostDocumentsSimpleApiResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostDocumentsSimpleApiResourceResponse>;
    /**
     * postSimpleDocumentsResource - Upload a new document
     *
     * This endpoint is a simplified version of the upload document to inbox one - synchronous mode.
     *
     * The upload file will be upload to the given inbox if provided, else fallback to the **invoice** inbox.
     * The file will be processed synchronously, ie the request will blocks until the document was processed
     * *or* until it timeout; in this case the document might **not** be correctly processed.
     *
     *
     * For a more reliable processing use the /documents/{inbox_id} endpoint in async mode
     *
     *
     * **Permission required:** upload
    **/
    postSimpleDocumentsResource(req: operations.PostSimpleDocumentsResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostSimpleDocumentsResourceResponse>;
}
