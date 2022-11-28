# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AcceptAdministratorInvitationRequest(
    headers=operations.AcceptAdministratorInvitationHeaders(
        x_amz_algorithm="accusantium",
        x_amz_content_sha256="fuga",
        x_amz_credential="ut",
        x_amz_date="delectus",
        x_amz_security_token="blanditiis",
        x_amz_signature="vitae",
        x_amz_signed_headers="neque",
    ),
    request=operations.AcceptAdministratorInvitationRequestBody(
        administrator_id="est",
        invitation_id="commodi",
    ),
)
    
res = s.sdk.accept_administrator_invitation(req)

if res.accept_administrator_invitation_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `accept_administrator_invitation` - <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator account that the invitation was sent from.</p> <p>This operation is only used by member accounts that are not added through Organizations.</p> <p>When the member account accepts the invitation, permission is granted to the administrator account to view findings generated in the member account.</p>
* `accept_invitation` - <p>This method is deprecated. Instead, use <code>AcceptAdministratorInvitation</code>.</p> <p>The Security Hub console continues to use <code>AcceptInvitation</code>. It will eventually change to use <code>AcceptAdministratorInvitation</code>. Any IAM policies that specifically control access to this function must continue to use <code>AcceptInvitation</code>. You should also add <code>AcceptAdministratorInvitation</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>AcceptAdministratorInvitation</code>.</p> <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator account that the invitation was sent from.</p> <p>This operation is only used by member accounts that are not added through Organizations.</p> <p>When the member account accepts the invitation, permission is granted to the administrator account to view findings generated in the member account.</p>
* `batch_disable_standards` - <p>Disables the standards specified by the provided <code>StandardsSubscriptionArns</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a> section of the <i>Security Hub User Guide</i>.</p>
* `batch_enable_standards` - <p>Enables the standards specified by the provided <code>StandardsArn</code>. To obtain the ARN for a standard, use the <code>DescribeStandards</code> operation.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-standards.html">Security Standards</a> section of the <i>Security Hub User Guide</i>.</p>
* `batch_import_findings` - <p>Imports security findings generated from an integrated product into Security Hub. This action is requested by the integrated product to import its findings into Security Hub.</p> <p>The maximum allowed size for a finding is 240 Kb. An error is returned for any finding larger than 240 Kb.</p> <p>After a finding is created, <code>BatchImportFindings</code> cannot be used to update the following finding fields and objects, which Security Hub customers use to manage their investigation workflow.</p> <ul> <li> <p> <code>Note</code> </p> </li> <li> <p> <code>UserDefinedFields</code> </p> </li> <li> <p> <code>VerificationState</code> </p> </li> <li> <p> <code>Workflow</code> </p> </li> </ul> <p>Finding providers also should not use <code>BatchImportFindings</code> to update the following attributes.</p> <ul> <li> <p> <code>Confidence</code> </p> </li> <li> <p> <code>Criticality</code> </p> </li> <li> <p> <code>RelatedFindings</code> </p> </li> <li> <p> <code>Severity</code> </p> </li> <li> <p> <code>Types</code> </p> </li> </ul> <p>Instead, finding providers use <code>FindingProviderFields</code> to provide values for these attributes.</p>
* `batch_update_findings` - <p>Used by Security Hub customers to update information about their investigation into a finding. Requested by administrator accounts or member accounts. Administrator accounts can update findings for their account and their member accounts. Member accounts can update findings for their account.</p> <p>Updates from <code>BatchUpdateFindings</code> do not affect the value of <code>UpdatedAt</code> for a finding.</p> <p>Administrator and member accounts can use <code>BatchUpdateFindings</code> to update the following finding fields and objects.</p> <ul> <li> <p> <code>Confidence</code> </p> </li> <li> <p> <code>Criticality</code> </p> </li> <li> <p> <code>Note</code> </p> </li> <li> <p> <code>RelatedFindings</code> </p> </li> <li> <p> <code>Severity</code> </p> </li> <li> <p> <code>Types</code> </p> </li> <li> <p> <code>UserDefinedFields</code> </p> </li> <li> <p> <code>VerificationState</code> </p> </li> <li> <p> <code>Workflow</code> </p> </li> </ul> <p>You can configure IAM policies to restrict access to fields and field values. For example, you might not want member accounts to be able to suppress findings or change the finding severity. See <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/finding-update-batchupdatefindings.html#batchupdatefindings-configure-access">Configuring access to BatchUpdateFindings</a> in the <i>Security Hub User Guide</i>.</p>
* `create_action_target` - <p>Creates a custom action target in Security Hub.</p> <p>You can use custom actions on findings and insights in Security Hub to trigger target actions in Amazon CloudWatch Events.</p>
* `create_insight` - <p>Creates a custom insight in Security Hub. An insight is a consolidation of findings that relate to a security issue that requires attention or remediation.</p> <p>To group the related findings in the insight, use the <code>GroupByAttribute</code>.</p>
* `create_members` - <p>Creates a member association in Security Hub between the specified accounts and the account used to make the request, which is the administrator account. If you are integrated with Organizations, then the administrator account is designated by the organization management account.</p> <p> <code>CreateMembers</code> is always used to add accounts that are not organization members.</p> <p>For accounts that are managed using Organizations, <code>CreateMembers</code> is only used in the following cases:</p> <ul> <li> <p>Security Hub is not configured to automatically add new organization accounts.</p> </li> <li> <p>The account was disassociated or deleted in Security Hub.</p> </li> </ul> <p>This action can only be used by an account that has Security Hub enabled. To enable Security Hub, you can use the <code>EnableSecurityHub</code> operation.</p> <p>For accounts that are not organization members, you create the account association and then send an invitation to the member account. To send the invitation, you use the <code>InviteMembers</code> operation. If the account owner accepts the invitation, the account becomes a member account in Security Hub.</p> <p>Accounts that are managed using Organizations do not receive an invitation. They automatically become a member account in Security Hub, and Security Hub is automatically enabled for those accounts. Note that Security Hub cannot be enabled automatically for the organization management account. The organization management account must enable Security Hub before the administrator account enables it as a member account.</p> <p>A permissions policy is added that permits the administrator account to view the findings generated in the member account. When Security Hub is enabled in a member account, the member account findings are also visible to the administrator account. </p> <p>To remove the association between the administrator and member accounts, use the <code>DisassociateFromMasterAccount</code> or <code>DisassociateMembers</code> operation.</p>
* `decline_invitations` - <p>Declines invitations to become a member account.</p> <p>This operation is only used by accounts that are not part of an organization. Organization accounts do not receive invitations.</p>
* `delete_action_target` - <p>Deletes a custom action target from Security Hub.</p> <p>Deleting a custom action target does not affect any findings or insights that were already sent to Amazon CloudWatch Events using the custom action.</p>
* `delete_insight` - Deletes the insight specified by the <code>InsightArn</code>.
* `delete_invitations` - <p>Deletes invitations received by the Amazon Web Services account to become a member account.</p> <p>This operation is only used by accounts that are not part of an organization. Organization accounts do not receive invitations.</p>
* `delete_members` - <p>Deletes the specified member accounts from Security Hub.</p> <p>Can be used to delete member accounts that belong to an organization as well as member accounts that were invited manually.</p>
* `describe_action_targets` - Returns a list of the custom action targets in Security Hub in your account.
* `describe_hub` - Returns details about the Hub resource in your account, including the <code>HubArn</code> and the time when you enabled Security Hub.
* `describe_organization_configuration` - Returns information about the Organizations configuration for Security Hub. Can only be called from a Security Hub administrator account.
* `describe_products` - <p>Returns information about product integrations in Security Hub.</p> <p>You can optionally provide an integration ARN. If you provide an integration ARN, then the results only include that integration.</p> <p>If you do not provide an integration ARN, then the results include all of the available product integrations. </p>
* `describe_standards` - <p>Returns a list of the available standards in Security Hub.</p> <p>For each standard, the results include the standard ARN, the name, and a description. </p>
* `describe_standards_controls` - <p>Returns a list of security standards controls.</p> <p>For each control, the results include information about whether it is currently enabled, the severity, and a link to remediation information.</p>
* `disable_import_findings_for_product` - Disables the integration of the specified product with Security Hub. After the integration is disabled, findings from that product are no longer sent to Security Hub.
* `disable_organization_admin_account` - Disables a Security Hub administrator account. Can only be called by the organization management account.
* `disable_security_hub` - <p>Disables Security Hub in your account only in the current Region. To disable Security Hub in all Regions, you must submit one request per Region where you have enabled Security Hub.</p> <p>When you disable Security Hub for an administrator account, it doesn't disable Security Hub for any associated member accounts.</p> <p>When you disable Security Hub, your existing findings and insights and any Security Hub configuration settings are deleted after 90 days and cannot be recovered. Any standards that were enabled are disabled, and your administrator and member account associations are removed.</p> <p>If you want to save your existing findings, you must export them before you disable Security Hub.</p>
* `disassociate_from_administrator_account` - <p>Disassociates the current Security Hub member account from the associated administrator account.</p> <p>This operation is only used by accounts that are not part of an organization. For organization accounts, only the administrator account can disassociate a member account.</p>
* `disassociate_from_master_account` - <p>This method is deprecated. Instead, use <code>DisassociateFromAdministratorAccount</code>.</p> <p>The Security Hub console continues to use <code>DisassociateFromMasterAccount</code>. It will eventually change to use <code>DisassociateFromAdministratorAccount</code>. Any IAM policies that specifically control access to this function must continue to use <code>DisassociateFromMasterAccount</code>. You should also add <code>DisassociateFromAdministratorAccount</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>DisassociateFromAdministratorAccount</code>.</p> <p>Disassociates the current Security Hub member account from the associated administrator account.</p> <p>This operation is only used by accounts that are not part of an organization. For organization accounts, only the administrator account can disassociate a member account.</p>
* `disassociate_members` - <p>Disassociates the specified member accounts from the associated administrator account.</p> <p>Can be used to disassociate both accounts that are managed using Organizations and accounts that were invited manually.</p>
* `enable_import_findings_for_product` - <p>Enables the integration of a partner product with Security Hub. Integrated products send findings to Security Hub.</p> <p>When you enable a product integration, a permissions policy that grants permission for the product to send findings to Security Hub is applied.</p>
* `enable_organization_admin_account` - Designates the Security Hub administrator account for an organization. Can only be called by the organization management account.
* `enable_security_hub` - <p>Enables Security Hub for your account in the current Region or the Region you specify in the request.</p> <p>When you enable Security Hub, you grant to Security Hub the permissions necessary to gather findings from other services that are integrated with Security Hub.</p> <p>When you use the <code>EnableSecurityHub</code> operation to enable Security Hub, you also automatically enable the following standards.</p> <ul> <li> <p>CIS Amazon Web Services Foundations</p> </li> <li> <p>Amazon Web Services Foundational Security Best Practices</p> </li> </ul> <p>You do not enable the Payment Card Industry Data Security Standard (PCI DSS) standard. </p> <p>To not enable the automatically enabled standards, set <code>EnableDefaultStandards</code> to <code>false</code>.</p> <p>After you enable Security Hub, to enable a standard, use the <code>BatchEnableStandards</code> operation. To disable a standard, use the <code>BatchDisableStandards</code> operation.</p> <p>To learn more, see the <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-settingup.html">setup information</a> in the <i>Security Hub User Guide</i>.</p>
* `get_administrator_account` - <p>Provides the details for the Security Hub administrator account for the current member account.</p> <p>Can be used by both member accounts that are managed using Organizations and accounts that were invited manually.</p>
* `get_enabled_standards` - Returns a list of the standards that are currently enabled.
* `get_findings` - Returns a list of findings that match the specified criteria.
* `get_insight_results` - Lists the results of the Security Hub insight specified by the insight ARN.
* `get_insights` - Lists and describes insights for the specified insight ARNs.
* `get_invitations_count` - Returns the count of all Security Hub membership invitations that were sent to the current member account, not including the currently accepted invitation. 
* `get_master_account` - <p>This method is deprecated. Instead, use <code>GetAdministratorAccount</code>.</p> <p>The Security Hub console continues to use <code>GetMasterAccount</code>. It will eventually change to use <code>GetAdministratorAccount</code>. Any IAM policies that specifically control access to this function must continue to use <code>GetMasterAccount</code>. You should also add <code>GetAdministratorAccount</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>GetAdministratorAccount</code>.</p> <p>Provides the details for the Security Hub administrator account for the current member account.</p> <p>Can be used by both member accounts that are managed using Organizations and accounts that were invited manually.</p>
* `get_members` - <p>Returns the details for the Security Hub member accounts for the specified account IDs.</p> <p>An administrator account can be either the delegated Security Hub administrator account for an organization or an administrator account that enabled Security Hub manually.</p> <p>The results include both member accounts that are managed using Organizations and accounts that were invited manually.</p>
* `invite_members` - <p>Invites other Amazon Web Services accounts to become member accounts for the Security Hub administrator account that the invitation is sent from.</p> <p>This operation is only used to invite accounts that do not belong to an organization. Organization accounts do not receive invitations.</p> <p>Before you can use this action to invite a member, you must first use the <code>CreateMembers</code> action to create the member account in Security Hub.</p> <p>When the account owner enables Security Hub and accepts the invitation to become a member account, the administrator account can view the findings generated from the member account.</p>
* `list_enabled_products_for_import` - Lists all findings-generating solutions (products) that you are subscribed to receive findings from in Security Hub.
* `list_invitations` - <p>Lists all Security Hub membership invitations that were sent to the current Amazon Web Services account.</p> <p>This operation is only used by accounts that are managed by invitation. Accounts that are managed using the integration with Organizations do not receive invitations.</p>
* `list_members` - <p>Lists details about all member accounts for the current Security Hub administrator account.</p> <p>The results include both member accounts that belong to an organization and member accounts that were invited manually.</p>
* `list_organization_admin_accounts` - Lists the Security Hub administrator accounts. Can only be called by the organization management account.
* `list_tags_for_resource` - Returns a list of tags associated with a resource.
* `tag_resource` - Adds one or more tags to a resource.
* `untag_resource` - Removes one or more tags from a resource.
* `update_action_target` - Updates the name and description of a custom action target in Security Hub.
* `update_findings` - <p> <code>UpdateFindings</code> is deprecated. Instead of <code>UpdateFindings</code>, use <code>BatchUpdateFindings</code>.</p> <p>Updates the <code>Note</code> and <code>RecordState</code> of the Security Hub-aggregated findings that the filter attributes specify. Any member account that can view the finding also sees the update to the finding.</p>
* `update_insight` - Updates the Security Hub insight identified by the specified insight ARN.
* `update_organization_configuration` - Used to update the configuration related to Organizations. Can only be called from a Security Hub administrator account.
* `update_security_hub_configuration` - Updates configuration options for Security Hub.
* `update_standards_control` - Used to control whether an individual security standard control is enabled or disabled.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
