import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://securityhub.{region}.amazonaws.com", "https://securityhub.{region}.amazonaws.com", "http://securityhub.{region}.amazonaws.com.cn", "https://securityhub.{region}.amazonaws.com.cn"];
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
     * acceptAdministratorInvitation - <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator account that the invitation was sent from.</p> <p>This operation is only used by member accounts that are not added through Organizations.</p> <p>When the member account accepts the invitation, permission is granted to the administrator account to view findings generated in the member account.</p>
    **/
    acceptAdministratorInvitation(req: operations.AcceptAdministratorInvitationRequest, config?: AxiosRequestConfig): Promise<operations.AcceptAdministratorInvitationResponse>;
    /**
     * acceptInvitation - <p>This method is deprecated. Instead, use <code>AcceptAdministratorInvitation</code>.</p> <p>The Security Hub console continues to use <code>AcceptInvitation</code>. It will eventually change to use <code>AcceptAdministratorInvitation</code>. Any IAM policies that specifically control access to this function must continue to use <code>AcceptInvitation</code>. You should also add <code>AcceptAdministratorInvitation</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>AcceptAdministratorInvitation</code>.</p> <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator account that the invitation was sent from.</p> <p>This operation is only used by member accounts that are not added through Organizations.</p> <p>When the member account accepts the invitation, permission is granted to the administrator account to view findings generated in the member account.</p>
    **/
    acceptInvitation(req: operations.AcceptInvitationRequest, config?: AxiosRequestConfig): Promise<operations.AcceptInvitationResponse>;
    /**
     * batchDisableStandards - <p>Disables the standards specified by the provided <code>StandardsSubscriptionArns</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a> section of the <i>Security Hub User Guide</i>.</p>
    **/
    batchDisableStandards(req: operations.BatchDisableStandardsRequest, config?: AxiosRequestConfig): Promise<operations.BatchDisableStandardsResponse>;
    /**
     * batchEnableStandards - <p>Enables the standards specified by the provided <code>StandardsArn</code>. To obtain the ARN for a standard, use the <code>DescribeStandards</code> operation.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a> section of the <i>Security Hub User Guide</i>.</p>
    **/
    batchEnableStandards(req: operations.BatchEnableStandardsRequest, config?: AxiosRequestConfig): Promise<operations.BatchEnableStandardsResponse>;
    /**
     * batchImportFindings - <p>Imports security findings generated from an integrated product into Security Hub. This action is requested by the integrated product to import its findings into Security Hub.</p> <p>The maximum allowed size for a finding is 240 Kb. An error is returned for any finding larger than 240 Kb.</p> <p>After a finding is created, <code>BatchImportFindings</code> cannot be used to update the following finding fields and objects, which Security Hub customers use to manage their investigation workflow.</p> <ul> <li> <p> <code>Note</code> </p> </li> <li> <p> <code>UserDefinedFields</code> </p> </li> <li> <p> <code>VerificationState</code> </p> </li> <li> <p> <code>Workflow</code> </p> </li> </ul> <p>Finding providers also should not use <code>BatchImportFindings</code> to update the following attributes.</p> <ul> <li> <p> <code>Confidence</code> </p> </li> <li> <p> <code>Criticality</code> </p> </li> <li> <p> <code>RelatedFindings</code> </p> </li> <li> <p> <code>Severity</code> </p> </li> <li> <p> <code>Types</code> </p> </li> </ul> <p>Instead, finding providers use <code>FindingProviderFields</code> to provide values for these attributes.</p>
    **/
    batchImportFindings(req: operations.BatchImportFindingsRequest, config?: AxiosRequestConfig): Promise<operations.BatchImportFindingsResponse>;
    /**
     * batchUpdateFindings - <p>Used by Security Hub customers to update information about their investigation into a finding. Requested by administrator accounts or member accounts. Administrator accounts can update findings for their account and their member accounts. Member accounts can update findings for their account.</p> <p>Updates from <code>BatchUpdateFindings</code> do not affect the value of <code>UpdatedAt</code> for a finding.</p> <p>Administrator and member accounts can use <code>BatchUpdateFindings</code> to update the following finding fields and objects.</p> <ul> <li> <p> <code>Confidence</code> </p> </li> <li> <p> <code>Criticality</code> </p> </li> <li> <p> <code>Note</code> </p> </li> <li> <p> <code>RelatedFindings</code> </p> </li> <li> <p> <code>Severity</code> </p> </li> <li> <p> <code>Types</code> </p> </li> <li> <p> <code>UserDefinedFields</code> </p> </li> <li> <p> <code>VerificationState</code> </p> </li> <li> <p> <code>Workflow</code> </p> </li> </ul> <p>You can configure IAM policies to restrict access to fields and field values. For example, you might not want member accounts to be able to suppress findings or change the finding severity. See <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-update-batchupdatefindings.html#batchupdatefindings-configure-access">Configuring access to BatchUpdateFindings</a> in the <i>Security Hub User Guide</i>.</p>
    **/
    batchUpdateFindings(req: operations.BatchUpdateFindingsRequest, config?: AxiosRequestConfig): Promise<operations.BatchUpdateFindingsResponse>;
    /**
     * createActionTarget - <p>Creates a custom action target in Security Hub.</p> <p>You can use custom actions on findings and insights in Security Hub to trigger target actions in Amazon CloudWatch Events.</p>
    **/
    createActionTarget(req: operations.CreateActionTargetRequest, config?: AxiosRequestConfig): Promise<operations.CreateActionTargetResponse>;
    /**
     * createInsight - <p>Creates a custom insight in Security Hub. An insight is a consolidation of findings that relate to a security issue that requires attention or remediation.</p> <p>To group the related findings in the insight, use the <code>GroupByAttribute</code>.</p>
    **/
    createInsight(req: operations.CreateInsightRequest, config?: AxiosRequestConfig): Promise<operations.CreateInsightResponse>;
    /**
     * createMembers - <p>Creates a member association in Security Hub between the specified accounts and the account used to make the request, which is the administrator account. If you are integrated with Organizations, then the administrator account is designated by the organization management account.</p> <p> <code>CreateMembers</code> is always used to add accounts that are not organization members.</p> <p>For accounts that are managed using Organizations, <code>CreateMembers</code> is only used in the following cases:</p> <ul> <li> <p>Security Hub is not configured to automatically add new organization accounts.</p> </li> <li> <p>The account was disassociated or deleted in Security Hub.</p> </li> </ul> <p>This action can only be used by an account that has Security Hub enabled. To enable Security Hub, you can use the <code>EnableSecurityHub</code> operation.</p> <p>For accounts that are not organization members, you create the account association and then send an invitation to the member account. To send the invitation, you use the <code>InviteMembers</code> operation. If the account owner accepts the invitation, the account becomes a member account in Security Hub.</p> <p>Accounts that are managed using Organizations do not receive an invitation. They automatically become a member account in Security Hub, and Security Hub is automatically enabled for those accounts. Note that Security Hub cannot be enabled automatically for the organization management account. The organization management account must enable Security Hub before the administrator account enables it as a member account.</p> <p>A permissions policy is added that permits the administrator account to view the findings generated in the member account. When Security Hub is enabled in a member account, the member account findings are also visible to the administrator account. </p> <p>To remove the association between the administrator and member accounts, use the <code>DisassociateFromMasterAccount</code> or <code>DisassociateMembers</code> operation.</p>
    **/
    createMembers(req: operations.CreateMembersRequest, config?: AxiosRequestConfig): Promise<operations.CreateMembersResponse>;
    /**
     * declineInvitations - <p>Declines invitations to become a member account.</p> <p>This operation is only used by accounts that are not part of an organization. Organization accounts do not receive invitations.</p>
    **/
    declineInvitations(req: operations.DeclineInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.DeclineInvitationsResponse>;
    /**
     * deleteActionTarget - <p>Deletes a custom action target from Security Hub.</p> <p>Deleting a custom action target does not affect any findings or insights that were already sent to Amazon CloudWatch Events using the custom action.</p>
    **/
    deleteActionTarget(req: operations.DeleteActionTargetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteActionTargetResponse>;
    /**
     * deleteInsight - Deletes the insight specified by the <code>InsightArn</code>.
    **/
    deleteInsight(req: operations.DeleteInsightRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInsightResponse>;
    /**
     * deleteInvitations - <p>Deletes invitations received by the Amazon Web Services account to become a member account.</p> <p>This operation is only used by accounts that are not part of an organization. Organization accounts do not receive invitations.</p>
    **/
    deleteInvitations(req: operations.DeleteInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInvitationsResponse>;
    /**
     * deleteMembers - <p>Deletes the specified member accounts from Security Hub.</p> <p>Can be used to delete member accounts that belong to an organization as well as member accounts that were invited manually.</p>
    **/
    deleteMembers(req: operations.DeleteMembersRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMembersResponse>;
    /**
     * describeActionTargets - Returns a list of the custom action targets in Security Hub in your account.
    **/
    describeActionTargets(req: operations.DescribeActionTargetsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeActionTargetsResponse>;
    /**
     * describeHub - Returns details about the Hub resource in your account, including the <code>HubArn</code> and the time when you enabled Security Hub.
    **/
    describeHub(req: operations.DescribeHubRequest, config?: AxiosRequestConfig): Promise<operations.DescribeHubResponse>;
    /**
     * describeOrganizationConfiguration - Returns information about the Organizations configuration for Security Hub. Can only be called from a Security Hub administrator account.
    **/
    describeOrganizationConfiguration(req: operations.DescribeOrganizationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOrganizationConfigurationResponse>;
    /**
     * describeProducts - <p>Returns information about product integrations in Security Hub.</p> <p>You can optionally provide an integration ARN. If you provide an integration ARN, then the results only include that integration.</p> <p>If you do not provide an integration ARN, then the results include all of the available product integrations. </p>
    **/
    describeProducts(req: operations.DescribeProductsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProductsResponse>;
    /**
     * describeStandards - <p>Returns a list of the available standards in Security Hub.</p> <p>For each standard, the results include the standard ARN, the name, and a description. </p>
    **/
    describeStandards(req: operations.DescribeStandardsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeStandardsResponse>;
    /**
     * describeStandardsControls - <p>Returns a list of security standards controls.</p> <p>For each control, the results include information about whether it is currently enabled, the severity, and a link to remediation information.</p>
    **/
    describeStandardsControls(req: operations.DescribeStandardsControlsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeStandardsControlsResponse>;
    /**
     * disableImportFindingsForProduct - Disables the integration of the specified product with Security Hub. After the integration is disabled, findings from that product are no longer sent to Security Hub.
    **/
    disableImportFindingsForProduct(req: operations.DisableImportFindingsForProductRequest, config?: AxiosRequestConfig): Promise<operations.DisableImportFindingsForProductResponse>;
    /**
     * disableOrganizationAdminAccount - Disables a Security Hub administrator account. Can only be called by the organization management account.
    **/
    disableOrganizationAdminAccount(req: operations.DisableOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.DisableOrganizationAdminAccountResponse>;
    /**
     * disableSecurityHub - <p>Disables Security Hub in your account only in the current Region. To disable Security Hub in all Regions, you must submit one request per Region where you have enabled Security Hub.</p> <p>When you disable Security Hub for an administrator account, it doesn't disable Security Hub for any associated member accounts.</p> <p>When you disable Security Hub, your existing findings and insights and any Security Hub configuration settings are deleted after 90 days and cannot be recovered. Any standards that were enabled are disabled, and your administrator and member account associations are removed.</p> <p>If you want to save your existing findings, you must export them before you disable Security Hub.</p>
    **/
    disableSecurityHub(req: operations.DisableSecurityHubRequest, config?: AxiosRequestConfig): Promise<operations.DisableSecurityHubResponse>;
    /**
     * disassociateFromAdministratorAccount - <p>Disassociates the current Security Hub member account from the associated administrator account.</p> <p>This operation is only used by accounts that are not part of an organization. For organization accounts, only the administrator account can disassociate a member account.</p>
    **/
    disassociateFromAdministratorAccount(req: operations.DisassociateFromAdministratorAccountRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateFromAdministratorAccountResponse>;
    /**
     * disassociateFromMasterAccount - <p>This method is deprecated. Instead, use <code>DisassociateFromAdministratorAccount</code>.</p> <p>The Security Hub console continues to use <code>DisassociateFromMasterAccount</code>. It will eventually change to use <code>DisassociateFromAdministratorAccount</code>. Any IAM policies that specifically control access to this function must continue to use <code>DisassociateFromMasterAccount</code>. You should also add <code>DisassociateFromAdministratorAccount</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>DisassociateFromAdministratorAccount</code>.</p> <p>Disassociates the current Security Hub member account from the associated administrator account.</p> <p>This operation is only used by accounts that are not part of an organization. For organization accounts, only the administrator account can disassociate a member account.</p>
    **/
    disassociateFromMasterAccount(req: operations.DisassociateFromMasterAccountRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateFromMasterAccountResponse>;
    /**
     * disassociateMembers - <p>Disassociates the specified member accounts from the associated administrator account.</p> <p>Can be used to disassociate both accounts that are managed using Organizations and accounts that were invited manually.</p>
    **/
    disassociateMembers(req: operations.DisassociateMembersRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateMembersResponse>;
    /**
     * enableImportFindingsForProduct - <p>Enables the integration of a partner product with Security Hub. Integrated products send findings to Security Hub.</p> <p>When you enable a product integration, a permissions policy that grants permission for the product to send findings to Security Hub is applied.</p>
    **/
    enableImportFindingsForProduct(req: operations.EnableImportFindingsForProductRequest, config?: AxiosRequestConfig): Promise<operations.EnableImportFindingsForProductResponse>;
    /**
     * enableOrganizationAdminAccount - Designates the Security Hub administrator account for an organization. Can only be called by the organization management account.
    **/
    enableOrganizationAdminAccount(req: operations.EnableOrganizationAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.EnableOrganizationAdminAccountResponse>;
    /**
     * enableSecurityHub - <p>Enables Security Hub for your account in the current Region or the Region you specify in the request.</p> <p>When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings from other services that are integrated with Security Hub.</p> <p>When you use the <code>EnableSecurityHub</code> operation to enable Security Hub, you also automatically enable the following standards.</p> <ul> <li> <p>CIS Amazon Web Services Foundations</p> </li> <li> <p>Amazon Web Services Foundational Security Best Practices</p> </li> </ul> <p>You do not enable the Payment Card Industry Data Security Standard (PCI DSS) standard. </p> <p>To not enable the automatically enabled standards, set <code>EnableDefaultStandards</code> to <code>false</code>.</p> <p>After you enable Security Hub, to enable a standard, use the <code>BatchEnableStandards</code> operation. To disable a standard, use the <code>BatchDisableStandards</code> operation.</p> <p>To learn more, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-settingup.html">setup information</a> in the <i>Security Hub User Guide</i>.</p>
    **/
    enableSecurityHub(req: operations.EnableSecurityHubRequest, config?: AxiosRequestConfig): Promise<operations.EnableSecurityHubResponse>;
    /**
     * getAdministratorAccount - <p>Provides the details for the Security Hub administrator account for the current member account.</p> <p>Can be used by both member accounts that are managed using Organizations and accounts that were invited manually.</p>
    **/
    getAdministratorAccount(req: operations.GetAdministratorAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetAdministratorAccountResponse>;
    /**
     * getEnabledStandards - Returns a list of the standards that are currently enabled.
    **/
    getEnabledStandards(req: operations.GetEnabledStandardsRequest, config?: AxiosRequestConfig): Promise<operations.GetEnabledStandardsResponse>;
    /**
     * getFindings - Returns a list of findings that match the specified criteria.
    **/
    getFindings(req: operations.GetFindingsRequest, config?: AxiosRequestConfig): Promise<operations.GetFindingsResponse>;
    /**
     * getInsightResults - Lists the results of the Security Hub insight specified by the insight ARN.
    **/
    getInsightResults(req: operations.GetInsightResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetInsightResultsResponse>;
    /**
     * getInsights - Lists and describes insights for the specified insight ARNs.
    **/
    getInsights(req: operations.GetInsightsRequest, config?: AxiosRequestConfig): Promise<operations.GetInsightsResponse>;
    /**
     * getInvitationsCount - Returns the count of all Security Hub membership invitations that were sent to the current member account, not including the currently accepted invitation.
    **/
    getInvitationsCount(req: operations.GetInvitationsCountRequest, config?: AxiosRequestConfig): Promise<operations.GetInvitationsCountResponse>;
    /**
     * getMasterAccount - <p>This method is deprecated. Instead, use <code>GetAdministratorAccount</code>.</p> <p>The Security Hub console continues to use <code>GetMasterAccount</code>. It will eventually change to use <code>GetAdministratorAccount</code>. Any IAM policies that specifically control access to this function must continue to use <code>GetMasterAccount</code>. You should also add <code>GetAdministratorAccount</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>GetAdministratorAccount</code>.</p> <p>Provides the details for the Security Hub administrator account for the current member account.</p> <p>Can be used by both member accounts that are managed using Organizations and accounts that were invited manually.</p>
    **/
    getMasterAccount(req: operations.GetMasterAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetMasterAccountResponse>;
    /**
     * getMembers - <p>Returns the details for the Security Hub member accounts for the specified account IDs.</p> <p>An administrator account can be either the delegated Security Hub administrator account for an organization or an administrator account that enabled Security Hub manually.</p> <p>The results include both member accounts that are managed using Organizations and accounts that were invited manually.</p>
    **/
    getMembers(req: operations.GetMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetMembersResponse>;
    /**
     * inviteMembers - <p>Invites other Amazon Web Services accounts to become member accounts for the Security Hub administrator account that the invitation is sent from.</p> <p>This operation is only used to invite accounts that do not belong to an organization. Organization accounts do not receive invitations.</p> <p>Before you can use this action to invite a member, you must first use the <code>CreateMembers</code> action to create the member account in Security Hub.</p> <p>When the account owner enables Security Hub and accepts the invitation to become a member account, the administrator account can view the findings generated from the member account.</p>
    **/
    inviteMembers(req: operations.InviteMembersRequest, config?: AxiosRequestConfig): Promise<operations.InviteMembersResponse>;
    /**
     * listEnabledProductsForImport - Lists all findings-generating solutions (products) that you are subscribed to receive findings from in Security Hub.
    **/
    listEnabledProductsForImport(req: operations.ListEnabledProductsForImportRequest, config?: AxiosRequestConfig): Promise<operations.ListEnabledProductsForImportResponse>;
    /**
     * listInvitations - <p>Lists all Security Hub membership invitations that were sent to the current Amazon Web Services account.</p> <p>This operation is only used by accounts that are managed by invitation. Accounts that are managed using the integration with Organizations do not receive invitations.</p>
    **/
    listInvitations(req: operations.ListInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.ListInvitationsResponse>;
    /**
     * listMembers - <p>Lists details about all member accounts for the current Security Hub administrator account.</p> <p>The results include both member accounts that belong to an organization and member accounts that were invited manually.</p>
    **/
    listMembers(req: operations.ListMembersRequest, config?: AxiosRequestConfig): Promise<operations.ListMembersResponse>;
    /**
     * listOrganizationAdminAccounts - Lists the Security Hub administrator accounts. Can only be called by the organization management account.
    **/
    listOrganizationAdminAccounts(req: operations.ListOrganizationAdminAccountsRequest, config?: AxiosRequestConfig): Promise<operations.ListOrganizationAdminAccountsResponse>;
    /**
     * listTagsForResource - Returns a list of tags associated with a resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * tagResource - Adds one or more tags to a resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes one or more tags from a resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateActionTarget - Updates the name and description of a custom action target in Security Hub.
    **/
    updateActionTarget(req: operations.UpdateActionTargetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateActionTargetResponse>;
    /**
     * updateFindings - <p> <code>UpdateFindings</code> is deprecated. Instead of <code>UpdateFindings</code>, use <code>BatchUpdateFindings</code>.</p> <p>Updates the <code>Note</code> and <code>RecordState</code> of the Security Hub-aggregated findings that the filter attributes specify. Any member account that can view the finding also sees the update to the finding.</p>
    **/
    updateFindings(req: operations.UpdateFindingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFindingsResponse>;
    /**
     * updateInsight - Updates the Security Hub insight identified by the specified insight ARN.
    **/
    updateInsight(req: operations.UpdateInsightRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInsightResponse>;
    /**
     * updateOrganizationConfiguration - Used to update the configuration related to Organizations. Can only be called from a Security Hub administrator account.
    **/
    updateOrganizationConfiguration(req: operations.UpdateOrganizationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationConfigurationResponse>;
    /**
     * updateSecurityHubConfiguration - Updates configuration options for Security Hub.
    **/
    updateSecurityHubConfiguration(req: operations.UpdateSecurityHubConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSecurityHubConfigurationResponse>;
    /**
     * updateStandardsControl - Used to control whether an individual security standard control is enabled or disabled.
    **/
    updateStandardsControl(req: operations.UpdateStandardsControlRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStandardsControlResponse>;
}
export {};
