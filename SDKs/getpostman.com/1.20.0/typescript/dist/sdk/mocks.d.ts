import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Mocks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * allMocks - All Mocks
     *
     * This endpoint fetches all the mocks that you have created.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    allMocks(config?: AxiosRequestConfig): Promise<operations.AllMocksResponse>;
    /**
     * createMock - Create Mock
     *
     * This endpoint allows you to create a mock on a collection. You can also provide an environment UID to resolve any environment variables in the collection.
     *
     * You can also specify the context of a workspace to create a mock in directly by passing the `workspace` as a query param.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    createMock(req: operations.CreateMockRequest, config?: AxiosRequestConfig): Promise<operations.CreateMockResponse>;
    /**
     * deleteMock - Delete Mock
     *
     * This endpoint allows you to delete an existing mock using its `uid`.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    deleteMock(req: operations.DeleteMockRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMockResponse>;
    /**
     * publishMock - Publish Mock
     *
     * This endpoint publishes the mock you have created using its `uid`
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.
    **/
    publishMock(req: operations.PublishMockRequest, config?: AxiosRequestConfig): Promise<operations.PublishMockResponse>;
    /**
     * singleMock - Single Mock
     *
     * This endpoint fetches you the basic information about a single mock using its `uid`.
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    singleMock(req: operations.SingleMockRequest, config?: AxiosRequestConfig): Promise<operations.SingleMockResponse>;
    /**
     * unpublishMock - Unpublish Mock
     *
     * This endpoint unpublishes the mock you have created using its `uid`
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.
    **/
    unpublishMock(req: operations.UnpublishMockRequest, config?: AxiosRequestConfig): Promise<operations.UnpublishMockResponse>;
    /**
     * updateMock - Update Mock
     *
     * This endpoint allows you to update a mock you have created using its `uid`. The endpoint allows you to edit fields,
     * * name
     * * environment
     * * description
     * * private
     * * versionTag
     *
     * > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
    **/
    updateMock(req: operations.UpdateMockRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMockResponse>;
}
