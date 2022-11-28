# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AcceptInvitationRequest{
        Headers: operations.AcceptInvitationHeaders{
            XAmzAlgorithm: "laudantium",
            XAmzContentSha256: "iure",
            XAmzCredential: "dolor",
            XAmzDate: "doloribus",
            XAmzSecurityToken: "rem",
            XAmzSignature: "sit",
            XAmzSignedHeaders: "aut",
        },
        Request: operations.AcceptInvitationRequestBody{
            AdministratorAccountID: "non",
            InvitationID: "quod",
            MasterAccount: "ut",
        },
    }
    
    res, err := s.Sdk.AcceptInvitation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptInvitationResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AcceptInvitation` - Accepts an Amazon Macie membership invitation that was received from a specific account.
* `BatchGetCustomDataIdentifiers` - Retrieves information about one or more custom data identifiers.
* `CreateClassificationJob` -  <p>Creates and defines the settings for a classification job.</p>
* `CreateCustomDataIdentifier` - Creates and defines the criteria and other settings for a custom data identifier.
* `CreateFindingsFilter` - Creates and defines the criteria and other settings for a findings filter.
* `CreateInvitations` - Sends an Amazon Macie membership invitation to one or more accounts.
* `CreateMember` - Associates an account with an Amazon Macie administrator account.
* `CreateSampleFindings` - Creates sample findings.
* `DeclineInvitations` - Declines Amazon Macie membership invitations that were received from specific accounts.
* `DeleteCustomDataIdentifier` - Soft deletes a custom data identifier.
* `DeleteFindingsFilter` - Deletes a findings filter.
* `DeleteInvitations` - Deletes Amazon Macie membership invitations that were received from specific accounts.
* `DeleteMember` - Deletes the association between an Amazon Macie administrator account and an account.
* `DescribeBuckets` -  <p>Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes.</p>
* `DescribeClassificationJob` - Retrieves the status and settings for a classification job.
* `DescribeOrganizationConfiguration` - Retrieves the Amazon Macie configuration settings for an Amazon Web Services organization.
* `DisableMacie` - Disables an Amazon Macie account and deletes Macie resources for the account.
* `DisableOrganizationAdminAccount` - Disables an account as the delegated Amazon Macie administrator account for an Amazon Web Services organization.
* `DisassociateFromAdministratorAccount` - Disassociates a member account from its Amazon Macie administrator account.
* `DisassociateFromMasterAccount` - (Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.
* `DisassociateMember` - Disassociates an Amazon Macie administrator account from a member account.
* `EnableMacie` - Enables Amazon Macie and specifies the configuration settings for a Macie account.
* `EnableOrganizationAdminAccount` - Designates an account as the delegated Amazon Macie administrator account for an Amazon Web Services organization.
* `GetAdministratorAccount` - Retrieves information about the Amazon Macie administrator account for an account.
* `GetBucketStatistics` -  <p>Retrieves (queries) aggregated statistical data for all the S3 buckets that Amazon Macie monitors and analyzes.</p>
* `GetClassificationExportConfiguration` - Retrieves the configuration settings for storing data classification results.
* `GetCustomDataIdentifier` - Retrieves the criteria and other settings for a custom data identifier.
* `GetFindingStatistics` -  <p>Retrieves (queries) aggregated statistical data about findings.</p>
* `GetFindings` - Retrieves the details of one or more findings.
* `GetFindingsFilter` - Retrieves the criteria and other settings for a findings filter.
* `GetFindingsPublicationConfiguration` - Retrieves the configuration settings for publishing findings to Security Hub.
* `GetInvitationsCount` - Retrieves the count of Amazon Macie membership invitations that were received by an account.
* `GetMacieSession` - Retrieves the current status and configuration settings for an Amazon Macie account.
* `GetMasterAccount` - (Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.
* `GetMember` - Retrieves information about an account that's associated with an Amazon Macie administrator account.
* `GetUsageStatistics` - Retrieves (queries) quotas and aggregated usage data for one or more accounts.
* `GetUsageTotals` - Retrieves (queries) aggregated usage data for an account.
* `ListClassificationJobs` - Retrieves a subset of information about one or more classification jobs.
* `ListCustomDataIdentifiers` - Retrieves a subset of information about all the custom data identifiers for an account.
* `ListFindings` - Retrieves a subset of information about one or more findings.
* `ListFindingsFilters` - Retrieves a subset of information about all the findings filters for an account.
* `ListInvitations` - Retrieves information about the Amazon Macie membership invitations that were received by an account.
* `ListManagedDataIdentifiers` - Retrieves information about all the managed data identifiers that Amazon Macie currently provides.
* `ListMembers` - Retrieves information about the accounts that are associated with an Amazon Macie administrator account.
* `ListOrganizationAdminAccounts` - Retrieves information about the delegated Amazon Macie administrator account for an Amazon Web Services organization.
* `ListTagsForResource` - Retrieves the tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.
* `PutClassificationExportConfiguration` - Creates or updates the configuration settings for storing data classification results.
* `PutFindingsPublicationConfiguration` - Updates the configuration settings for publishing findings to Security Hub.
* `SearchResources` - Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
* `TagResource` - Adds or updates one or more tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.
* `TestCustomDataIdentifier` - Tests a custom data identifier.
* `UntagResource` - Removes one or more tags (keys and values) from a classification job, custom data identifier, findings filter, or member account.
* `UpdateClassificationJob` - Changes the status of a classification job.
* `UpdateFindingsFilter` - Updates the criteria and other settings for a findings filter.
* `UpdateMacieSession` - Suspends or re-enables an Amazon Macie account, or updates the configuration settings for a Macie account.
* `UpdateMemberSession` - Enables an Amazon Macie administrator to suspend or re-enable a member account.
* `UpdateOrganizationConfiguration` - Updates the Amazon Macie configuration settings for an Amazon Web Services organization.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
