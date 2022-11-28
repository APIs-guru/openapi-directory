import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://workmail.{region}.amazonaws.com", "https://workmail.{region}.amazonaws.com", "http://workmail.{region}.amazonaws.com.cn", "https://workmail.{region}.amazonaws.com.cn"];
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
     * associateDelegateToResource - Adds a member (user or group) to the resource's set of delegates.
    **/
    associateDelegateToResource(req: operations.AssociateDelegateToResourceRequest, config?: AxiosRequestConfig): Promise<operations.AssociateDelegateToResourceResponse>;
    /**
     * associateMemberToGroup - Adds a member (user or group) to the group's set.
    **/
    associateMemberToGroup(req: operations.AssociateMemberToGroupRequest, config?: AxiosRequestConfig): Promise<operations.AssociateMemberToGroupResponse>;
    /**
     * cancelMailboxExportJob - <p>Cancels a mailbox export job.</p> <note> <p>If the mailbox export job is near completion, it might not be possible to cancel it.</p> </note>
    **/
    cancelMailboxExportJob(req: operations.CancelMailboxExportJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelMailboxExportJobResponse>;
    /**
     * createAlias - Adds an alias to the set of a given member (user or group) of Amazon WorkMail.
    **/
    createAlias(req: operations.CreateAliasRequest, config?: AxiosRequestConfig): Promise<operations.CreateAliasResponse>;
    /**
     * createGroup - Creates a group that can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.
    **/
    createGroup(req: operations.CreateGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupResponse>;
    /**
     * createMobileDeviceAccessRule - Creates a new mobile device access rule for the specified Amazon WorkMail organization.
    **/
    createMobileDeviceAccessRule(req: operations.CreateMobileDeviceAccessRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateMobileDeviceAccessRuleResponse>;
    /**
     * createOrganization - <p>Creates a new Amazon WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new Amazon WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p> <p>You can associate multiple email domains with an organization, then set your default email domain from the Amazon WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p> <p>Optionally, you can use a customer managed master key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, Amazon WorkMail creates a default AWS managed master key for you.</p>
    **/
    createOrganization(req: operations.CreateOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationResponse>;
    /**
     * createResource - Creates a new Amazon WorkMail resource.
    **/
    createResource(req: operations.CreateResourceRequest, config?: AxiosRequestConfig): Promise<operations.CreateResourceResponse>;
    /**
     * createUser - Creates a user who can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.
    **/
    createUser(req: operations.CreateUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserResponse>;
    /**
     * deleteAccessControlRule - Deletes an access control rule for the specified WorkMail organization.
    **/
    deleteAccessControlRule(req: operations.DeleteAccessControlRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccessControlRuleResponse>;
    /**
     * deleteAlias - Remove one or more specified aliases from a set of aliases for a given user.
    **/
    deleteAlias(req: operations.DeleteAliasRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAliasResponse>;
    /**
     * deleteGroup - Deletes a group from Amazon WorkMail.
    **/
    deleteGroup(req: operations.DeleteGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupResponse>;
    /**
     * deleteMailboxPermissions - Deletes permissions granted to a member (user or group).
    **/
    deleteMailboxPermissions(req: operations.DeleteMailboxPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMailboxPermissionsResponse>;
    /**
     * deleteMobileDeviceAccessRule - Deletes a mobile device access rule for the specified Amazon WorkMail organization.
    **/
    deleteMobileDeviceAccessRule(req: operations.DeleteMobileDeviceAccessRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMobileDeviceAccessRuleResponse>;
    /**
     * deleteOrganization - Deletes an Amazon WorkMail organization and all underlying AWS resources managed by Amazon WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>Amazon WorkMail Administrator Guide</i>.
    **/
    deleteOrganization(req: operations.DeleteOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationResponse>;
    /**
     * deleteResource - Deletes the specified resource.
    **/
    deleteResource(req: operations.DeleteResourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourceResponse>;
    /**
     * deleteRetentionPolicy - Deletes the specified retention policy from the specified organization.
    **/
    deleteRetentionPolicy(req: operations.DeleteRetentionPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRetentionPolicyResponse>;
    /**
     * deleteUser - <p>Deletes a user from Amazon WorkMail and all subsequent systems. Before you can delete a user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a> action to confirm the user state.</p> <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</p>
    **/
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * deregisterFromWorkMail - Mark a user, group, or resource as no longer used in Amazon WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is <i>Disable</i>.
    **/
    deregisterFromWorkMail(req: operations.DeregisterFromWorkMailRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterFromWorkMailResponse>;
    /**
     * describeGroup - Returns the data available for the group.
    **/
    describeGroup(req: operations.DescribeGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeGroupResponse>;
    /**
     * describeMailboxExportJob - Describes the current status of a mailbox export job.
    **/
    describeMailboxExportJob(req: operations.DescribeMailboxExportJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeMailboxExportJobResponse>;
    /**
     * describeOrganization - Provides more information regarding a given organization based on its identifier.
    **/
    describeOrganization(req: operations.DescribeOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOrganizationResponse>;
    /**
     * describeResource - Returns the data available for the resource.
    **/
    describeResource(req: operations.DescribeResourceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeResourceResponse>;
    /**
     * describeUser - Provides information regarding the user.
    **/
    describeUser(req: operations.DescribeUserRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUserResponse>;
    /**
     * disassociateDelegateFromResource - Removes a member from the resource's set of delegates.
    **/
    disassociateDelegateFromResource(req: operations.DisassociateDelegateFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateDelegateFromResourceResponse>;
    /**
     * disassociateMemberFromGroup - Removes a member from a group.
    **/
    disassociateMemberFromGroup(req: operations.DisassociateMemberFromGroupRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateMemberFromGroupResponse>;
    /**
     * getAccessControlEffect - Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, or user ID.
    **/
    getAccessControlEffect(req: operations.GetAccessControlEffectRequest, config?: AxiosRequestConfig): Promise<operations.GetAccessControlEffectResponse>;
    /**
     * getDefaultRetentionPolicy - Gets the default retention policy details for the specified organization.
    **/
    getDefaultRetentionPolicy(req: operations.GetDefaultRetentionPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetDefaultRetentionPolicyResponse>;
    /**
     * getMailboxDetails - Requests a user's mailbox details for a specified organization and user.
    **/
    getMailboxDetails(req: operations.GetMailboxDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetMailboxDetailsResponse>;
    /**
     * getMobileDeviceAccessEffect - Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the Amazon WorkMail organization for a particular user's attributes.
    **/
    getMobileDeviceAccessEffect(req: operations.GetMobileDeviceAccessEffectRequest, config?: AxiosRequestConfig): Promise<operations.GetMobileDeviceAccessEffectResponse>;
    /**
     * listAccessControlRules - Lists the access control rules for the specified organization.
    **/
    listAccessControlRules(req: operations.ListAccessControlRulesRequest, config?: AxiosRequestConfig): Promise<operations.ListAccessControlRulesResponse>;
    /**
     * listAliases - Creates a paginated call to list the aliases associated with a given entity.
    **/
    listAliases(req: operations.ListAliasesRequest, config?: AxiosRequestConfig): Promise<operations.ListAliasesResponse>;
    /**
     * listGroupMembers - Returns an overview of the members of a group. Users and groups can be members of a group.
    **/
    listGroupMembers(req: operations.ListGroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupMembersResponse>;
    /**
     * listGroups - Returns summaries of the organization's groups.
    **/
    listGroups(req: operations.ListGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupsResponse>;
    /**
     * listMailboxExportJobs - Lists the mailbox export jobs started for the specified organization within the last seven days.
    **/
    listMailboxExportJobs(req: operations.ListMailboxExportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListMailboxExportJobsResponse>;
    /**
     * listMailboxPermissions - Lists the mailbox permissions associated with a user, group, or resource mailbox.
    **/
    listMailboxPermissions(req: operations.ListMailboxPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ListMailboxPermissionsResponse>;
    /**
     * listMobileDeviceAccessRules - Lists the mobile device access rules for the specified Amazon WorkMail organization.
    **/
    listMobileDeviceAccessRules(req: operations.ListMobileDeviceAccessRulesRequest, config?: AxiosRequestConfig): Promise<operations.ListMobileDeviceAccessRulesResponse>;
    /**
     * listOrganizations - Returns summaries of the customer's organizations.
    **/
    listOrganizations(req: operations.ListOrganizationsRequest, config?: AxiosRequestConfig): Promise<operations.ListOrganizationsResponse>;
    /**
     * listResourceDelegates - Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource.
    **/
    listResourceDelegates(req: operations.ListResourceDelegatesRequest, config?: AxiosRequestConfig): Promise<operations.ListResourceDelegatesResponse>;
    /**
     * listResources - Returns summaries of the organization's resources.
    **/
    listResources(req: operations.ListResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListResourcesResponse>;
    /**
     * listTagsForResource - Lists the tags applied to an Amazon WorkMail organization resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listUsers - Returns summaries of the organization's users.
    **/
    listUsers(req: operations.ListUsersRequest, config?: AxiosRequestConfig): Promise<operations.ListUsersResponse>;
    /**
     * putAccessControlRule - Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, and user IDs. Adding a new rule with the same name as an existing rule replaces the older rule.
    **/
    putAccessControlRule(req: operations.PutAccessControlRuleRequest, config?: AxiosRequestConfig): Promise<operations.PutAccessControlRuleResponse>;
    /**
     * putMailboxPermissions - Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.
    **/
    putMailboxPermissions(req: operations.PutMailboxPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PutMailboxPermissionsResponse>;
    /**
     * putRetentionPolicy - Puts a retention policy to the specified organization.
    **/
    putRetentionPolicy(req: operations.PutRetentionPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutRetentionPolicyResponse>;
    /**
     * registerToWorkMail - <p>Registers an existing and disabled user, group, or resource for Amazon WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console functionality for this operation is <i>Enable</i>. </p> <p>Users can either be created by calling the <a>CreateUser</a> API operation or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
    **/
    registerToWorkMail(req: operations.RegisterToWorkMailRequest, config?: AxiosRequestConfig): Promise<operations.RegisterToWorkMailResponse>;
    /**
     * resetPassword - Allows the administrator to reset the password for a user.
    **/
    resetPassword(req: operations.ResetPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ResetPasswordResponse>;
    /**
     * startMailboxExportJob - Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in the <i>Amazon WorkMail Administrator Guide</i>.
    **/
    startMailboxExportJob(req: operations.StartMailboxExportJobRequest, config?: AxiosRequestConfig): Promise<operations.StartMailboxExportJobResponse>;
    /**
     * tagResource - Applies the specified tags to the specified Amazon WorkMail organization resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Untags the specified tags from the specified Amazon WorkMail organization resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateMailboxQuota - Updates a user's current mailbox quota for a specified organization and user.
    **/
    updateMailboxQuota(req: operations.UpdateMailboxQuotaRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMailboxQuotaResponse>;
    /**
     * updateMobileDeviceAccessRule - Updates a mobile device access rule for the specified Amazon WorkMail organization.
    **/
    updateMobileDeviceAccessRule(req: operations.UpdateMobileDeviceAccessRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMobileDeviceAccessRuleResponse>;
    /**
     * updatePrimaryEmailAddress - Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary.
    **/
    updatePrimaryEmailAddress(req: operations.UpdatePrimaryEmailAddressRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePrimaryEmailAddressResponse>;
    /**
     * updateResource - Updates data for the resource. To have the latest information, it must be preceded by a <a>DescribeResource</a> call. The dataset in the request should be the one expected when performing another <code>DescribeResource</code> call.
    **/
    updateResource(req: operations.UpdateResourceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResourceResponse>;
}
export {};
