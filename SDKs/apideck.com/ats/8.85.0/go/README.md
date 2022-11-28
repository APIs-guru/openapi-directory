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
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.ApplicantsAddRequest{
        Security: operations.ApplicantsAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.ApplicantsAddQueryParams{
            Raw: true,
        },
        Headers: operations.ApplicantsAddHeaders{
            XApideckAppID: "est",
            XApideckConsumerID: "aut",
            XApideckServiceID: "in",
        },
        Request: shared.ApplicantInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "ex",
                    ContactName: "reiciendis",
                    Country: "molestiae",
                    County: "praesentium",
                    Email: "quis",
                    Fax: "omnis",
                    ID: "praesentium",
                    Latitude: "illo",
                    Line1: "omnis",
                    Line2: "iure",
                    Line3: "est",
                    Line4: "eaque",
                    Longitude: "quas",
                    Name: "suscipit",
                    PhoneNumber: "et",
                    PostalCode: "maxime",
                    RowVersion: "officiis",
                    Salutation: "iste",
                    State: "ut",
                    StreetNumber: "sapiente",
                    String: "nulla",
                    Type: "shipping",
                    Website: "et",
                },
            },
            Anonymized: true,
            Applications: []string{
                "optio",
                "nihil",
                "corrupti",
            },
            Archived: true,
            Birthday: "2015-09-15",
            Confidential: false,
            CoordinatorID: "reprehenderit",
            CoverLetter: "atque",
            Deleted: false,
            Emails: []shared.Email{
                shared.Email{
                    Email: "similique",
                    ID: "quaerat",
                    Type: "primary",
                },
                shared.Email{
                    Email: "ut",
                    ID: "quia",
                    Type: "primary",
                },
            },
            FirstName: "minima",
            Followers: []string{
                "quo",
                "architecto",
            },
            Headline: "quia",
            Initials: "voluptas",
            LastName: "molestiae",
            MiddleName: "blanditiis",
            Name: "nostrum",
            OwnerID: "ipsa",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "qui",
                    CountryCode: "veritatis",
                    Extension: "magnam",
                    ID: "veritatis",
                    Number: "ut",
                    Type: "home",
                },
            },
            PhotoURL: "est",
            PositionID: "qui",
            RecordURL: "ad",
            RecruiterID: "ut",
            SocialLinks: []shared.ApplicantSocialLinks{
                shared.ApplicantSocialLinks{
                    ID: "laboriosam",
                    Type: "consequuntur",
                    URL: "voluptatem",
                },
                shared.ApplicantSocialLinks{
                    ID: "dolor",
                    Type: "expedita",
                    URL: "qui",
                },
                shared.ApplicantSocialLinks{
                    ID: "reprehenderit",
                    Type: "dolores",
                    URL: "error",
                },
            },
            Sources: []string{
                "iusto",
                "odio",
                "et",
            },
            StageID: "at",
            Tags: []string{
                "numquam",
                "est",
                "dolores",
            },
            Title: "in",
            Websites: []shared.ApplicantWebsites{
                shared.ApplicantWebsites{
                    ID: "dolore",
                    Type: "other",
                    URL: "dolorem",
                },
                shared.ApplicantWebsites{
                    ID: "eum",
                    Type: "personal",
                    URL: "provident",
                },
                shared.ApplicantWebsites{
                    ID: "expedita",
                    Type: "other",
                    URL: "quis",
                },
            },
        },
    }
    
    res, err := s.Applicants.ApplicantsAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicantResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Applicants

* `ApplicantsAdd` - Create applicant
* `ApplicantsAll` - List applicants
* `ApplicantsOne` - Get applicant

### Jobs

* `JobsAll` - List Jobs
* `JobsOne` - Get Job

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
