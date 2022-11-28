import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Attachments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createAttachmentForTask - Upload an attachment
     *
     * Upload an attachment.
     *
     * This method uploads an attachment to a task and returns the compact
     * record for the created attachment object. It is not possible to attach
     * files from third party services such as Dropbox, Box & Google Drive via
     * the API. You must download the file content first and then upload it as
     * any other attachment.
     *
     * The 100MB size limit on attachments in Asana is enforced on this endpoint.
     *
     * This endpoint expects a multipart/form-data encoded request containing
     * the full contents of the file to be uploaded.
     *
     * Requests made should follow the HTTP/1.1 specification that line
     * terminators are of the form `CRLF` or `\r\n` outlined
     * [here](http://www.w3.org/Protocols/HTTP/1.1/draft-ietf-http-v11-spec-01#Basic-Rules)
     * in order for the server to reliably and properly handle the request.
    **/
    createAttachmentForTask(req: operations.CreateAttachmentForTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateAttachmentForTaskResponse>;
    /**
     * deleteAttachment - Delete an attachment
     *
     * Deletes a specific, existing attachment.
     *
     * Returns an empty data record.
    **/
    deleteAttachment(req: operations.DeleteAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttachmentResponse>;
    /**
     * getAttachment - Get an attachment
     *
     * Get the full record for a single attachment.
    **/
    getAttachment(req: operations.GetAttachmentRequest, config?: AxiosRequestConfig): Promise<operations.GetAttachmentResponse>;
    /**
     * getAttachmentsForTask - Get attachments for a task
     *
     * Returns the compact records for all attachments on the task.
    **/
    getAttachmentsForTask(req: operations.GetAttachmentsForTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetAttachmentsForTaskResponse>;
}
