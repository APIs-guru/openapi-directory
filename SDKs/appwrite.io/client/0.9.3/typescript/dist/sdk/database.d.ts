import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Database {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * databaseCreateDocument - Create Document
     *
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](/docs/server/database#databaseCreateCollection) API or directly from your database console.
    **/
    databaseCreateDocument(req: operations.DatabaseCreateDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseCreateDocumentResponse>;
    /**
     * databaseDeleteDocument - Delete Document
     *
     * Delete a document by its unique ID. This endpoint deletes only the parent documents, its attributes and relations to other documents. Child documents **will not** be deleted.
    **/
    databaseDeleteDocument(req: operations.DatabaseDeleteDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseDeleteDocumentResponse>;
    /**
     * databaseGetDocument - Get Document
     *
     * Get a document by its unique ID. This endpoint response returns a JSON object with the document data.
    **/
    databaseGetDocument(req: operations.DatabaseGetDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseGetDocumentResponse>;
    /**
     * databaseListDocuments - List Documents
     *
     * Get a list of all the user documents. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's documents. [Learn more about different API modes](/docs/admin).
    **/
    databaseListDocuments(req: operations.DatabaseListDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseListDocumentsResponse>;
    /**
     * databaseUpdateDocument - Update Document
     *
     * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
    **/
    databaseUpdateDocument(req: operations.DatabaseUpdateDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseUpdateDocumentResponse>;
}
