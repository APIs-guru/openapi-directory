import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tables {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bigqueryTablesDelete - Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
    **/
    bigqueryTablesDelete(req: operations.BigqueryTablesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryTablesDeleteResponse>;
    /**
     * bigqueryTablesGet - Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
    **/
    bigqueryTablesGet(req: operations.BigqueryTablesGetRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryTablesGetResponse>;
    /**
     * bigqueryTablesGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    bigqueryTablesGetIamPolicy(req: operations.BigqueryTablesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryTablesGetIamPolicyResponse>;
    /**
     * bigqueryTablesInsert - Creates a new, empty table in the dataset.
    **/
    bigqueryTablesInsert(req: operations.BigqueryTablesInsertRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryTablesInsertResponse>;
    /**
     * bigqueryTablesList - Lists all tables in the specified dataset. Requires the READER dataset role.
    **/
    bigqueryTablesList(req: operations.BigqueryTablesListRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryTablesListResponse>;
    /**
     * bigqueryTablesPatch - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
    **/
    bigqueryTablesPatch(req: operations.BigqueryTablesPatchRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryTablesPatchResponse>;
    /**
     * bigqueryTablesSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    bigqueryTablesSetIamPolicy(req: operations.BigqueryTablesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryTablesSetIamPolicyResponse>;
    /**
     * bigqueryTablesTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    bigqueryTablesTestIamPermissions(req: operations.BigqueryTablesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryTablesTestIamPermissionsResponse>;
    /**
     * bigqueryTablesUpdate - Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.
    **/
    bigqueryTablesUpdate(req: operations.BigqueryTablesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.BigqueryTablesUpdateResponse>;
}
