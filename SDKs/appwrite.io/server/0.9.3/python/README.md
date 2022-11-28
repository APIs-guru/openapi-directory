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
    
req = operations.AccountCreateRecoveryRequest(
    security=operations.AccountCreateRecoverySecurity(
        jwt=shared.SchemeJwt(
            api_key="YOUR_API_KEY_HERE",
        )
        project=shared.SchemeProject(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    request=operations.AccountCreateRecoveryRequestBody(
        email="quasi",
        url="aliquid",
    ),
)
    
res = s.account.account_create_recovery(req)

if res.token is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### account

* `account_create_recovery` - Create Password Recovery
* `account_create_verification` - Create Email Verification
* `account_delete` - Delete Account
* `account_delete_session` - Delete Account Session
* `account_delete_sessions` - Delete All Account Sessions
* `account_get` - Get Account
* `account_get_logs` - Get Account Logs
* `account_get_prefs` - Get Account Preferences
* `account_get_session` - Get Session By ID
* `account_get_sessions` - Get Account Sessions
* `account_update_email` - Update Account Email
* `account_update_name` - Update Account Name
* `account_update_password` - Update Account Password
* `account_update_prefs` - Update Account Preferences
* `account_update_recovery` - Complete Password Recovery
* `account_update_verification` - Complete Email Verification

### avatars

* `avatars_get_browser` - Get Browser Icon
* `avatars_get_credit_card` - Get Credit Card Icon
* `avatars_get_favicon` - Get Favicon
* `avatars_get_flag` - Get Country Flag
* `avatars_get_image` - Get Image from URL
* `avatars_get_initials` - Get User Initials
* `avatars_get_qr` - Get QR Code

### database

* `database_create_collection` - Create Collection
* `database_create_document` - Create Document
* `database_delete_collection` - Delete Collection
* `database_delete_document` - Delete Document
* `database_get_collection` - Get Collection
* `database_get_document` - Get Document
* `database_list_collections` - List Collections
* `database_list_documents` - List Documents
* `database_update_collection` - Update Collection
* `database_update_document` - Update Document

### functions

* `functions_create` - Create Function
* `functions_create_execution` - Create Execution
* `functions_create_tag` - Create Tag
* `functions_delete` - Delete Function
* `functions_delete_tag` - Delete Tag
* `functions_get` - Get Function
* `functions_get_execution` - Get Execution
* `functions_get_tag` - Get Tag
* `functions_list` - List Functions
* `functions_list_executions` - List Executions
* `functions_list_tags` - List Tags
* `functions_update` - Update Function
* `functions_update_tag` - Update Function Tag

### health

* `health_get` - Get HTTP
* `health_get_anti_virus` - Get Anti virus
* `health_get_cache` - Get Cache
* `health_get_db` - Get DB
* `health_get_queue_certificates` - Get Certificate Queue
* `health_get_queue_functions` - Get Functions Queue
* `health_get_queue_logs` - Get Logs Queue
* `health_get_queue_tasks` - Get Tasks Queue
* `health_get_queue_usage` - Get Usage Queue
* `health_get_queue_webhooks` - Get Webhooks Queue
* `health_get_storage_local` - Get Local Storage
* `health_get_time` - Get Time

### locale

* `locale_get` - Get User Locale
* `locale_get_continents` - List Continents
* `locale_get_countries` - List Countries
* `locale_get_countries_eu` - List EU Countries
* `locale_get_countries_phones` - List Countries Phone Codes
* `locale_get_currencies` - List Currencies
* `locale_get_languages` - List Languages

### storage

* `storage_create_file` - Create File
* `storage_delete_file` - Delete File
* `storage_get_file` - Get File
* `storage_get_file_download` - Get File for Download
* `storage_get_file_preview` - Get File Preview
* `storage_get_file_view` - Get File for View
* `storage_list_files` - List Files
* `storage_update_file` - Update File

### teams

* `teams_create` - Create Team
* `teams_create_membership` - Create Team Membership
* `teams_delete` - Delete Team
* `teams_delete_membership` - Delete Team Membership
* `teams_get` - Get Team
* `teams_get_memberships` - Get Team Memberships
* `teams_list` - List Teams
* `teams_update` - Update Team
* `teams_update_membership_roles` - Update Membership Roles
* `teams_update_membership_status` - Update Team Membership Status

### users

* `users_create` - Create User
* `users_delete` - Delete User
* `users_delete_session` - Delete User Session
* `users_delete_sessions` - Delete User Sessions
* `users_get` - Get User
* `users_get_logs` - Get User Logs
* `users_get_prefs` - Get User Preferences
* `users_get_sessions` - Get User Sessions
* `users_list` - List Users
* `users_update_prefs` - Update User Preferences
* `users_update_status` - Update User Status
* `users_update_verification` - Update Email Verification

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
