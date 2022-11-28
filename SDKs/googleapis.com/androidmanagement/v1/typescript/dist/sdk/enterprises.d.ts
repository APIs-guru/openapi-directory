import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Enterprises {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidmanagementEnterprisesCreate - Creates an enterprise. This is the last step in the enterprise signup flow.
    **/
    androidmanagementEnterprisesCreate(req: operations.AndroidmanagementEnterprisesCreateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesCreateResponse>;
    /**
     * androidmanagementEnterprisesDevicesIssueCommand - Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
    **/
    androidmanagementEnterprisesDevicesIssueCommand(req: operations.AndroidmanagementEnterprisesDevicesIssueCommandRequest, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesDevicesIssueCommandResponse>;
    /**
     * androidmanagementEnterprisesDevicesList - Lists devices for a given enterprise. Deleted devices are not returned in the response.
    **/
    androidmanagementEnterprisesDevicesList(req: operations.AndroidmanagementEnterprisesDevicesListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesDevicesListResponse>;
    /**
     * androidmanagementEnterprisesDevicesOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
    **/
    androidmanagementEnterprisesDevicesOperationsCancel(req: operations.AndroidmanagementEnterprisesDevicesOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesDevicesOperationsCancelResponse>;
    /**
     * androidmanagementEnterprisesEnrollmentTokensCreate - Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.
    **/
    androidmanagementEnterprisesEnrollmentTokensCreate(req: operations.AndroidmanagementEnterprisesEnrollmentTokensCreateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesEnrollmentTokensCreateResponse>;
    /**
     * androidmanagementEnterprisesEnrollmentTokensList - Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
    **/
    androidmanagementEnterprisesEnrollmentTokensList(req: operations.AndroidmanagementEnterprisesEnrollmentTokensListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesEnrollmentTokensListResponse>;
    /**
     * androidmanagementEnterprisesList - Lists EMM-managed enterprises. Only BASIC fields are returned.
    **/
    androidmanagementEnterprisesList(req: operations.AndroidmanagementEnterprisesListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesListResponse>;
    /**
     * androidmanagementEnterprisesPoliciesList - Lists policies for a given enterprise.
    **/
    androidmanagementEnterprisesPoliciesList(req: operations.AndroidmanagementEnterprisesPoliciesListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesPoliciesListResponse>;
    /**
     * androidmanagementEnterprisesWebAppsCreate - Creates a web app.
    **/
    androidmanagementEnterprisesWebAppsCreate(req: operations.AndroidmanagementEnterprisesWebAppsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesWebAppsCreateResponse>;
    /**
     * androidmanagementEnterprisesWebAppsDelete - Deletes a web app.
    **/
    androidmanagementEnterprisesWebAppsDelete(req: operations.AndroidmanagementEnterprisesWebAppsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesWebAppsDeleteResponse>;
    /**
     * androidmanagementEnterprisesWebAppsGet - Gets a web app.
    **/
    androidmanagementEnterprisesWebAppsGet(req: operations.AndroidmanagementEnterprisesWebAppsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesWebAppsGetResponse>;
    /**
     * androidmanagementEnterprisesWebAppsList - Lists web apps for a given enterprise.
    **/
    androidmanagementEnterprisesWebAppsList(req: operations.AndroidmanagementEnterprisesWebAppsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesWebAppsListResponse>;
    /**
     * androidmanagementEnterprisesWebAppsPatch - Updates a web app.
    **/
    androidmanagementEnterprisesWebAppsPatch(req: operations.AndroidmanagementEnterprisesWebAppsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesWebAppsPatchResponse>;
    /**
     * androidmanagementEnterprisesWebTokensCreate - Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.
    **/
    androidmanagementEnterprisesWebTokensCreate(req: operations.AndroidmanagementEnterprisesWebTokensCreateRequest, config?: AxiosRequestConfig): Promise<operations.AndroidmanagementEnterprisesWebTokensCreateResponse>;
}
