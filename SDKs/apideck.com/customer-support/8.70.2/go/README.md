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
    
    req := operations.CustomersAddRequest{
        Security: operations.CustomersAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.CustomersAddQueryParams{
            Raw: false,
        },
        Headers: operations.CustomersAddHeaders{
            XApideckAppID: "iste",
            XApideckConsumerID: "fuga",
            XApideckServiceID: "ullam",
        },
        Request: shared.CustomerSupportCustomerInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "temporibus",
                    ContactName: "ipsam",
                    Country: "eum",
                    County: "aut",
                    Email: "et",
                    Fax: "error",
                    ID: "vero",
                    Latitude: "sit",
                    Line1: "maxime",
                    Line2: "est",
                    Line3: "natus",
                    Line4: "possimus",
                    Longitude: "sed",
                    Name: "recusandae",
                    PhoneNumber: "saepe",
                    PostalCode: "dolorem",
                    RowVersion: "consequatur",
                    Salutation: "recusandae",
                    State: "atque",
                    StreetNumber: "maiores",
                    String: "beatae",
                    Type: "office",
                    Website: "exercitationem",
                },
                shared.Address{
                    City: "rerum",
                    ContactName: "placeat",
                    Country: "doloremque",
                    County: "pariatur",
                    Email: "facilis",
                    Fax: "consequatur",
                    ID: "sit",
                    Latitude: "aut",
                    Line1: "illum",
                    Line2: "rerum",
                    Line3: "nobis",
                    Line4: "nemo",
                    Longitude: "qui",
                    Name: "aut",
                    PhoneNumber: "voluptatum",
                    PostalCode: "enim",
                    RowVersion: "eos",
                    Salutation: "adipisci",
                    State: "eos",
                    StreetNumber: "est",
                    String: "nesciunt",
                    Type: "office",
                    Website: "magni",
                },
                shared.Address{
                    City: "exercitationem",
                    ContactName: "voluptatem",
                    Country: "debitis",
                    County: "non",
                    Email: "aut",
                    Fax: "dicta",
                    ID: "qui",
                    Latitude: "architecto",
                    Line1: "dolore",
                    Line2: "laborum",
                    Line3: "laborum",
                    Line4: "perferendis",
                    Longitude: "vero",
                    Name: "ex",
                    PhoneNumber: "qui",
                    PostalCode: "incidunt",
                    RowVersion: "debitis",
                    Salutation: "qui",
                    State: "culpa",
                    StreetNumber: "ea",
                    String: "totam",
                    Type: "other",
                    Website: "iste",
                },
            },
            BankAccounts: &shared.BankAccount{
                AccountName: "inventore",
                AccountNumber: "repudiandae",
                AccountType: "other",
                BankCode: "dolorem",
                Bic: "voluptas",
                BranchIdentifier: "dolores",
                BsbNumber: "quam",
                Currency: "BSD",
                Iban: "cupiditate",
            },
            CompanyName: "perferendis",
            Currency: "IDR",
            Emails: []shared.Email{
                shared.Email{
                    Email: "illo",
                    ID: "odit",
                    Type: "primary",
                },
            },
            FirstName: "rerum",
            Individual: false,
            LastName: "corporis",
            Notes: "doloribus",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "officiis",
                    CountryCode: "explicabo",
                    Extension: "eum",
                    ID: "et",
                    Number: "neque",
                    Type: "direct-dial-in",
                },
            },
            Status: "archived",
            TaxNumber: "et",
        },
    }
    
    res, err := s.CustomersAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCustomerSupportCustomerResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `customersAdd` - Create Customer Support Customer
* `customersAll` - List Customer Support Customers
* `customersDelete` - Delete Customer Support Customer
* `customersOne` - Get Customer Support Customer
* `customersUpdate` - Update Customer Support Customer

<!-- End SDK Available Operations -->