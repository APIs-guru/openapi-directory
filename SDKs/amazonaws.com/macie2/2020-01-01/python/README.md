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
    
req = operations.AcceptInvitationRequest(
    headers=operations.AcceptInvitationHeaders(
        x_amz_algorithm="laudantium",
        x_amz_content_sha256="iure",
        x_amz_credential="dolor",
        x_amz_date="doloribus",
        x_amz_security_token="rem",
        x_amz_signature="sit",
        x_amz_signed_headers="aut",
    ),
    request=operations.AcceptInvitationRequestBody(
        administrator_account_id="non",
        invitation_id="quod",
        master_account="ut",
    ),
)
    
res = s.sdk.accept_invitation(req)

if res.accept_invitation_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `accept_invitation` - Accepts an Amazon Macie membership invitation that was received from a specific account.
* `batch_get_custom_data_identifiers` - Retrieves information about one or more custom data identifiers.
* `create_classification_job` -  <p>Creates and defines the settings for a classification job.</p>
* `create_custom_data_identifier` - Creates and defines the criteria and other settings for a custom data identifier.
* `create_findings_filter` - Creates and defines the criteria and other settings for a findings filter.
* `create_invitations` - Sends an Amazon Macie membership invitation to one or more accounts.
* `create_member` - Associates an account with an Amazon Macie administrator account.
* `create_sample_findings` - Creates sample findings.
* `decline_invitations` - Declines Amazon Macie membership invitations that were received from specific accounts.
* `delete_custom_data_identifier` - Soft deletes a custom data identifier.
* `delete_findings_filter` - Deletes a findings filter.
* `delete_invitations` - Deletes Amazon Macie membership invitations that were received from specific accounts.
* `delete_member` - Deletes the association between an Amazon Macie administrator account and an account.
* `describe_buckets` -  <p>Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes.</p>
* `describe_classification_job` - Retrieves the status and settings for a classification job.
* `describe_organization_configuration` - Retrieves the Amazon Macie configuration settings for an Amazon Web Services organization.
* `disable_macie` - Disables an Amazon Macie account and deletes Macie resources for the account.
* `disable_organization_admin_account` - Disables an account as the delegated Amazon Macie administrator account for an Amazon Web Services organization.
* `disassociate_from_administrator_account` - Disassociates a member account from its Amazon Macie administrator account.
* `disassociate_from_master_account` - (Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.
* `disassociate_member` - Disassociates an Amazon Macie administrator account from a member account.
* `enable_macie` - Enables Amazon Macie and specifies the configuration settings for a Macie account.
* `enable_organization_admin_account` - Designates an account as the delegated Amazon Macie administrator account for an Amazon Web Services organization.
* `get_administrator_account` - Retrieves information about the Amazon Macie administrator account for an account.
* `get_bucket_statistics` -  <p>Retrieves (queries) aggregated statistical data for all the S3 buckets that Amazon Macie monitors and analyzes.</p>
* `get_classification_export_configuration` - Retrieves the configuration settings for storing data classification results.
* `get_custom_data_identifier` - Retrieves the criteria and other settings for a custom data identifier.
* `get_finding_statistics` -  <p>Retrieves (queries) aggregated statistical data about findings.</p>
* `get_findings` - Retrieves the details of one or more findings.
* `get_findings_filter` - Retrieves the criteria and other settings for a findings filter.
* `get_findings_publication_configuration` - Retrieves the configuration settings for publishing findings to Security Hub.
* `get_invitations_count` - Retrieves the count of Amazon Macie membership invitations that were received by an account.
* `get_macie_session` - Retrieves the current status and configuration settings for an Amazon Macie account.
* `get_master_account` - (Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.
* `get_member` - Retrieves information about an account that's associated with an Amazon Macie administrator account.
* `get_usage_statistics` - Retrieves (queries) quotas and aggregated usage data for one or more accounts.
* `get_usage_totals` - Retrieves (queries) aggregated usage data for an account.
* `list_classification_jobs` - Retrieves a subset of information about one or more classification jobs.
* `list_custom_data_identifiers` - Retrieves a subset of information about all the custom data identifiers for an account.
* `list_findings` - Retrieves a subset of information about one or more findings.
* `list_findings_filters` - Retrieves a subset of information about all the findings filters for an account.
* `list_invitations` - Retrieves information about the Amazon Macie membership invitations that were received by an account.
* `list_managed_data_identifiers` - Retrieves information about all the managed data identifiers that Amazon Macie currently provides.
* `list_members` - Retrieves information about the accounts that are associated with an Amazon Macie administrator account.
* `list_organization_admin_accounts` - Retrieves information about the delegated Amazon Macie administrator account for an Amazon Web Services organization.
* `list_tags_for_resource` - Retrieves the tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.
* `put_classification_export_configuration` - Creates or updates the configuration settings for storing data classification results.
* `put_findings_publication_configuration` - Updates the configuration settings for publishing findings to Security Hub.
* `search_resources` - Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
* `tag_resource` - Adds or updates one or more tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.
* `test_custom_data_identifier` - Tests a custom data identifier.
* `untag_resource` - Removes one or more tags (keys and values) from a classification job, custom data identifier, findings filter, or member account.
* `update_classification_job` - Changes the status of a classification job.
* `update_findings_filter` - Updates the criteria and other settings for a findings filter.
* `update_macie_session` - Suspends or re-enables an Amazon Macie account, or updates the configuration settings for a Macie account.
* `update_member_session` - Enables an Amazon Macie administrator to suspend or re-enable a member account.
* `update_organization_configuration` - Updates the Amazon Macie configuration settings for an Amazon Web Services organization.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
