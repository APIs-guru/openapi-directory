import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Grouplicenses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidenterpriseGrouplicensesGet - Retrieves details of an enterprise's group license for a product. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
    **/
    androidenterpriseGrouplicensesGet(req: operations.AndroidenterpriseGrouplicensesGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseGrouplicensesGetResponse>;
    /**
     * androidenterpriseGrouplicensesList - Retrieves IDs of all products for which the enterprise has a group license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
    **/
    androidenterpriseGrouplicensesList(req: operations.AndroidenterpriseGrouplicensesListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseGrouplicensesListResponse>;
}
