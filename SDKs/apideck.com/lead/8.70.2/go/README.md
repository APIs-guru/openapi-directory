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
            XApideckAppID: "eum",
            XApideckConsumerID: "placeat",
            XApideckServiceID: "illo",
        },
        Request: shared.LeadInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "quas",
                    ContactName: "nemo",
                    Country: "voluptatum",
                    County: "quibusdam",
                    Email: "eos",
                    Fax: "quae",
                    ID: "sit",
                    Latitude: "libero",
                    Line1: "et",
                    Line2: "eaque",
                    Line3: "veritatis",
                    Line4: "id",
                    Longitude: "optio",
                    Name: "inventore",
                    PhoneNumber: "illo",
                    PostalCode: "ea",
                    RowVersion: "culpa",
                    Salutation: "accusamus",
                    State: "illo",
                    StreetNumber: "id",
                    String: "est",
                    Type: "billing",
                    Website: "officiis",
                },
            },
            CompanyID: "deserunt",
            CompanyName: "officiis",
            ContactID: "est",
            Currency: "BWP",
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: "delectus",
                    ID: "sint",
                    Name: "dolor",
                    Value: "qui",
                },
                shared.CustomField{
                    Description: "molestiae",
                    ID: "error",
                    Name: "nulla",
                    Value: "quis",
                },
            },
            Description: "autem",
            Emails: []shared.Email{
                shared.Email{
                    Email: "illo",
                    ID: "eveniet",
                    Type: "billing",
                },
            },
            Fax: "aut",
            FirstName: "eveniet",
            Language: "animi",
            LastName: "minus",
            LeadSource: "laudantium",
            MonetaryAmount: 83.199997,
            Name: "qui",
            OwnerID: "incidunt",
            PhoneNumbers: []shared.PhoneNumber{
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
    
    res, err := s.LeadsAdd(ctx, req)
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
* `leadsAdd` - Create lead
* `leadsAll` - List leads
* `leadsDelete` - Delete lead
* `leadsOne` - Get lead
* `leadsUpdate` - Update lead

<!-- End SDK Available Operations -->