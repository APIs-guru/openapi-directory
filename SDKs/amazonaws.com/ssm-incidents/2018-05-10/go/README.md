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
    
    req := operations.CreateReplicationSetRequest{
        Headers: operations.CreateReplicationSetHeaders{
            XAmzAlgorithm: "assumenda",
            XAmzContentSha256: "incidunt",
            XAmzCredential: "perspiciatis",
            XAmzDate: "quia",
            XAmzSecurityToken: "unde",
            XAmzSignature: "ipsam",
            XAmzSignedHeaders: "ad",
        },
        Request: operations.CreateReplicationSetRequestBody{
            ClientToken: "sint",
            Regions: map[string]shared.RegionMapInputValue{
                "illum": shared.RegionMapInputValue{
                    SseKmsKeyID: "error",
                },
                "cupiditate": shared.RegionMapInputValue{
                    SseKmsKeyID: "sit",
                },
                "sapiente": shared.RegionMapInputValue{
                    SseKmsKeyID: "et",
                },
            },
        },
    }
    
    res, err := s.Sdk.CreateReplicationSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateReplicationSetOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateReplicationSet` - A replication set replicates and encrypts your data to the provided Regions with the provided KMS key. 
* `CreateResponsePlan` - Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.
* `CreateTimelineEvent` - Creates a custom timeline event on the incident details page of an incident record. Timeline events are automatically created by Incident Manager, marking key moment during an incident. You can create custom timeline events to mark important events that are automatically detected by Incident Manager.
* `DeleteIncidentRecord` - Delete an incident record from Incident Manager. 
* `DeleteReplicationSet` - Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.
* `DeleteResourcePolicy` - Deletes the resource policy that AWS Resource Access Manager uses to share your Incident Manager resource.
* `DeleteResponsePlan` - Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.
* `DeleteTimelineEvent` - Deletes a timeline event from an incident.
* `GetIncidentRecord` - Returns the details of the specified incident record.
* `GetReplicationSet` - Retrieve your Incident Manager replication set.
* `GetResourcePolicies` - Retrieves the resource policies attached to the specified response plan.
* `GetResponsePlan` - Retrieves the details of the specified response plan.
* `GetTimelineEvent` - Retrieves a timeline event based on its ID and incident record.
* `ListIncidentRecords` - Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update. 
* `ListRelatedItems` - List all related items for an incident record.
* `ListReplicationSets` - Lists details about the replication set configured in your account. 
* `ListResponsePlans` - Lists all response plans in your account.
* `ListTagsForResource` - Lists the tags that are attached to the specified response plan.
* `ListTimelineEvents` - Lists timeline events of the specified incident record.
* `PutResourcePolicy` - Adds a resource policy to the specified response plan.
* `StartIncident` - Used to start an incident from CloudWatch alarms, EventBridge events, or manually. 
* `TagResource` - Adds a tag to a response plan.
* `UntagResource` - Removes a tag from a resource.
* `UpdateDeletionProtection` - Update deletion protection to either allow or deny deletion of the final Region in a replication set.
* `UpdateIncidentRecord` - Update the details of an incident record. You can use this action to update an incident record from the defined chat channel. For more information about using actions in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.
* `UpdateRelatedItems` - Add or remove related items from the related items tab of an incident record.
* `UpdateReplicationSet` - Add or delete Regions from your replication set.
* `UpdateResponsePlan` - Updates the specified response plan.
* `UpdateTimelineEvent` - Updates a timeline event. You can update events of type <code>Custom Event</code>.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
