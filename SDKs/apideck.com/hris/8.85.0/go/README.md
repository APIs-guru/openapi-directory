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
    
    req := operations.CompaniesAddRequest{
        Security: operations.CompaniesAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.CompaniesAddQueryParams{
            Raw: false,
        },
        Headers: operations.CompaniesAddHeaders{
            XApideckAppID: "aut",
            XApideckConsumerID: "voluptatum",
            XApideckServiceID: "enim",
        },
        Request: shared.HrisCompanyInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "adipisci",
                    ContactName: "eos",
                    Country: "est",
                    County: "nesciunt",
                    Email: "ipsum",
                    Fax: "magni",
                    ID: "exercitationem",
                    Latitude: "voluptatem",
                    Line1: "debitis",
                    Line2: "non",
                    Line3: "aut",
                    Line4: "dicta",
                    Longitude: "qui",
                    Name: "architecto",
                    PhoneNumber: "dolore",
                    PostalCode: "laborum",
                    RowVersion: "laborum",
                    Salutation: "perferendis",
                    State: "vero",
                    StreetNumber: "ex",
                    String: "qui",
                    Type: "home",
                    Website: "debitis",
                },
                shared.Address{
                    City: "qui",
                    ContactName: "culpa",
                    Country: "ea",
                    County: "totam",
                    Email: "non",
                    Fax: "iste",
                    ID: "inventore",
                    Latitude: "repudiandae",
                    Line1: "beatae",
                    Line2: "dolorem",
                    Line3: "voluptas",
                    Line4: "dolores",
                    Longitude: "quam",
                    Name: "modi",
                    PhoneNumber: "cupiditate",
                    PostalCode: "perferendis",
                    RowVersion: "earum",
                    Salutation: "asperiores",
                    State: "illo",
                    StreetNumber: "odit",
                    String: "distinctio",
                    Type: "secondary",
                    Website: "dolore",
                },
                shared.Address{
                    City: "corporis",
                    ContactName: "doloribus",
                    Country: "ut",
                    County: "officiis",
                    Email: "explicabo",
                    Fax: "eum",
                    ID: "et",
                    Latitude: "neque",
                    Line1: "autem",
                    Line2: "optio",
                    Line3: "et",
                    Line4: "blanditiis",
                    Longitude: "architecto",
                    Name: "natus",
                    PhoneNumber: "sint",
                    PostalCode: "officia",
                    RowVersion: "repellat",
                    Salutation: "et",
                    State: "accusamus",
                    StreetNumber: "est",
                    String: "et",
                    Type: "billing",
                    Website: "architecto",
                },
            },
            CompanyNumber: "consequatur",
            DebtorID: "quo",
            DisplayName: "deleniti",
            Emails: []shared.Email{
                shared.Email{
                    Email: "nemo",
                    ID: "vitae",
                    Type: "work",
                },
                shared.Email{
                    Email: "commodi",
                    ID: "aspernatur",
                    Type: "primary",
                },
            },
            LegalName: "et",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "facilis",
                    CountryCode: "consequuntur",
                    Extension: "sit",
                    ID: "aliquid",
                    Number: "consequuntur",
                    Type: "direct-dial-in",
                },
            },
            Status: "inactive",
            Subdomain: "corporis",
            Websites: []shared.Website{
                shared.Website{
                    ID: "necessitatibus",
                    Type: "secondary",
                    URL: "in",
                },
                shared.Website{
                    ID: "animi",
                    Type: "work",
                    URL: "impedit",
                },
                shared.Website{
                    ID: "cumque",
                    Type: "other",
                    URL: "ut",
                },
            },
        },
    }
    
    res, err := s.Companies.CompaniesAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateHrisCompanyResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Companies

* `CompaniesAdd` - Create Company
* `CompaniesAll` - List Companies
* `CompaniesDelete` - Delete Company
* `CompaniesOne` - Get Company
* `CompaniesUpdate` - Update Company

### Departments

* `DepartmentsAdd` - Create Department
* `DepartmentsAll` - List Departments
* `DepartmentsDelete` - Delete Department
* `DepartmentsOne` - Get Department
* `DepartmentsUpdate` - Update Department

### Employee Payrolls

* `EmployeePayrollsAll` - List Employee Payrolls
* `EmployeePayrollsOne` - Get Employee Payroll

### Employee Schedules

* `EmployeeSchedulesAll` - List Employee Schedules

### Employees

* `EmployeesAdd` - Create Employee
* `EmployeesAll` - List Employees
* `EmployeesDelete` - Delete Employee
* `EmployeesOne` - Get Employee
* `EmployeesUpdate` - Update Employee

### Jobs

* `JobsAll` - List Jobs
* `JobsOne` - One Job

### Payrolls

* `PayrollsAll` - List Payroll
* `PayrollsOne` - Get Payroll

### Time Off Requests

* `TimeOffRequestsAdd` - Create Time Off Request
* `TimeOffRequestsAll` - List Time Off Requests
* `TimeOffRequestsDelete` - Delete Time Off Request
* `TimeOffRequestsOne` - Get Time Off Request
* `TimeOffRequestsUpdate` - Update Time Off Request

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
