import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Creatives {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adexchangebuyerCreativesGet - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
    **/
    adexchangebuyerCreativesGet(req: operations.AdexchangebuyerCreativesGetRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerCreativesGetResponse>;
    /**
     * adexchangebuyerCreativesInsert - Submit a new creative.
    **/
    adexchangebuyerCreativesInsert(req: operations.AdexchangebuyerCreativesInsertRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerCreativesInsertResponse>;
    /**
     * adexchangebuyerCreativesList - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
    **/
    adexchangebuyerCreativesList(req: operations.AdexchangebuyerCreativesListRequest, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerCreativesListResponse>;
}
