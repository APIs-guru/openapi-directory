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
    
req = operations.AndroidmanagementEnterprisesCreateRequest(
    security=operations.AndroidmanagementEnterprisesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.AndroidmanagementEnterprisesCreateQueryParams(
        dollar_xgafv="1",
        access_token="animi",
        agreement_accepted=False,
        alt="proto",
        callback="dolorem",
        enterprise_token="fugiat",
        fields="adipisci",
        key="dolores",
        oauth_token="officia",
        pretty_print=True,
        project_id="doloremque",
        quota_user="et",
        signup_url_name="perspiciatis",
        upload_type="voluptatem",
        upload_protocol="esse",
    ),
    request=shared.Enterprise(
        app_auto_approval_enabled=True,
        contact_info=shared.ContactInfo(
            contact_email="accusamus",
            data_protection_officer_email="quibusdam",
            data_protection_officer_name="reiciendis",
            data_protection_officer_phone="esse",
            eu_representative_email="quaerat",
            eu_representative_name="expedita",
            eu_representative_phone="nulla",
        ),
        enabled_notification_types=[
            "ENROLLMENT",
            "COMMAND",
        ],
        enterprise_display_name="iusto",
        logo=shared.ExternalData(
            sha256_hash="deserunt",
            url="blanditiis",
        ),
        name="unde",
        primary_color=4010035282420238824,
        pubsub_topic="qui",
        signin_details=[
            shared.SigninDetail(
                allow_personal_usage="ALLOW_PERSONAL_USAGE_UNSPECIFIED",
                qr_code="voluptatem",
                signin_enrollment_token="commodi",
                signin_url="aut",
            ),
            shared.SigninDetail(
                allow_personal_usage="PERSONAL_USAGE_ALLOWED",
                qr_code="labore",
                signin_enrollment_token="rerum",
                signin_url="ullam",
            ),
        ],
        terms_and_conditions=[
            shared.TermsAndConditions(
                content=shared.UserFacingMessage(
                    default_message="et",
                    localized_messages={
                        "ipsum": "et",
                        "velit": "sed",
                        "at": "nisi",
                    },
                ),
                header=shared.UserFacingMessage(
                    default_message="eos",
                    localized_messages={
                        "expedita": "quisquam",
                        "consequatur": "aperiam",
                    },
                ),
            ),
            shared.TermsAndConditions(
                content=shared.UserFacingMessage(
                    default_message="blanditiis",
                    localized_messages={
                        "alias": "magni",
                        "quia": "quibusdam",
                        "error": "voluptatem",
                    },
                ),
                header=shared.UserFacingMessage(
                    default_message="architecto",
                    localized_messages={
                        "quia": "et",
                        "voluptatem": "recusandae",
                        "a": "ipsam",
                    },
                ),
            ),
            shared.TermsAndConditions(
                content=shared.UserFacingMessage(
                    default_message="id",
                    localized_messages={
                        "qui": "eum",
                        "ex": "qui",
                        "sed": "dolorum",
                    },
                ),
                header=shared.UserFacingMessage(
                    default_message="dolor",
                    localized_messages={
                        "corporis": "nesciunt",
                        "blanditiis": "in",
                        "consequatur": "dolores",
                    },
                ),
            ),
        ],
    ),
)
    
res = s.enterprises.androidmanagement_enterprises_create(req)

if res.enterprise is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### enterprises

* `androidmanagement_enterprises_create` - Creates an enterprise. This is the last step in the enterprise signup flow.
* `androidmanagement_enterprises_devices_issue_command` - Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
* `androidmanagement_enterprises_devices_list` - Lists devices for a given enterprise. Deleted devices are not returned in the response.
* `androidmanagement_enterprises_devices_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `androidmanagement_enterprises_enrollment_tokens_create` - Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.
* `androidmanagement_enterprises_enrollment_tokens_list` - Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
* `androidmanagement_enterprises_list` - Lists EMM-managed enterprises. Only BASIC fields are returned.
* `androidmanagement_enterprises_policies_list` - Lists policies for a given enterprise.
* `androidmanagement_enterprises_web_apps_create` - Creates a web app.
* `androidmanagement_enterprises_web_apps_delete` - Deletes a web app.
* `androidmanagement_enterprises_web_apps_get` - Gets a web app.
* `androidmanagement_enterprises_web_apps_list` - Lists web apps for a given enterprise.
* `androidmanagement_enterprises_web_apps_patch` - Updates a web app.
* `androidmanagement_enterprises_web_tokens_create` - Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.

### signupUrls

* `androidmanagement_signup_urls_create` - Creates an enterprise signup URL.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
