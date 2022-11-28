import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * accesscontextmanagerOrganizationsGcpUserAccessBindingsCreate - Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.
    **/
    accesscontextmanagerOrganizationsGcpUserAccessBindingsCreate(req: operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateResponse>;
    /**
     * accesscontextmanagerOrganizationsGcpUserAccessBindingsDelete - Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.
    **/
    accesscontextmanagerOrganizationsGcpUserAccessBindingsDelete(req: operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteResponse>;
    /**
     * accesscontextmanagerOrganizationsGcpUserAccessBindingsGet - Gets the GcpUserAccessBinding with the given name.
    **/
    accesscontextmanagerOrganizationsGcpUserAccessBindingsGet(req: operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse>;
    /**
     * accesscontextmanagerOrganizationsGcpUserAccessBindingsList - Lists all GcpUserAccessBindings for a Google Cloud organization.
    **/
    accesscontextmanagerOrganizationsGcpUserAccessBindingsList(req: operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse>;
    /**
     * accesscontextmanagerOrganizationsGcpUserAccessBindingsPatch - Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.
    **/
    accesscontextmanagerOrganizationsGcpUserAccessBindingsPatch(req: operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchRequest, config?: AxiosRequestConfig): Promise<operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchResponse>;
}
