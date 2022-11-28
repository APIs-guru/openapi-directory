import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Collections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * allCollections - All Collections
     *
     * The `/collections` endpoint returns a list of all [collections](https://www.getpostman.com/docs/collections) that are accessible by you. The list includes your own collections and the collections that you have subscribed to.
     *
     * The response contains an array of collection information containing the `name`, `id`, `owner` and `uid` of each collection.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    allCollections(config?: AxiosRequestConfig): Promise<operations.AllCollectionsResponse>;
    /**
     * createAFork - Create a Fork
     *
     * This endpoint allows you to create a fork from an existing collection.
     *
     * On successful creation of the collection, the response returns the collection `name`, `id`, `uid` along with `fork` information.
     *
     * You can also specify the context of a workspace to fork a collection in by passing the `workspace` as a query param.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    createAFork(req: operations.CreateAForkRequest, config?: AxiosRequestConfig): Promise<operations.CreateAForkResponse>;
    /**
     * createCollection - Create Collection
     *
     * This endpoint allows you to create collections using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).
     *
     * On successful creation of the collection, the response returns the collection `name`, `id` and the `uid`.
     *
     * You can also specify the context of a workspace to create a collection in directly by passing the `workspace` as a query param.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    createCollection(req: operations.CreateCollectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateCollectionResponse>;
    /**
     * deleteCollection - Delete Collection
     *
     * This endpoint allows you to delete an existing collection.
     *
     * On successful deletion of the collection, the response returns the `id` and `uid`.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    deleteCollection(req: operations.DeleteCollectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCollectionResponse>;
    /**
     * mergeAFork - Merge a Fork
     *
     * This endpoint allows you to merge a forked collection back to its destination collection.
     *
     * On successful creation of the collection, the response returns the collection `name`, `id` and `uid`.
     *
     * You need to specify the fork UID (as `source`) and destination collection UID (as `destination`) in the request body.
     *
     * Optionally, you can also specify the merge strategy as either `deleteSource` or `updateSourceWithDestination`. Following is an explanation of the merge strategies
     *
     * | Merge Strategy | Behaviour |
     * | --- | --- |
     * | deleteSource | Forked collection is deleted after merging |
     * | updateSourceWithDestination | Forked collection is up to date with changes in destination collection |
     *
     * If the collections cannot be merged (due to conflicts), appropriate error messages will be returned.
     *
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    mergeAFork(req: operations.MergeAForkRequest, config?: AxiosRequestConfig): Promise<operations.MergeAForkResponse>;
    /**
     * singleCollection - Single Collection
     *
     * Access the contents of a collection that is accessible to you using its unique id (`uid`).
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    singleCollection(req: operations.SingleCollectionRequest, config?: AxiosRequestConfig): Promise<operations.SingleCollectionResponse>;
    /**
     * updateCollection - Update Collection
     *
     * This endpoint allows you to update an existing collection using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).
     *
     * On successful updation of the collection, the response returns the collection `name`, `id` and `uid`.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
     *
     * Note: Please be careful when trying to update the collection, as the existing collection will be replaced by the request body.
    **/
    updateCollection(req: operations.UpdateCollectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCollectionResponse>;
}
