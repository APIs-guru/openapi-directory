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
import { AccountCreateRecoveryRequest, AccountCreateRecoveryResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: AccountCreateRecoveryRequest = {
  security: {
    jwt: {
      apiKey: "YOUR_API_KEY_HERE",
    }
    project: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  request: {
    email: "quasi",
    url: "aliquid",
  },
};

sdk.account.accountCreateRecovery(req).then((res: AccountCreateRecoveryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### account

* `accountCreateRecovery` - Create Password Recovery
* `accountCreateVerification` - Create Email Verification
* `accountDelete` - Delete Account
* `accountDeleteSession` - Delete Account Session
* `accountDeleteSessions` - Delete All Account Sessions
* `accountGet` - Get Account
* `accountGetLogs` - Get Account Logs
* `accountGetPrefs` - Get Account Preferences
* `accountGetSession` - Get Session By ID
* `accountGetSessions` - Get Account Sessions
* `accountUpdateEmail` - Update Account Email
* `accountUpdateName` - Update Account Name
* `accountUpdatePassword` - Update Account Password
* `accountUpdatePrefs` - Update Account Preferences
* `accountUpdateRecovery` - Complete Password Recovery
* `accountUpdateVerification` - Complete Email Verification

### avatars

* `avatarsGetBrowser` - Get Browser Icon
* `avatarsGetCreditCard` - Get Credit Card Icon
* `avatarsGetFavicon` - Get Favicon
* `avatarsGetFlag` - Get Country Flag
* `avatarsGetImage` - Get Image from URL
* `avatarsGetInitials` - Get User Initials
* `avatarsGetQr` - Get QR Code

### database

* `databaseCreateCollection` - Create Collection
* `databaseCreateDocument` - Create Document
* `databaseDeleteCollection` - Delete Collection
* `databaseDeleteDocument` - Delete Document
* `databaseGetCollection` - Get Collection
* `databaseGetDocument` - Get Document
* `databaseListCollections` - List Collections
* `databaseListDocuments` - List Documents
* `databaseUpdateCollection` - Update Collection
* `databaseUpdateDocument` - Update Document

### functions

* `functionsCreate` - Create Function
* `functionsCreateExecution` - Create Execution
* `functionsCreateTag` - Create Tag
* `functionsDelete` - Delete Function
* `functionsDeleteTag` - Delete Tag
* `functionsGet` - Get Function
* `functionsGetExecution` - Get Execution
* `functionsGetTag` - Get Tag
* `functionsList` - List Functions
* `functionsListExecutions` - List Executions
* `functionsListTags` - List Tags
* `functionsUpdate` - Update Function
* `functionsUpdateTag` - Update Function Tag

### health

* `healthGet` - Get HTTP
* `healthGetAntiVirus` - Get Anti virus
* `healthGetCache` - Get Cache
* `healthGetDb` - Get DB
* `healthGetQueueCertificates` - Get Certificate Queue
* `healthGetQueueFunctions` - Get Functions Queue
* `healthGetQueueLogs` - Get Logs Queue
* `healthGetQueueTasks` - Get Tasks Queue
* `healthGetQueueUsage` - Get Usage Queue
* `healthGetQueueWebhooks` - Get Webhooks Queue
* `healthGetStorageLocal` - Get Local Storage
* `healthGetTime` - Get Time

### locale

* `localeGet` - Get User Locale
* `localeGetContinents` - List Continents
* `localeGetCountries` - List Countries
* `localeGetCountriesEu` - List EU Countries
* `localeGetCountriesPhones` - List Countries Phone Codes
* `localeGetCurrencies` - List Currencies
* `localeGetLanguages` - List Languages

### storage

* `storageCreateFile` - Create File
* `storageDeleteFile` - Delete File
* `storageGetFile` - Get File
* `storageGetFileDownload` - Get File for Download
* `storageGetFilePreview` - Get File Preview
* `storageGetFileView` - Get File for View
* `storageListFiles` - List Files
* `storageUpdateFile` - Update File

### teams

* `teamsCreate` - Create Team
* `teamsCreateMembership` - Create Team Membership
* `teamsDelete` - Delete Team
* `teamsDeleteMembership` - Delete Team Membership
* `teamsGet` - Get Team
* `teamsGetMemberships` - Get Team Memberships
* `teamsList` - List Teams
* `teamsUpdate` - Update Team
* `teamsUpdateMembershipRoles` - Update Membership Roles
* `teamsUpdateMembershipStatus` - Update Team Membership Status

### users

* `usersCreate` - Create User
* `usersDelete` - Delete User
* `usersDeleteSession` - Delete User Session
* `usersDeleteSessions` - Delete User Sessions
* `usersGet` - Get User
* `usersGetLogs` - Get User Logs
* `usersGetPrefs` - Get User Preferences
* `usersGetSessions` - Get User Sessions
* `usersList` - List Users
* `usersUpdatePrefs` - Update User Preferences
* `usersUpdateStatus` - Update User Status
* `usersUpdateVerification` - Update Email Verification

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
