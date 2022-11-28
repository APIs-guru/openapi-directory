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
    
    req := operations.AndroidmanagementEnterprisesCreateRequest{
        Security: operations.AndroidmanagementEnterprisesCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.AndroidmanagementEnterprisesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "animi",
            AgreementAccepted: false,
            Alt: "proto",
            Callback: "dolorem",
            EnterpriseToken: "fugiat",
            Fields: "adipisci",
            Key: "dolores",
            OauthToken: "officia",
            PrettyPrint: true,
            ProjectID: "doloremque",
            QuotaUser: "et",
            SignupURLName: "perspiciatis",
            UploadType: "voluptatem",
            UploadProtocol: "esse",
        },
        Request: &shared.Enterprise{
            AppAutoApprovalEnabled: true,
            ContactInfo: &shared.ContactInfo{
                ContactEmail: "accusamus",
                DataProtectionOfficerEmail: "quibusdam",
                DataProtectionOfficerName: "reiciendis",
                DataProtectionOfficerPhone: "esse",
                EuRepresentativeEmail: "quaerat",
                EuRepresentativeName: "expedita",
                EuRepresentativePhone: "nulla",
            },
            EnabledNotificationTypes: []shared.EnterpriseEnabledNotificationTypesEnum{
                "ENROLLMENT",
                "COMMAND",
            },
            EnterpriseDisplayName: "iusto",
            Logo: &shared.ExternalData{
                Sha256Hash: "deserunt",
                URL: "blanditiis",
            },
            Name: "unde",
            PrimaryColor: 4010035282420238824,
            PubsubTopic: "qui",
            SigninDetails: []shared.SigninDetail{
                shared.SigninDetail{
                    AllowPersonalUsage: "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
                    QrCode: "voluptatem",
                    SigninEnrollmentToken: "commodi",
                    SigninURL: "aut",
                },
                shared.SigninDetail{
                    AllowPersonalUsage: "PERSONAL_USAGE_ALLOWED",
                    QrCode: "labore",
                    SigninEnrollmentToken: "rerum",
                    SigninURL: "ullam",
                },
            },
            TermsAndConditions: []shared.TermsAndConditions{
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: "et",
                        LocalizedMessages: map[string]string{
                            "ipsum": "et",
                            "velit": "sed",
                            "at": "nisi",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: "eos",
                        LocalizedMessages: map[string]string{
                            "expedita": "quisquam",
                            "consequatur": "aperiam",
                        },
                    },
                },
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: "blanditiis",
                        LocalizedMessages: map[string]string{
                            "alias": "magni",
                            "quia": "quibusdam",
                            "error": "voluptatem",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: "architecto",
                        LocalizedMessages: map[string]string{
                            "quia": "et",
                            "voluptatem": "recusandae",
                            "a": "ipsam",
                        },
                    },
                },
                shared.TermsAndConditions{
                    Content: &shared.UserFacingMessage{
                        DefaultMessage: "id",
                        LocalizedMessages: map[string]string{
                            "qui": "eum",
                            "ex": "qui",
                            "sed": "dolorum",
                        },
                    },
                    Header: &shared.UserFacingMessage{
                        DefaultMessage: "dolor",
                        LocalizedMessages: map[string]string{
                            "corporis": "nesciunt",
                            "blanditiis": "in",
                            "consequatur": "dolores",
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Enterprises.AndroidmanagementEnterprisesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Enterprise != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### enterprises

* `AndroidmanagementEnterprisesCreate` - Creates an enterprise. This is the last step in the enterprise signup flow.
* `AndroidmanagementEnterprisesDevicesIssueCommand` - Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
* `AndroidmanagementEnterprisesDevicesList` - Lists devices for a given enterprise. Deleted devices are not returned in the response.
* `AndroidmanagementEnterprisesDevicesOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
* `AndroidmanagementEnterprisesEnrollmentTokensCreate` - Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore. Once an enrollment token has been created, it's not possible to retrieve the token's content anymore using AM API. It is recommended for EMMs to securely store the token if it's intended to be reused.
* `AndroidmanagementEnterprisesEnrollmentTokensList` - Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken: all the fields but name and expiration_timestamp are empty. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
* `AndroidmanagementEnterprisesList` - Lists EMM-managed enterprises. Only BASIC fields are returned.
* `AndroidmanagementEnterprisesPoliciesList` - Lists policies for a given enterprise.
* `AndroidmanagementEnterprisesWebAppsCreate` - Creates a web app.
* `AndroidmanagementEnterprisesWebAppsDelete` - Deletes a web app.
* `AndroidmanagementEnterprisesWebAppsGet` - Gets a web app.
* `AndroidmanagementEnterprisesWebAppsList` - Lists web apps for a given enterprise.
* `AndroidmanagementEnterprisesWebAppsPatch` - Updates a web app.
* `AndroidmanagementEnterprisesWebTokensCreate` - Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.

### signupUrls

* `AndroidmanagementSignupUrlsCreate` - Creates an enterprise signup URL.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
