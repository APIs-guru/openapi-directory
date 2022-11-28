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
                }
                ApplicationID: shared.SchemeApplicationID{
                    APIKey: "YOUR_API_KEY_HERE",
                }
                ConsumerID: shared.SchemeConsumerID{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.LeadsAddRequest{
        Security: operations.LeadsAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.LeadsAddQueryParams{
            Raw: false,
        },
        Headers: operations.LeadsAddHeaders{
            XApideckAppID: "voluptatum",
            XApideckConsumerID: "temporibus",
            XApideckServiceID: "voluptas",
        },
        Request: shared.LeadInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "officiis",
                    ContactName: "aut",
                    Country: "rerum",
                    County: "quasi",
                    Email: "quo",
                    Fax: "quibusdam",
                    ID: "veniam",
                    Latitude: "voluptatem",
                    Line1: "facere",
                    Line2: "rerum",
                    Line3: "ea",
                    Line4: "cupiditate",
                    Longitude: "blanditiis",
                    Name: "sed",
                    PhoneNumber: "tempora",
                    PostalCode: "neque",
                    RowVersion: "commodi",
                    Salutation: "optio",
                    State: "praesentium",
                    StreetNumber: "ipsa",
                    String: "iusto",
                    Type: "shipping",
                    Website: "vel",
                },
                shared.Address{
                    City: "et",
                    ContactName: "doloremque",
                    Country: "animi",
                    County: "doloremque",
                    Email: "deserunt",
                    Fax: "quam",
                    ID: "corporis",
                    Latitude: "nostrum",
                    Line1: "qui",
                    Line2: "praesentium",
                    Line3: "a",
                    Line4: "consequatur",
                    Longitude: "rerum",
                    Name: "qui",
                    PhoneNumber: "consequatur",
                    PostalCode: "animi",
                    RowVersion: "facere",
                    Salutation: "perspiciatis",
                    State: "ut",
                    StreetNumber: "facilis",
                    String: "beatae",
                    Type: "office",
                    Website: "at",
                },
                shared.Address{
                    City: "sint",
                    ContactName: "accusamus",
                    Country: "saepe",
                    County: "nihil",
                    Email: "ut",
                    Fax: "nostrum",
                    ID: "porro",
                    Latitude: "et",
                    Line1: "maxime",
                    Line2: "quae",
                    Line3: "est",
                    Line4: "odit",
                    Longitude: "eum",
                    Name: "placeat",
                    PhoneNumber: "illo",
                    PostalCode: "magnam",
                    RowVersion: "quas",
                    Salutation: "nemo",
                    State: "voluptatum",
                    StreetNumber: "quibusdam",
                    String: "eos",
                    Type: "billing",
                    Website: "sit",
                },
            },
            CompanyID: "libero",
            CompanyName: "et",
            ContactID: "eaque",
            Currency: "CUP",
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: "optio",
                    ID: "inventore",
                    Name: "illo",
                    Value: "ea",
                },
                shared.CustomField{
                    Description: "culpa",
                    ID: "accusamus",
                    Name: "illo",
                    Value: "id",
                },
                shared.CustomField{
                    Description: "est",
                    ID: "architecto",
                    Name: "officiis",
                    Value: "deserunt",
                },
            },
            Description: "officiis",
            Emails: []shared.Email{
                shared.Email{
                    Email: "saepe",
                    ID: "eius",
                    Type: "primary",
                },
                shared.Email{
                    Email: "sint",
                    ID: "dolor",
                    Type: "secondary",
                },
                shared.Email{
                    Email: "molestiae",
                    ID: "error",
                    Type: "secondary",
                },
            },
            Fax: "quis",
            FirstName: "autem",
            Language: "ratione",
            LastName: "illo",
            LeadSource: "eveniet",
            MonetaryAmount: 32.099998,
            Name: "eveniet",
            OwnerID: "animi",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "laudantium",
                    CountryCode: "rerum",
                    Extension: "enim",
                    ID: "qui",
                    Number: "incidunt",
                    Type: "other",
                },
                shared.PhoneNumber{
                    AreaCode: "et",
                    CountryCode: "omnis",
                    Extension: "distinctio",
                    ID: "repellendus",
                    Number: "vero",
                    Type: "secondary",
                },
            },
            Prefix: "architecto",
            SocialLinks: []shared.SocialLink{
                shared.SocialLink{
                    ID: "et",
                    Type: "soluta",
                    URL: "ullam",
                },
                shared.SocialLink{
                    ID: "ea",
                    Type: "veritatis",
                    URL: "dolorum",
                },
            },
            Status: "voluptas",
            Tags: []string{
                "saepe",
                "qui",
            },
            Title: "voluptatibus",
            Websites: []shared.Website{
                shared.Website{
                    ID: "quia",
                    Type: "work",
                    URL: "tempora",
                },
                shared.Website{
                    ID: "quis",
                    Type: "work",
                    URL: "non",
                },
            },
        },
    }
    
    res, err := s.Leads.LeadsAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateLeadResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Leads

* `LeadsAdd` - Create lead
* `LeadsAll` - List leads
* `LeadsDelete` - Delete lead
* `LeadsOne` - Get lead
* `LeadsUpdate` - Update lead

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
