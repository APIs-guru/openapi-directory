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
            Raw: true,
        },
        Headers: operations.CompaniesAddHeaders{
            XApideckAppID: "officia",
            XApideckConsumerID: "repellat",
            XApideckServiceID: "et",
        },
        Request: shared.HrisCompanyInput{
            Addresses: []shared.Address{
                shared.Address{
                    City: "est",
                    ContactName: "et",
                    Country: "sit",
                    County: "architecto",
                    Email: "consequatur",
                    Fax: "quo",
                    ID: "deleniti",
                    Latitude: "perferendis",
                    Line1: "nemo",
                    Line2: "vitae",
                    Line3: "ad",
                    Line4: "commodi",
                    Longitude: "aspernatur",
                    Name: "sit",
                    PhoneNumber: "et",
                    PostalCode: "iure",
                    RowVersion: "facilis",
                    Salutation: "consequuntur",
                    State: "sit",
                    StreetNumber: "aliquid",
                    String: "consequuntur",
                    Type: "secondary",
                    Website: "officiis",
                },
                shared.Address{
                    City: "corporis",
                    ContactName: "et",
                    Country: "necessitatibus",
                    County: "numquam",
                    Email: "in",
                    Fax: "animi",
                    ID: "consequuntur",
                    Latitude: "impedit",
                    Line1: "cumque",
                    Line2: "eos",
                    Line3: "ut",
                    Line4: "beatae",
                    Longitude: "voluptatum",
                    Name: "temporibus",
                    PhoneNumber: "voluptas",
                    PostalCode: "accusantium",
                    RowVersion: "officiis",
                    Salutation: "aut",
                    State: "rerum",
                    StreetNumber: "quasi",
                    String: "quo",
                    Type: "billing",
                    Website: "veniam",
                },
                shared.Address{
                    City: "voluptatem",
                    ContactName: "facere",
                    Country: "rerum",
                    County: "ea",
                    Email: "cupiditate",
                    Fax: "blanditiis",
                    ID: "sed",
                    Latitude: "tempora",
                    Line1: "neque",
                    Line2: "commodi",
                    Line3: "optio",
                    Line4: "praesentium",
                    Longitude: "ipsa",
                    Name: "iusto",
                    PhoneNumber: "pariatur",
                    PostalCode: "vel",
                    RowVersion: "et",
                    Salutation: "doloremque",
                    State: "animi",
                    StreetNumber: "doloremque",
                    String: "deserunt",
                    Type: "home",
                    Website: "corporis",
                },
            },
            CompanyNumber: "nostrum",
            DebtorID: "qui",
            DisplayName: "praesentium",
            Emails: []shared.Email{
                shared.Email{
                    Email: "consequatur",
                    ID: "rerum",
                    Type: "personal",
                },
            },
            LegalName: "consequatur",
            PhoneNumbers: []shared.PhoneNumber{
                shared.PhoneNumber{
                    AreaCode: "facere",
                    CountryCode: "perspiciatis",
                    Extension: "ut",
                    ID: "facilis",
                    Number: "beatae",
                    Type: "mobile",
                },
                shared.PhoneNumber{
                    AreaCode: "at",
                    CountryCode: "sint",
                    Extension: "accusamus",
                    ID: "saepe",
                    Number: "nihil",
                    Type: "primary",
                },
            },
            Status: "inactive",
            Subdomain: "porro",
            Websites: []shared.Website{
                shared.Website{
                    ID: "maxime",
                    Type: "personal",
                    URL: "est",
                },
            },
        },
    }
    
    res, err := s.CompaniesAdd(ctx, req)
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
* `companiesAdd` - Create Company
* `companiesAll` - List Companies
* `companiesDelete` - Delete Company
* `companiesOne` - Get Company
* `companiesUpdate` - Update Company
* `departmentsAdd` - Create Department
* `departmentsAll` - List Departments
* `departmentsDelete` - Delete Department
* `departmentsOne` - Get Department
* `departmentsUpdate` - Update Department
* `employeePayrollsAll` - List Employee Payrolls
* `employeePayrollsOne` - Get Employee Payroll
* `employeeSchedulesAll` - List Employee Schedules
* `employeesAdd` - Create Employee
* `employeesAll` - List Employees
* `employeesDelete` - Delete Employee
* `employeesOne` - Get Employee
* `employeesUpdate` - Update Employee
* `jobsAll` - List Jobs
* `jobsOne` - One Job
* `payrollsAll` - List Payroll
* `payrollsOne` - Get Payroll
* `timeOffRequestsAdd` - Create Time Off Request
* `timeOffRequestsAll` - List Time Off Requests
* `timeOffRequestsDelete` - Delete Time Off Request
* `timeOffRequestsOne` - Get Time Off Request
* `timeOffRequestsUpdate` - Update Time Off Request

<!-- End SDK Available Operations -->