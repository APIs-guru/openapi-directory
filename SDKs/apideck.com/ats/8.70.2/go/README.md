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
            XApideckAppID: "omnis",
            XApideckConsumerID: "vel",
            XApideckServiceID: "nemo",
        },
        Request: shared.ApplicantInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "aut",
                    ContactName: "in",
                    Country: "velit",
                    County: "ex",
                    Email: "reiciendis",
                    Fax: "molestiae",
                    ID: "praesentium",
                    Latitude: "quis",
                    Line1: "omnis",
                    Line2: "praesentium",
                    Line3: "illo",
                    Line4: "omnis",
                    Longitude: "iure",
                    Name: "est",
                    PhoneNumber: "eaque",
                    PostalCode: "quas",
                    RowVersion: "suscipit",
                    Salutation: "et",
                    State: "maxime",
                    StreetNumber: "officiis",
                    String: "iste",
                    Type: "shipping",
                    Website: "sapiente",
                },
                shared.Address{
                    City: "nulla",
                    ContactName: "id",
                    Country: "et",
                    County: "voluptatem",
                    Email: "officia",
                    Fax: "optio",
                    ID: "nihil",
                    Latitude: "corrupti",
                    Line1: "voluptatem",
                    Line2: "magni",
                    Line3: "ducimus",
                    Line4: "reprehenderit",
                    Longitude: "atque",
                    Name: "quaerat",
                    PhoneNumber: "suscipit",
                    PostalCode: "similique",
                    RowVersion: "quaerat",
                    Salutation: "ipsa",
                    State: "ut",
                    StreetNumber: "quia",
                    String: "ea",
                    Type: "home",
                    Website: "animi",
                },
            },
            Anonymized: true,
            Applications: []string{
                "quia",
                "voluptas",
            },
            Archived: false,
            Birthday: "1984-05-23",
            Confidential: false,
            CoordinatorID: "ipsa",
            CoverLetter: "alias",
            Deleted: false,
            Emails: []shared.Email{
                shared.Email{
                    Email: "magnam",
                    ID: "veritatis",
                    Type: "secondary",
                },
                shared.Email{
                    Email: "sed",
                    ID: "est",
                    Type: "work",
                },
            },
            FirstName: "ad",
            Followers: []string{
                "aliquid",
                "laboriosam",
            },
            Headline: "consequuntur",
            Initials: "voluptatem",
            LastName: "dolor",
            MiddleName: "expedita",
            Name: "qui",
            OwnerID: "reprehenderit",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "error",
                    CountryCode: "totam",
                    Extension: "iusto",
                    ID: "odio",
                    Number: "et",
                    Type: "secondary",
                },
                shared.PhoneNumber{
                    AreaCode: "dolores",
                    CountryCode: "numquam",
                    Extension: "est",
                    ID: "dolores",
                    Number: "in",
                    Type: "other",
                },
                shared.PhoneNumber{
                    AreaCode: "dolore",
                    CountryCode: "minus",
                    Extension: "dolorem",
                    ID: "eum",
                    Number: "et",
                    Type: "direct-dial-in",
                },
            },
            PhotoURL: "expedita",
            PositionID: "sit",
            RecordURL: "quis",
            RecruiterID: "nihil",
            SocialLinks: []shared.ApplicantSocialLinks{
                shared.ApplicantSocialLinks{
                    ID: "praesentium",
                    Type: "laudantium",
                    URL: "et",
                },
                shared.ApplicantSocialLinks{
                    ID: "beatae",
                    Type: "fuga",
                    URL: "perspiciatis",
                },
            },
            Sources: []string{
                "incidunt",
                "et",
                "placeat",
            },
            StageID: "culpa",
            Tags: []string{
                "quae",
            },
            Title: "quaerat",
            Websites: []shared.ApplicantWebsites{
                shared.ApplicantWebsites{
                    ID: "iusto",
                    Type: "personal",
                    URL: "ab",
                },
                shared.ApplicantWebsites{
                    ID: "veritatis",
                    Type: "work",
                    URL: "natus",
                },
                shared.ApplicantWebsites{
                    ID: "quo",
                    Type: "primary",
                    URL: "neque",
                },
            },
        },
    }
    
    res, err := s.ApplicantsAdd(ctx, req)
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
* `applicantsAdd` - Create applicant
* `applicantsAll` - List applicants
* `applicantsOne` - Get applicant
* `jobsAll` - List Jobs
* `jobsOne` - Get Job

<!-- End SDK Available Operations -->