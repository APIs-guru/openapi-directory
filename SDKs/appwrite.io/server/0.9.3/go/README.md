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
    s := sdk.New()
    
    req := operations.AccountCreateRecoveryRequest{
        Security: operations.AccountCreateRecoverySecurity{
            Jwt: shared.SchemeJwt{
                APIKey: "YOUR_API_KEY_HERE",
            }
            Project: shared.SchemeProject{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        Request: &operations.AccountCreateRecoveryRequestBody{
            Email: "quasi",
            URL: "aliquid",
        },
    }
    
    res, err := s.Account.AccountCreateRecovery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Token != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### account

* `AccountCreateRecovery` - Create Password Recovery
* `AccountCreateVerification` - Create Email Verification
* `AccountDelete` - Delete Account
* `AccountDeleteSession` - Delete Account Session
* `AccountDeleteSessions` - Delete All Account Sessions
* `AccountGet` - Get Account
* `AccountGetLogs` - Get Account Logs
* `AccountGetPrefs` - Get Account Preferences
* `AccountGetSession` - Get Session By ID
* `AccountGetSessions` - Get Account Sessions
* `AccountUpdateEmail` - Update Account Email
* `AccountUpdateName` - Update Account Name
* `AccountUpdatePassword` - Update Account Password
* `AccountUpdatePrefs` - Update Account Preferences
* `AccountUpdateRecovery` - Complete Password Recovery
* `AccountUpdateVerification` - Complete Email Verification

### avatars

* `AvatarsGetBrowser` - Get Browser Icon
* `AvatarsGetCreditCard` - Get Credit Card Icon
* `AvatarsGetFavicon` - Get Favicon
* `AvatarsGetFlag` - Get Country Flag
* `AvatarsGetImage` - Get Image from URL
* `AvatarsGetInitials` - Get User Initials
* `AvatarsGetQr` - Get QR Code

### database

* `DatabaseCreateCollection` - Create Collection
* `DatabaseCreateDocument` - Create Document
* `DatabaseDeleteCollection` - Delete Collection
* `DatabaseDeleteDocument` - Delete Document
* `DatabaseGetCollection` - Get Collection
* `DatabaseGetDocument` - Get Document
* `DatabaseListCollections` - List Collections
* `DatabaseListDocuments` - List Documents
* `DatabaseUpdateCollection` - Update Collection
* `DatabaseUpdateDocument` - Update Document

### functions

* `FunctionsCreate` - Create Function
* `FunctionsCreateExecution` - Create Execution
* `FunctionsCreateTag` - Create Tag
* `FunctionsDelete` - Delete Function
* `FunctionsDeleteTag` - Delete Tag
* `FunctionsGet` - Get Function
* `FunctionsGetExecution` - Get Execution
* `FunctionsGetTag` - Get Tag
* `FunctionsList` - List Functions
* `FunctionsListExecutions` - List Executions
* `FunctionsListTags` - List Tags
* `FunctionsUpdate` - Update Function
* `FunctionsUpdateTag` - Update Function Tag

### health

* `HealthGet` - Get HTTP
* `HealthGetAntiVirus` - Get Anti virus
* `HealthGetCache` - Get Cache
* `HealthGetDb` - Get DB
* `HealthGetQueueCertificates` - Get Certificate Queue
* `HealthGetQueueFunctions` - Get Functions Queue
* `HealthGetQueueLogs` - Get Logs Queue
* `HealthGetQueueTasks` - Get Tasks Queue
* `HealthGetQueueUsage` - Get Usage Queue
* `HealthGetQueueWebhooks` - Get Webhooks Queue
* `HealthGetStorageLocal` - Get Local Storage
* `HealthGetTime` - Get Time

### locale

* `LocaleGet` - Get User Locale
* `LocaleGetContinents` - List Continents
* `LocaleGetCountries` - List Countries
* `LocaleGetCountriesEu` - List EU Countries
* `LocaleGetCountriesPhones` - List Countries Phone Codes
* `LocaleGetCurrencies` - List Currencies
* `LocaleGetLanguages` - List Languages

### storage

* `StorageCreateFile` - Create File
* `StorageDeleteFile` - Delete File
* `StorageGetFile` - Get File
* `StorageGetFileDownload` - Get File for Download
* `StorageGetFilePreview` - Get File Preview
* `StorageGetFileView` - Get File for View
* `StorageListFiles` - List Files
* `StorageUpdateFile` - Update File

### teams

* `TeamsCreate` - Create Team
* `TeamsCreateMembership` - Create Team Membership
* `TeamsDelete` - Delete Team
* `TeamsDeleteMembership` - Delete Team Membership
* `TeamsGet` - Get Team
* `TeamsGetMemberships` - Get Team Memberships
* `TeamsList` - List Teams
* `TeamsUpdate` - Update Team
* `TeamsUpdateMembershipRoles` - Update Membership Roles
* `TeamsUpdateMembershipStatus` - Update Team Membership Status

### users

* `UsersCreate` - Create User
* `UsersDelete` - Delete User
* `UsersDeleteSession` - Delete User Session
* `UsersDeleteSessions` - Delete User Sessions
* `UsersGet` - Get User
* `UsersGetLogs` - Get User Logs
* `UsersGetPrefs` - Get User Preferences
* `UsersGetSessions` - Get User Sessions
* `UsersList` - List Users
* `UsersUpdatePrefs` - Update User Preferences
* `UsersUpdateStatus` - Update User Status
* `UsersUpdateVerification` - Update Email Verification

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
