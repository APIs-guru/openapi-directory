import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://ram.{region}.amazonaws.com", "https://ram.{region}.amazonaws.com", "http://ram.{region}.amazonaws.com.cn", "https://ram.{region}.amazonaws.com.cn"];
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
     * acceptResourceShareInvitation - Accepts an invitation to a resource share from another Amazon Web Services account.
    **/
    acceptResourceShareInvitation(req: operations.AcceptResourceShareInvitationRequest, config?: AxiosRequestConfig): Promise<operations.AcceptResourceShareInvitationResponse>;
    /**
     * associateResourceShare - Associates the specified resource share with the specified principals and resources.
    **/
    associateResourceShare(req: operations.AssociateResourceShareRequest, config?: AxiosRequestConfig): Promise<operations.AssociateResourceShareResponse>;
    /**
     * associateResourceSharePermission - Associates a permission with a resource share.
    **/
    associateResourceSharePermission(req: operations.AssociateResourceSharePermissionRequest, config?: AxiosRequestConfig): Promise<operations.AssociateResourceSharePermissionResponse>;
    /**
     * createResourceShare - <p>Creates a resource share. You must provide a list of the Amazon Resource Names (ARNs) for the resources you want to share. You must also specify who you want to share the resources with, and the permissions that you grant them.</p> <note> <p>Sharing a resource makes it available for use by principals outside of the Amazon Web Services account that created the resource. Sharing doesn't change any permissions or quotas that apply to the resource in the account that created it.</p> </note>
    **/
    createResourceShare(req: operations.CreateResourceShareRequest, config?: AxiosRequestConfig): Promise<operations.CreateResourceShareResponse>;
    /**
     * deleteResourceShare - Deletes the specified resource share.
    **/
    deleteResourceShare(req: operations.DeleteResourceShareRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourceShareResponse>;
    /**
     * disassociateResourceShare - Disassociates the specified principals or resources from the specified resource share.
    **/
    disassociateResourceShare(req: operations.DisassociateResourceShareRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateResourceShareResponse>;
    /**
     * disassociateResourceSharePermission - Disassociates an RAM permission from a resource share.
    **/
    disassociateResourceSharePermission(req: operations.DisassociateResourceSharePermissionRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateResourceSharePermissionResponse>;
    /**
     * enableSharingWithAwsOrganization - <p>Enables resource sharing within your organization in Organizations.</p> <p>The caller must be the master account for the organization.</p>
    **/
    enableSharingWithAwsOrganization(req: operations.EnableSharingWithAwsOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.EnableSharingWithAwsOrganizationResponse>;
    /**
     * getPermission - Gets the contents of an RAM permission in JSON format.
    **/
    getPermission(req: operations.GetPermissionRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionResponse>;
    /**
     * getResourcePolicies - Gets the policies for the specified resources that you own and have shared.
    **/
    getResourcePolicies(req: operations.GetResourcePoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcePoliciesResponse>;
    /**
     * getResourceShareAssociations - Gets the resources or principals for the resource shares that you own.
    **/
    getResourceShareAssociations(req: operations.GetResourceShareAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceShareAssociationsResponse>;
    /**
     * getResourceShareInvitations - Gets the invitations that you have received for resource shares.
    **/
    getResourceShareInvitations(req: operations.GetResourceShareInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceShareInvitationsResponse>;
    /**
     * getResourceShares - Gets the resource shares that you own or the resource shares that are shared with you.
    **/
    getResourceShares(req: operations.GetResourceSharesRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceSharesResponse>;
    /**
     * listPendingInvitationResources - Lists the resources in a resource share that is shared with you but that the invitation is still pending for.
    **/
    listPendingInvitationResources(req: operations.ListPendingInvitationResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListPendingInvitationResourcesResponse>;
    /**
     * listPermissions - Lists the RAM permissions.
    **/
    listPermissions(req: operations.ListPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ListPermissionsResponse>;
    /**
     * listPrincipals - Lists the principals that you have shared resources with or that have shared resources with you.
    **/
    listPrincipals(req: operations.ListPrincipalsRequest, config?: AxiosRequestConfig): Promise<operations.ListPrincipalsResponse>;
    /**
     * listResourceSharePermissions - Lists the RAM permissions that are associated with a resource share.
    **/
    listResourceSharePermissions(req: operations.ListResourceSharePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ListResourceSharePermissionsResponse>;
    /**
     * listResourceTypes - Lists the shareable resource types supported by RAM.
    **/
    listResourceTypes(req: operations.ListResourceTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListResourceTypesResponse>;
    /**
     * listResources - Lists the resources that you added to a resource shares or the resources that are shared with you.
    **/
    listResources(req: operations.ListResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListResourcesResponse>;
    /**
     * promoteResourceShareCreatedFromPolicy - <p>Resource shares that were created by attaching a policy to a resource are visible only to the resource share owner, and the resource share cannot be modified in RAM.</p> <p>Use this API action to promote the resource share. When you promote the resource share, it becomes:</p> <ul> <li> <p>Visible to all principals that it is shared with.</p> </li> <li> <p>Modifiable in RAM.</p> </li> </ul>
    **/
    promoteResourceShareCreatedFromPolicy(req: operations.PromoteResourceShareCreatedFromPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PromoteResourceShareCreatedFromPolicyResponse>;
    /**
     * rejectResourceShareInvitation - Rejects an invitation to a resource share from another Amazon Web Services account.
    **/
    rejectResourceShareInvitation(req: operations.RejectResourceShareInvitationRequest, config?: AxiosRequestConfig): Promise<operations.RejectResourceShareInvitationResponse>;
    /**
     * tagResource - Adds the specified tags to the specified resource share that you own.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes the specified tags from the specified resource share that you own.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateResourceShare - Updates the specified resource share that you own.
    **/
    updateResourceShare(req: operations.UpdateResourceShareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResourceShareResponse>;
}
export {};
