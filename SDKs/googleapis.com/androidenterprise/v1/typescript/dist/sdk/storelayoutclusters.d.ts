import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Storelayoutclusters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidenterpriseStorelayoutclustersDelete - Deletes a cluster.
    **/
    androidenterpriseStorelayoutclustersDelete(req: operations.AndroidenterpriseStorelayoutclustersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutclustersDeleteResponse>;
    /**
     * androidenterpriseStorelayoutclustersGet - Retrieves details of a cluster.
    **/
    androidenterpriseStorelayoutclustersGet(req: operations.AndroidenterpriseStorelayoutclustersGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutclustersGetResponse>;
    /**
     * androidenterpriseStorelayoutclustersInsert - Inserts a new cluster in a page.
    **/
    androidenterpriseStorelayoutclustersInsert(req: operations.AndroidenterpriseStorelayoutclustersInsertRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutclustersInsertResponse>;
    /**
     * androidenterpriseStorelayoutclustersList - Retrieves the details of all clusters on the specified page.
    **/
    androidenterpriseStorelayoutclustersList(req: operations.AndroidenterpriseStorelayoutclustersListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutclustersListResponse>;
    /**
     * androidenterpriseStorelayoutclustersUpdate - Updates a cluster.
    **/
    androidenterpriseStorelayoutclustersUpdate(req: operations.AndroidenterpriseStorelayoutclustersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutclustersUpdateResponse>;
}
