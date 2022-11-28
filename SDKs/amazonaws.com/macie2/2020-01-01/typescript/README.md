# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { AcceptInvitationRequest, AcceptInvitationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AcceptInvitationRequest = {
  headers: {
    xAmzAlgorithm: "laudantium",
    xAmzContentSha256: "iure",
    xAmzCredential: "dolor",
    xAmzDate: "doloribus",
    xAmzSecurityToken: "rem",
    xAmzSignature: "sit",
    xAmzSignedHeaders: "aut",
  },
  request: {
    administratorAccountId: "non",
    invitationId: "quod",
    masterAccount: "ut",
  },
};

sdk.sdk.acceptInvitation(req).then((res: AcceptInvitationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `acceptInvitation` - Accepts an Amazon Macie membership invitation that was received from a specific account.
* `batchGetCustomDataIdentifiers` - Retrieves information about one or more custom data identifiers.
* `createClassificationJob` -  <p>Creates and defines the settings for a classification job.</p>
* `createCustomDataIdentifier` - Creates and defines the criteria and other settings for a custom data identifier.
* `createFindingsFilter` - Creates and defines the criteria and other settings for a findings filter.
* `createInvitations` - Sends an Amazon Macie membership invitation to one or more accounts.
* `createMember` - Associates an account with an Amazon Macie administrator account.
* `createSampleFindings` - Creates sample findings.
* `declineInvitations` - Declines Amazon Macie membership invitations that were received from specific accounts.
* `deleteCustomDataIdentifier` - Soft deletes a custom data identifier.
* `deleteFindingsFilter` - Deletes a findings filter.
* `deleteInvitations` - Deletes Amazon Macie membership invitations that were received from specific accounts.
* `deleteMember` - Deletes the association between an Amazon Macie administrator account and an account.
* `describeBuckets` -  <p>Retrieves (queries) statistical data and other information about one or more S3 buckets that Amazon Macie monitors and analyzes.</p>
* `describeClassificationJob` - Retrieves the status and settings for a classification job.
* `describeOrganizationConfiguration` - Retrieves the Amazon Macie configuration settings for an Amazon Web Services organization.
* `disableMacie` - Disables an Amazon Macie account and deletes Macie resources for the account.
* `disableOrganizationAdminAccount` - Disables an account as the delegated Amazon Macie administrator account for an Amazon Web Services organization.
* `disassociateFromAdministratorAccount` - Disassociates a member account from its Amazon Macie administrator account.
* `disassociateFromMasterAccount` - (Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.
* `disassociateMember` - Disassociates an Amazon Macie administrator account from a member account.
* `enableMacie` - Enables Amazon Macie and specifies the configuration settings for a Macie account.
* `enableOrganizationAdminAccount` - Designates an account as the delegated Amazon Macie administrator account for an Amazon Web Services organization.
* `getAdministratorAccount` - Retrieves information about the Amazon Macie administrator account for an account.
* `getBucketStatistics` -  <p>Retrieves (queries) aggregated statistical data for all the S3 buckets that Amazon Macie monitors and analyzes.</p>
* `getClassificationExportConfiguration` - Retrieves the configuration settings for storing data classification results.
* `getCustomDataIdentifier` - Retrieves the criteria and other settings for a custom data identifier.
* `getFindingStatistics` -  <p>Retrieves (queries) aggregated statistical data about findings.</p>
* `getFindings` - Retrieves the details of one or more findings.
* `getFindingsFilter` - Retrieves the criteria and other settings for a findings filter.
* `getFindingsPublicationConfiguration` - Retrieves the configuration settings for publishing findings to Security Hub.
* `getInvitationsCount` - Retrieves the count of Amazon Macie membership invitations that were received by an account.
* `getMacieSession` - Retrieves the current status and configuration settings for an Amazon Macie account.
* `getMasterAccount` - (Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.
* `getMember` - Retrieves information about an account that's associated with an Amazon Macie administrator account.
* `getUsageStatistics` - Retrieves (queries) quotas and aggregated usage data for one or more accounts.
* `getUsageTotals` - Retrieves (queries) aggregated usage data for an account.
* `listClassificationJobs` - Retrieves a subset of information about one or more classification jobs.
* `listCustomDataIdentifiers` - Retrieves a subset of information about all the custom data identifiers for an account.
* `listFindings` - Retrieves a subset of information about one or more findings.
* `listFindingsFilters` - Retrieves a subset of information about all the findings filters for an account.
* `listInvitations` - Retrieves information about the Amazon Macie membership invitations that were received by an account.
* `listManagedDataIdentifiers` - Retrieves information about all the managed data identifiers that Amazon Macie currently provides.
* `listMembers` - Retrieves information about the accounts that are associated with an Amazon Macie administrator account.
* `listOrganizationAdminAccounts` - Retrieves information about the delegated Amazon Macie administrator account for an Amazon Web Services organization.
* `listTagsForResource` - Retrieves the tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.
* `putClassificationExportConfiguration` - Creates or updates the configuration settings for storing data classification results.
* `putFindingsPublicationConfiguration` - Updates the configuration settings for publishing findings to Security Hub.
* `searchResources` - Retrieves (queries) statistical data and other information about Amazon Web Services resources that Amazon Macie monitors and analyzes.
* `tagResource` - Adds or updates one or more tags (keys and values) that are associated with a classification job, custom data identifier, findings filter, or member account.
* `testCustomDataIdentifier` - Tests a custom data identifier.
* `untagResource` - Removes one or more tags (keys and values) from a classification job, custom data identifier, findings filter, or member account.
* `updateClassificationJob` - Changes the status of a classification job.
* `updateFindingsFilter` - Updates the criteria and other settings for a findings filter.
* `updateMacieSession` - Suspends or re-enables an Amazon Macie account, or updates the configuration settings for a Macie account.
* `updateMemberSession` - Enables an Amazon Macie administrator to suspend or re-enable a member account.
* `updateOrganizationConfiguration` - Updates the Amazon Macie configuration settings for an Amazon Web Services organization.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
