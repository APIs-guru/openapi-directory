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
            XApideckAppID: "occaecati",
            XApideckConsumerID: "dolore",
            XApideckServiceID: "dolor",
        },
        Request: shared.ActivityInput{
            AccountID: "beatae",
            ActivityDate: "aspernatur",
            ActivityDatetime: "non",
            AllDayEvent: true,
            Archived: true,
            AssetID: "quia",
            Attendees: []shared.ActivityAttendeeInput{
                shared.ActivityAttendeeInput{
                    EmailAddress: "inventore",
                    FirstName: "nobis",
                    IsOrganizer: true,
                    LastName: "perferendis",
                    MiddleName: "sapiente",
                    Name: "similique",
                    Prefix: "temporibus",
                    Status: "accepted",
                    Suffix: "dignissimos",
                },
                shared.ActivityAttendeeInput{
                    EmailAddress: "fugiat",
                    FirstName: "nihil",
                    IsOrganizer: false,
                    LastName: "consequatur",
                    MiddleName: "dolorem",
                    Name: "voluptatibus",
                    Prefix: "provident",
                    Status: "accepted",
                    Suffix: "itaque",
                },
            },
            CampaignID: "laudantium",
            CaseID: "et",
            Child: true,
            CompanyID: "et",
            ContactID: "eius",
            ContractID: "earum",
            CustomFields: []shared.CustomField{
                shared.CustomField{
                    Description: "et",
                    ID: "nesciunt",
                    Name: "dolores",
                    Value: "voluptas",
                },
            },
            CustomObjectID: "ipsam",
            Deleted: true,
            Description: "blanditiis",
            Done: false,
            DurationSeconds: 5182791202040361805,
            EndDate: "eligendi",
            EndDatetime: "consequatur",
            EventSubType: "quaerat",
            GroupEvent: false,
            GroupEventType: "ut",
            LeadID: "delectus",
            Location: "qui",
            LocationAddress: &shared.Address{
                City: "commodi",
                ContactName: "in",
                Country: "voluptas",
                County: "dolorem",
                Email: "placeat",
                Fax: "aut",
                ID: "aut",
                Latitude: "saepe",
                Line1: "quia",
                Line2: "cum",
                Line3: "non",
                Line4: "atque",
                Longitude: "iusto",
                Name: "quo",
                PhoneNumber: "tempora",
                PostalCode: "id",
                RowVersion: "deleniti",
                Salutation: "enim",
                State: "eum",
                StreetNumber: "nam",
                String: "placeat",
                Type: "home",
                Website: "eum",
            },
            Note: "qui",
            OpportunityID: "et",
            OwnerID: "velit",
            Private: true,
            ProductID: "in",
            Recurrent: false,
            ReminderDatetime: "quia",
            ReminderSet: false,
            ShowAs: "free",
            SolutionID: "quia",
            StartDatetime: "beatae",
            Title: "aperiam",
            Type: "deadline",
            UserID: "non",
            VideoConferenceID: "tenetur",
            VideoConferenceURL: "quia",
        },
    }
    
    res, err := s.ActivitiesAdd(ctx, req)
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
* `activitiesAdd` - Create activity
* `activitiesAll` - List activities
* `activitiesDelete` - Delete activity
* `activitiesOne` - Get activity
* `activitiesUpdate` - Update activity
* `companiesAdd` - Create company
* `companiesAll` - List companies
* `companiesDelete` - Delete company
* `companiesOne` - Get company
* `companiesUpdate` - Update company
* `contactsAdd` - Create contact
* `contactsAll` - List contacts
* `contactsDelete` - Delete contact
* `contactsOne` - Get contact
* `contactsUpdate` - Update contact
* `leadsAdd` - Create lead
* `leadsAll` - List leads
* `leadsDelete` - Delete lead
* `leadsOne` - Get lead
* `leadsUpdate` - Update lead
* `notesAdd` - Create note
* `notesAll` - List notes
* `notesDelete` - Delete note
* `notesOne` - Get note
* `notesUpdate` - Update note
* `opportunitiesAdd` - Create opportunity
* `opportunitiesAll` - List opportunities
* `opportunitiesDelete` - Delete opportunity
* `opportunitiesOne` - Get opportunity
* `opportunitiesUpdate` - Update opportunity
* `pipelinesAdd` - Create pipeline
* `pipelinesAll` - List pipelines
* `pipelinesDelete` - Delete pipeline
* `pipelinesOne` - Get pipeline
* `pipelinesUpdate` - Update pipeline
* `usersAdd` - Create user
* `usersAll` - List users
* `usersDelete` - Delete user
* `usersOne` - Get user
* `usersUpdate` - Update user

<!-- End SDK Available Operations -->