import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://lakeformation.{region}.amazonaws.com", "https://lakeformation.{region}.amazonaws.com", "http://lakeformation.{region}.amazonaws.com.cn", "https://lakeformation.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * addLfTagsToResource - Attaches one or more tags to an existing resource.
    **/
    addLfTagsToResource(req: operations.AddLfTagsToResourceRequest, config?: AxiosRequestConfig): Promise<operations.AddLfTagsToResourceResponse>;
    /**
     * batchGrantPermissions - Batch operation to grant permissions to the principal.
    **/
    batchGrantPermissions(req: operations.BatchGrantPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGrantPermissionsResponse>;
    /**
     * batchRevokePermissions - Batch operation to revoke permissions from the principal.
    **/
    batchRevokePermissions(req: operations.BatchRevokePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.BatchRevokePermissionsResponse>;
    /**
     * createLfTag - Creates a tag with the specified name and values.
    **/
    createLfTag(req: operations.CreateLfTagRequest, config?: AxiosRequestConfig): Promise<operations.CreateLfTagResponse>;
    /**
     * deleteLfTag - Deletes the specified tag key name. If the attribute key does not exist or the tag does not exist, then the operation will not do anything. If the attribute key exists, then the operation checks if any resources are tagged with this attribute key, if yes, the API throws a 400 Exception with the message "Delete not allowed" as the tag key is still attached with resources. You can consider untagging resources with this tag key.
    **/
    deleteLfTag(req: operations.DeleteLfTagRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLfTagResponse>;
    /**
     * deregisterResource - <p>Deregisters the resource as managed by the Data Catalog.</p> <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
    **/
    deregisterResource(req: operations.DeregisterResourceRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterResourceResponse>;
    /**
     * describeResource - Retrieves the current data access role for the given resource registered in AWS Lake Formation.
    **/
    describeResource(req: operations.DescribeResourceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeResourceResponse>;
    /**
     * getDataLakeSettings - Retrieves the list of the data lake administrators of a Lake Formation-managed data lake.
    **/
    getDataLakeSettings(req: operations.GetDataLakeSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDataLakeSettingsResponse>;
    /**
     * getEffectivePermissionsForPath - Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.
    **/
    getEffectivePermissionsForPath(req: operations.GetEffectivePermissionsForPathRequest, config?: AxiosRequestConfig): Promise<operations.GetEffectivePermissionsForPathResponse>;
    /**
     * getLfTag - Returns a tag definition.
    **/
    getLfTag(req: operations.GetLfTagRequest, config?: AxiosRequestConfig): Promise<operations.GetLfTagResponse>;
    /**
     * getResourceLfTags - Returns the tags applied to a resource.
    **/
    getResourceLfTags(req: operations.GetResourceLfTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceLfTagsResponse>;
    /**
     * grantPermissions - <p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
    **/
    grantPermissions(req: operations.GrantPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GrantPermissionsResponse>;
    /**
     * listLfTags - Lists tags that the requester has permission to view.
    **/
    listLfTags(req: operations.ListLfTagsRequest, config?: AxiosRequestConfig): Promise<operations.ListLfTagsResponse>;
    /**
     * listPermissions - <p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p> <p>This operation returns only those permissions that have been explicitly granted.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
    **/
    listPermissions(req: operations.ListPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ListPermissionsResponse>;
    /**
     * listResources - Lists the resources registered to be managed by the Data Catalog.
    **/
    listResources(req: operations.ListResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListResourcesResponse>;
    /**
     * putDataLakeSettings - <p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p> <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>
    **/
    putDataLakeSettings(req: operations.PutDataLakeSettingsRequest, config?: AxiosRequestConfig): Promise<operations.PutDataLakeSettingsResponse>;
    /**
     * registerResource - <p>Registers the resource as managed by the Data Catalog.</p> <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p> <p>The following request registers a new location and gives AWS Lake Formation permission to use the service-linked role to access that location.</p> <p> <code>ResourceArn = arn:aws:s3:::my-bucket UseServiceLinkedRole = true</code> </p> <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p> <p> <code>arn:aws:iam::12345:role/my-data-access-role</code> </p>
    **/
    registerResource(req: operations.RegisterResourceRequest, config?: AxiosRequestConfig): Promise<operations.RegisterResourceResponse>;
    /**
     * removeLfTagsFromResource - Removes a tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.
    **/
    removeLfTagsFromResource(req: operations.RemoveLfTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.RemoveLfTagsFromResourceResponse>;
    /**
     * revokePermissions - Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
    **/
    revokePermissions(req: operations.RevokePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.RevokePermissionsResponse>;
    /**
     * searchDatabasesByLfTags - This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.
    **/
    searchDatabasesByLfTags(req: operations.SearchDatabasesByLfTagsRequest, config?: AxiosRequestConfig): Promise<operations.SearchDatabasesByLfTagsResponse>;
    /**
     * searchTablesByLfTags - This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LFTags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.
    **/
    searchTablesByLfTags(req: operations.SearchTablesByLfTagsRequest, config?: AxiosRequestConfig): Promise<operations.SearchTablesByLfTagsResponse>;
    /**
     * updateLfTag - Updates the list of possible values for the specified tag key. If the tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the tag key's value.
    **/
    updateLfTag(req: operations.UpdateLfTagRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLfTagResponse>;
    /**
     * updateResource - Updates the data access role used for vending access to the given (registered) resource in AWS Lake Formation.
    **/
    updateResource(req: operations.UpdateResourceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResourceResponse>;
}
export {};
