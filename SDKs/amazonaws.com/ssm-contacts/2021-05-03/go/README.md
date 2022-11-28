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
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AcceptPageRequest{
        Headers: operations.AcceptPageHeaders{
            XAmzAlgorithm: "at",
            XAmzContentSha256: "repellat",
            XAmzCredential: "placeat",
            XAmzDate: "accusantium",
            XAmzSecurityToken: "sunt",
            XAmzSignature: "at",
            XAmzSignedHeaders: "et",
            XAmzTarget: "SSMContacts.AcceptPage",
        },
        Request: shared.AcceptPageRequest{
            AcceptCode: "consequatur",
            AcceptCodeValidation: "IGNORE",
            AcceptType: "READ",
            ContactChannelID: "quia",
            Note: "eaque",
            PageID: "et",
        },
    }
    
    res, err := s.Sdk.AcceptPage(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptPageResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AcceptPage` - Used to acknowledge an engagement to a contact channel during an incident.
* `ActivateContactChannel` - Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.
* `CreateContact` - Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident. 
* `CreateContactChannel` - A contact channel is the method that Incident Manager uses to engage your contact.
* `DeactivateContactChannel` - To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.
* `DeleteContact` - To remove a contact from Incident Manager, you can delete the contact. Deleting a contact removes them from all escalation plans and related response plans. Deleting an escalation plan removes it from all related response plans. You will have to recreate the contact and its contact channels before you can use it again.
* `DeleteContactChannel` - To no longer receive engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel removes it from the contact's engagement plan. If you delete the only contact channel for a contact, you won't be able to engage that contact during an incident.
* `DescribeEngagement` - Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.
* `DescribePage` - Lists details of the engagement to a contact channel.
* `GetContact` - Retrieves information about the specified contact or escalation plan.
* `GetContactChannel` - List details about a specific contact channel.
* `GetContactPolicy` - Retrieves the resource policies attached to the specified contact or escalation plan.
* `ListContactChannels` - Lists all contact channels for the specified contact.
* `ListContacts` - Lists all contacts and escalation plans in Incident Manager.
* `ListEngagements` - Lists all engagements that have happened in an incident.
* `ListPageReceipts` - Lists all of the engagements to contact channels that have been acknowledged. 
* `ListPagesByContact` - Lists the engagements to a contact's contact channels.
* `ListPagesByEngagement` - Lists the engagements to contact channels that occurred by engaging a contact.
* `ListTagsForResource` - Lists the tags of an escalation plan or contact.
* `PutContactPolicy` - Adds a resource to the specified contact or escalation plan.
* `SendActivationCode` - Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the <code>ActivateChannel</code> operation. Incident Manager can't engage a contact channel until it has been activated.
* `StartEngagement` - Starts an engagement to a contact or escalation plan. The engagement engages each contact specified in the incident.
* `StopEngagement` - Stops an engagement before it finishes the final stage of the escalation plan or engagement plan. Further contacts aren't engaged.
* `TagResource` - Tags a contact or escalation plan. You can tag only contacts and escalation plans in the first region of your replication set. 
* `UntagResource` - Removes tags from the specified resource. 
* `UpdateContact` - Updates the contact or escalation plan specified. 
* `UpdateContactChannel` - Updates a contact's contact channel.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
