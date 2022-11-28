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
    
    req := operations.ActivitiesAddRequest{
        Security: operations.ActivitiesAddSecurity{
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        },
        QueryParams: operations.ActivitiesAddQueryParams{
            Raw: false,
        },
        Headers: operations.ActivitiesAddHeaders{
            XApideckAppID: "et",
            XApideckConsumerID: "beatae",
            XApideckServiceID: "fuga",
        },
        Request: shared.ActivityInput{
            AccountID: "perspiciatis",
            ActivityDate: "quas",
            ActivityDatetime: "incidunt",
            AllDayEvent: true,
            Archived: true,
            AssetID: "culpa",
            Attendees: []shared.ActivityAttendeeInput{
                shared.ActivityAttendeeInput{
                    EmailAddress: "quae",
                    FirstName: "quaerat",
                    IsOrganizer: true,
                    LastName: "iusto",
                    MiddleName: "nihil",
                    Name: "ab",
                    Prefix: "veritatis",
                    Status: "accepted",
                    Suffix: "natus",
                },
            },
            CampaignID: "quo",
            CaseID: "error",
            Child: false,
            CompanyID: "deserunt",
            ContactID: "doloribus",
            ContractID: "qui",
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: "occaecati",
                    ID: "dolore",
                    Name: "dolor",
                    Value: "beatae",
                },
                shared.CustomField{
                    Description: "aspernatur",
                    ID: "non",
                    Name: "sint",
                    Value: "laboriosam",
                },
            },
            CustomObjectID: "quia",
            Deleted: false,
            Description: "inventore",
            Done: true,
            DurationSeconds: 2380683085597594969,
            EndDate: "perferendis",
            EndDatetime: "sapiente",
            EventSubType: "similique",
            GroupEvent: false,
            GroupEventType: "alias",
            LeadID: "dignissimos",
            Location: "fugiat",
            LocationAddress: &shared.Address{
                City: "nihil",
                ContactName: "nulla",
                Country: "consequatur",
                County: "dolorem",
                Email: "voluptatibus",
                Fax: "provident",
                ID: "nostrum",
                Latitude: "itaque",
                Line1: "laudantium",
                Line2: "et",
                Line3: "omnis",
                Line4: "et",
                Longitude: "eius",
                Name: "earum",
                PhoneNumber: "error",
                PostalCode: "et",
                RowVersion: "nesciunt",
                Salutation: "dolores",
                State: "voluptas",
                StreetNumber: "ipsam",
                String: "ipsam",
                Type: "other",
                Website: "corrupti",
            },
            Note: "iure",
            OpportunityID: "eligendi",
            OwnerID: "consequatur",
            Private: true,
            ProductID: "et",
            Recurrent: false,
            ReminderDatetime: "delectus",
            ReminderSet: false,
            ShowAs: "free",
            SolutionID: "in",
            StartDatetime: "voluptas",
            Title: "dolorem",
            Type: "call",
            UserID: "aut",
            VideoConferenceID: "aut",
            VideoConferenceURL: "saepe",
        },
    }
    
    res, err := s.Activities.ActivitiesAdd(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateActivityResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Activities

* `ActivitiesAdd` - Create activity
* `ActivitiesAll` - List activities
* `ActivitiesDelete` - Delete activity
* `ActivitiesOne` - Get activity
* `ActivitiesUpdate` - Update activity

### Companies

* `CompaniesAdd` - Create company
* `CompaniesAll` - List companies
* `CompaniesDelete` - Delete company
* `CompaniesOne` - Get company
* `CompaniesUpdate` - Update company

### Contacts

* `ContactsAdd` - Create contact
* `ContactsAll` - List contacts
* `ContactsDelete` - Delete contact
* `ContactsOne` - Get contact
* `ContactsUpdate` - Update contact

### Leads

* `LeadsAdd` - Create lead
* `LeadsAll` - List leads
* `LeadsDelete` - Delete lead
* `LeadsOne` - Get lead
* `LeadsUpdate` - Update lead

### Notes

* `NotesAdd` - Create note
* `NotesAll` - List notes
* `NotesDelete` - Delete note
* `NotesOne` - Get note
* `NotesUpdate` - Update note

### Opportunities

* `OpportunitiesAdd` - Create opportunity
* `OpportunitiesAll` - List opportunities
* `OpportunitiesDelete` - Delete opportunity
* `OpportunitiesOne` - Get opportunity
* `OpportunitiesUpdate` - Update opportunity

### Pipelines

* `PipelinesAdd` - Create pipeline
* `PipelinesAll` - List pipelines
* `PipelinesDelete` - Delete pipeline
* `PipelinesOne` - Get pipeline
* `PipelinesUpdate` - Update pipeline

### Users

* `UsersAdd` - Create user
* `UsersAll` - List users
* `UsersDelete` - Delete user
* `UsersOne` - Get user
* `UsersUpdate` - Update user

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
