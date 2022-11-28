import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://sso.{region}.amazonaws.com", "https://sso.{region}.amazonaws.com", "http://sso.{region}.amazonaws.com.cn", "https://sso.{region}.amazonaws.com.cn"];
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
     * attachManagedPolicyToPermissionSet - <p>Attaches an IAM managed policy ARN to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this operation. Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates to all assigned accounts.</p> </note>
    **/
    attachManagedPolicyToPermissionSet(req: operations.AttachManagedPolicyToPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.AttachManagedPolicyToPermissionSetResponse>;
    /**
     * createAccountAssignment - <p>Assigns access to a principal for a specified Amazon Web Services account using a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in Amazon Web Services SSO.</p> </note> <note> <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the SSO-created IAM role. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call <code> <a>ProvisionPermissionSet</a> </code> to make these updates.</p> </note>
    **/
    createAccountAssignment(req: operations.CreateAccountAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountAssignmentResponse>;
    /**
     * createInstanceAccessControlAttributeConfiguration - Enables the attributes-based access control (ABAC) feature for the specified Amazon Web Services SSO instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>Amazon Web Services SSO User Guide</i>.
    **/
    createInstanceAccessControlAttributeConfiguration(req: operations.CreateInstanceAccessControlAttributeConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateInstanceAccessControlAttributeConfigurationResponse>;
    /**
     * createPermissionSet - <p>Creates a permission set within a specified SSO instance.</p> <note> <p>To grant users and groups access to Amazon Web Services account resources, use <code> <a>CreateAccountAssignment</a> </code>.</p> </note>
    **/
    createPermissionSet(req: operations.CreatePermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.CreatePermissionSetResponse>;
    /**
     * deleteAccountAssignment - Deletes a principal's access from a specified Amazon Web Services account using a specified permission set.
    **/
    deleteAccountAssignment(req: operations.DeleteAccountAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccountAssignmentResponse>;
    /**
     * deleteInlinePolicyFromPermissionSet - Deletes the inline policy from a specified permission set.
    **/
    deleteInlinePolicyFromPermissionSet(req: operations.DeleteInlinePolicyFromPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInlinePolicyFromPermissionSetResponse>;
    /**
     * deleteInstanceAccessControlAttributeConfiguration - Disables the attributes-based access control (ABAC) feature for the specified Amazon Web Services SSO instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>Amazon Web Services SSO User Guide</i>.
    **/
    deleteInstanceAccessControlAttributeConfiguration(req: operations.DeleteInstanceAccessControlAttributeConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInstanceAccessControlAttributeConfigurationResponse>;
    /**
     * deletePermissionSet - Deletes the specified permission set.
    **/
    deletePermissionSet(req: operations.DeletePermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.DeletePermissionSetResponse>;
    /**
     * describeAccountAssignmentCreationStatus - Describes the status of the assignment creation request.
    **/
    describeAccountAssignmentCreationStatus(req: operations.DescribeAccountAssignmentCreationStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAccountAssignmentCreationStatusResponse>;
    /**
     * describeAccountAssignmentDeletionStatus - Describes the status of the assignment deletion request.
    **/
    describeAccountAssignmentDeletionStatus(req: operations.DescribeAccountAssignmentDeletionStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAccountAssignmentDeletionStatusResponse>;
    /**
     * describeInstanceAccessControlAttributeConfiguration - Returns the list of Amazon Web Services SSO identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified Amazon Web Services SSO instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>Amazon Web Services SSO User Guide</i>.
    **/
    describeInstanceAccessControlAttributeConfiguration(req: operations.DescribeInstanceAccessControlAttributeConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeInstanceAccessControlAttributeConfigurationResponse>;
    /**
     * describePermissionSet - Gets the details of the permission set.
    **/
    describePermissionSet(req: operations.DescribePermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.DescribePermissionSetResponse>;
    /**
     * describePermissionSetProvisioningStatus - Describes the status for the given permission set provisioning request.
    **/
    describePermissionSetProvisioningStatus(req: operations.DescribePermissionSetProvisioningStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribePermissionSetProvisioningStatusResponse>;
    /**
     * detachManagedPolicyFromPermissionSet - Detaches the attached IAM managed policy ARN from the specified permission set.
    **/
    detachManagedPolicyFromPermissionSet(req: operations.DetachManagedPolicyFromPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.DetachManagedPolicyFromPermissionSetResponse>;
    /**
     * getInlinePolicyForPermissionSet - Obtains the inline policy assigned to the permission set.
    **/
    getInlinePolicyForPermissionSet(req: operations.GetInlinePolicyForPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.GetInlinePolicyForPermissionSetResponse>;
    /**
     * listAccountAssignmentCreationStatus - Lists the status of the Amazon Web Services account assignment creation requests for a specified SSO instance.
    **/
    listAccountAssignmentCreationStatus(req: operations.ListAccountAssignmentCreationStatusRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountAssignmentCreationStatusResponse>;
    /**
     * listAccountAssignmentDeletionStatus - Lists the status of the Amazon Web Services account assignment deletion requests for a specified SSO instance.
    **/
    listAccountAssignmentDeletionStatus(req: operations.ListAccountAssignmentDeletionStatusRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountAssignmentDeletionStatusResponse>;
    /**
     * listAccountAssignments - Lists the assignee of the specified Amazon Web Services account with the specified permission set.
    **/
    listAccountAssignments(req: operations.ListAccountAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountAssignmentsResponse>;
    /**
     * listAccountsForProvisionedPermissionSet - Lists all the Amazon Web Services accounts where the specified permission set is provisioned.
    **/
    listAccountsForProvisionedPermissionSet(req: operations.ListAccountsForProvisionedPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountsForProvisionedPermissionSetResponse>;
    /**
     * listInstances - Lists the SSO instances that the caller has access to.
    **/
    listInstances(req: operations.ListInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListInstancesResponse>;
    /**
     * listManagedPoliciesInPermissionSet - Lists the IAM managed policy that is attached to a specified permission set.
    **/
    listManagedPoliciesInPermissionSet(req: operations.ListManagedPoliciesInPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.ListManagedPoliciesInPermissionSetResponse>;
    /**
     * listPermissionSetProvisioningStatus - Lists the status of the permission set provisioning requests for a specified SSO instance.
    **/
    listPermissionSetProvisioningStatus(req: operations.ListPermissionSetProvisioningStatusRequest, config?: AxiosRequestConfig): Promise<operations.ListPermissionSetProvisioningStatusResponse>;
    /**
     * listPermissionSets - Lists the <a>PermissionSet</a>s in an SSO instance.
    **/
    listPermissionSets(req: operations.ListPermissionSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListPermissionSetsResponse>;
    /**
     * listPermissionSetsProvisionedToAccount - Lists all the permission sets that are provisioned to a specified Amazon Web Services account.
    **/
    listPermissionSetsProvisionedToAccount(req: operations.ListPermissionSetsProvisionedToAccountRequest, config?: AxiosRequestConfig): Promise<operations.ListPermissionSetsProvisionedToAccountResponse>;
    /**
     * listTagsForResource - Lists the tags that are attached to a specified resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * provisionPermissionSet - The process by which a specified permission set is provisioned to the specified target.
    **/
    provisionPermissionSet(req: operations.ProvisionPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.ProvisionPermissionSetResponse>;
    /**
     * putInlinePolicyToPermissionSet - <p>Attaches an IAM inline policy to a permission set.</p> <note> <p>If the permission set is already referenced by one or more account assignments, you will need to call <code> <a>ProvisionPermissionSet</a> </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p> </note>
    **/
    putInlinePolicyToPermissionSet(req: operations.PutInlinePolicyToPermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.PutInlinePolicyToPermissionSetResponse>;
    /**
     * tagResource - Associates a set of tags with a specified resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Disassociates a set of tags from a specified resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateInstanceAccessControlAttributeConfiguration - Updates the Amazon Web Services SSO identity store attributes that you can use with the Amazon Web Services SSO instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the Amazon Web Services SSO identity store. If a SAML assertion passes any of these attributes, Amazon Web Services SSO replaces the attribute value with the value from the Amazon Web Services SSO identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>Amazon Web Services SSO User Guide</i>.
    **/
    updateInstanceAccessControlAttributeConfiguration(req: operations.UpdateInstanceAccessControlAttributeConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInstanceAccessControlAttributeConfigurationResponse>;
    /**
     * updatePermissionSet - Updates an existing permission set.
    **/
    updatePermissionSet(req: operations.UpdatePermissionSetRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePermissionSetResponse>;
}
export {};
