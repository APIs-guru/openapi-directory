import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PretargetingConfig {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adexchangebuyerPretargetingConfigDelete - Deletes an existing pretargeting config.
    **/
    adexchangebuyerPretargetingConfigDelete(req: operations.AdexchangebuyerPretargetingConfigDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerPretargetingConfigDeleteResponse>;
    /**
     * adexchangebuyerPretargetingConfigGet - Gets a specific pretargeting configuration
    **/
    adexchangebuyerPretargetingConfigGet(req: operations.AdexchangebuyerPretargetingConfigGetRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerPretargetingConfigGetResponse>;
    /**
     * adexchangebuyerPretargetingConfigInsert - Inserts a new pretargeting configuration.
    **/
    adexchangebuyerPretargetingConfigInsert(req: operations.AdexchangebuyerPretargetingConfigInsertRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerPretargetingConfigInsertResponse>;
    /**
     * adexchangebuyerPretargetingConfigList - Retrieves a list of the authenticated user's pretargeting configurations.
    **/
    adexchangebuyerPretargetingConfigList(req: operations.AdexchangebuyerPretargetingConfigListRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerPretargetingConfigListResponse>;
    /**
     * adexchangebuyerPretargetingConfigPatch - Updates an existing pretargeting config. This method supports patch semantics.
    **/
    adexchangebuyerPretargetingConfigPatch(req: operations.AdexchangebuyerPretargetingConfigPatchRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerPretargetingConfigPatchResponse>;
    /**
     * adexchangebuyerPretargetingConfigUpdate - Updates an existing pretargeting config.
    **/
    adexchangebuyerPretargetingConfigUpdate(req: operations.AdexchangebuyerPretargetingConfigUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerPretargetingConfigUpdateResponse>;
}
