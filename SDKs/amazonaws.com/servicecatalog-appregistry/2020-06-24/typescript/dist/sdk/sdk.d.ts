import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://servicecatalog-appregistry.{region}.amazonaws.com", "https://servicecatalog-appregistry.{region}.amazonaws.com", "http://servicecatalog-appregistry.{region}.amazonaws.com.cn", "https://servicecatalog-appregistry.{region}.amazonaws.com.cn"];
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
     * associateAttributeGroup - Associates an attribute group with an application to augment the application's metadata with the group's attributes. This feature enables applications to be described with user-defined details that are machine-readable, such as third-party integrations.
    **/
    associateAttributeGroup(req: operations.AssociateAttributeGroupRequest, config?: AxiosRequestConfig): Promise<operations.AssociateAttributeGroupResponse>;
    /**
     * associateResource - Associates a resource with an application. Both the resource and the application can be specified either by ID or name.
    **/
    associateResource(req: operations.AssociateResourceRequest, config?: AxiosRequestConfig): Promise<operations.AssociateResourceResponse>;
    /**
     * createApplication - Creates a new application that is the top-level node in a hierarchy of related cloud resource abstractions.
    **/
    createApplication(req: operations.CreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * createAttributeGroup - Creates a new attribute group as a container for user-defined attributes. This feature enables users to have full control over their cloud application's metadata in a rich machine-readable format to facilitate integration with automated workflows and third-party tools.
    **/
    createAttributeGroup(req: operations.CreateAttributeGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateAttributeGroupResponse>;
    /**
     * deleteApplication - Deletes an application that is specified either by its application ID or name. All associated attribute groups and resources must be disassociated from it before deleting an application.
    **/
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * deleteAttributeGroup - Deletes an attribute group, specified either by its attribute group ID or name.
    **/
    deleteAttributeGroup(req: operations.DeleteAttributeGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttributeGroupResponse>;
    /**
     * disassociateAttributeGroup - Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.
    **/
    disassociateAttributeGroup(req: operations.DisassociateAttributeGroupRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateAttributeGroupResponse>;
    /**
     * disassociateResource - Disassociates a resource from application. Both the resource and the application can be specified either by ID or name.
    **/
    disassociateResource(req: operations.DisassociateResourceRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateResourceResponse>;
    /**
     * getApplication - Retrieves metadata information about one of your applications. The application can be specified either by its unique ID or by its name (which is unique within one account in one region at a given point in time). Specify by ID in automated workflows if you want to make sure that the exact same application is returned or a <code>ResourceNotFoundException</code> is thrown, avoiding the ABA addressing problem.
    **/
    getApplication(req: operations.GetApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationResponse>;
    /**
     * getAssociatedResource - Gets the resource associated with the application.
    **/
    getAssociatedResource(req: operations.GetAssociatedResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociatedResourceResponse>;
    /**
     * getAttributeGroup - Retrieves an attribute group, either by its name or its ID. The attribute group can be specified either by its unique ID or by its name.
    **/
    getAttributeGroup(req: operations.GetAttributeGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetAttributeGroupResponse>;
    /**
     * listApplications - Retrieves a list of all of your applications. Results are paginated.
    **/
    listApplications(req: operations.ListApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationsResponse>;
    /**
     * listAssociatedAttributeGroups - Lists all attribute groups that are associated with specified application. Results are paginated.
    **/
    listAssociatedAttributeGroups(req: operations.ListAssociatedAttributeGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssociatedAttributeGroupsResponse>;
    /**
     * listAssociatedResources - Lists all resources that are associated with specified application. Results are paginated.
    **/
    listAssociatedResources(req: operations.ListAssociatedResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListAssociatedResourcesResponse>;
    /**
     * listAttributeGroups - Lists all attribute groups which you have access to. Results are paginated.
    **/
    listAttributeGroups(req: operations.ListAttributeGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListAttributeGroupsResponse>;
    /**
     * listTagsForResource - Lists all of the tags on the resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * syncResource - <p>Syncs the resource with current AppRegistry records.</p> <p>Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.</p>
    **/
    syncResource(req: operations.SyncResourceRequest, config?: AxiosRequestConfig): Promise<operations.SyncResourceResponse>;
    /**
     * tagResource - <p>Assigns one or more tags (key-value pairs) to the specified resource.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p> <p>This operation returns an empty response if the call was successful.</p>
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - <p>Removes tags from a resource.</p> <p>This operation returns an empty response if the call was successful.</p>
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateApplication - Updates an existing application with new attributes.
    **/
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
    /**
     * updateAttributeGroup - Updates an existing attribute group with new details.
    **/
    updateAttributeGroup(req: operations.UpdateAttributeGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAttributeGroupResponse>;
}
export {};
