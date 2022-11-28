import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * apikeysProjectsLocationsKeysCreate - Creates a new API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
    **/
    apikeysProjectsLocationsKeysCreate(req: operations.ApikeysProjectsLocationsKeysCreateRequest, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysCreateResponse>;
    /**
     * apikeysProjectsLocationsKeysDelete - Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project. NOTE: Key is a global resource; hence the only supported value for location is `global`.
    **/
    apikeysProjectsLocationsKeysDelete(req: operations.ApikeysProjectsLocationsKeysDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysDeleteResponse>;
    /**
     * apikeysProjectsLocationsKeysGet - Gets the metadata for an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
    **/
    apikeysProjectsLocationsKeysGet(req: operations.ApikeysProjectsLocationsKeysGetRequest, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysGetResponse>;
    /**
     * apikeysProjectsLocationsKeysGetKeyString - Get the key string for an API key. NOTE: Key is a global resource; hence the only supported value for location is `global`.
    **/
    apikeysProjectsLocationsKeysGetKeyString(req: operations.ApikeysProjectsLocationsKeysGetKeyStringRequest, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysGetKeyStringResponse>;
    /**
     * apikeysProjectsLocationsKeysList - Lists the API keys owned by a project. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
    **/
    apikeysProjectsLocationsKeysList(req: operations.ApikeysProjectsLocationsKeysListRequest, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysListResponse>;
    /**
     * apikeysProjectsLocationsKeysPatch - Patches the modifiable fields of an API key. The key string of the API key isn't included in the response. NOTE: Key is a global resource; hence the only supported value for location is `global`.
    **/
    apikeysProjectsLocationsKeysPatch(req: operations.ApikeysProjectsLocationsKeysPatchRequest, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysPatchResponse>;
    /**
     * apikeysProjectsLocationsKeysUndelete - Undeletes an API key which was deleted within 30 days. NOTE: Key is a global resource; hence the only supported value for location is `global`.
    **/
    apikeysProjectsLocationsKeysUndelete(req: operations.ApikeysProjectsLocationsKeysUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.ApikeysProjectsLocationsKeysUndeleteResponse>;
}
