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
     * databaseCreateCollection - Create Collection
     *
     * Create a new Collection.
    **/
    databaseCreateCollection(req: operations.DatabaseCreateCollectionRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseCreateCollectionResponse>;
    /**
     * databaseCreateDocument - Create Document
     *
     * Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](/docs/server/database#databaseCreateCollection) API or directly from your database console.
    **/
    databaseCreateDocument(req: operations.DatabaseCreateDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseCreateDocumentResponse>;
    /**
     * databaseDeleteCollection - Delete Collection
     *
     * Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.
    **/
    databaseDeleteCollection(req: operations.DatabaseDeleteCollectionRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseDeleteCollectionResponse>;
    /**
     * databaseDeleteDocument - Delete Document
     *
     * Delete a document by its unique ID. This endpoint deletes only the parent documents, its attributes and relations to other documents. Child documents **will not** be deleted.
    **/
    databaseDeleteDocument(req: operations.DatabaseDeleteDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseDeleteDocumentResponse>;
    /**
     * databaseGetCollection - Get Collection
     *
     * Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.
    **/
    databaseGetCollection(req: operations.DatabaseGetCollectionRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseGetCollectionResponse>;
    /**
     * databaseGetDocument - Get Document
     *
     * Get a document by its unique ID. This endpoint response returns a JSON object with the document data.
    **/
    databaseGetDocument(req: operations.DatabaseGetDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseGetDocumentResponse>;
    /**
     * databaseListCollections - List Collections
     *
     * Get a list of all the user collections. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's collections. [Learn more about different API modes](/docs/admin).
    **/
    databaseListCollections(req: operations.DatabaseListCollectionsRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseListCollectionsResponse>;
    /**
     * databaseListDocuments - List Documents
     *
     * Get a list of all the user documents. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's documents. [Learn more about different API modes](/docs/admin).
    **/
    databaseListDocuments(req: operations.DatabaseListDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseListDocumentsResponse>;
    /**
     * databaseUpdateCollection - Update Collection
     *
     * Update a collection by its unique ID.
    **/
    databaseUpdateCollection(req: operations.DatabaseUpdateCollectionRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseUpdateCollectionResponse>;
    /**
     * databaseUpdateDocument - Update Document
     *
     * Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.
    **/
    databaseUpdateDocument(req: operations.DatabaseUpdateDocumentRequest, config?: AxiosRequestConfig): Promise<operations.DatabaseUpdateDocumentResponse>;
}
