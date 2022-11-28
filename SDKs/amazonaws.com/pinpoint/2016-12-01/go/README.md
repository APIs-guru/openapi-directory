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
    
    req := operations.CreateAppRequest{
        Headers: operations.CreateAppHeaders{
            XAmzAlgorithm: "dolor",
            XAmzContentSha256: "quidem",
            XAmzCredential: "nulla",
            XAmzDate: "dolores",
            XAmzSecurityToken: "fuga",
            XAmzSignature: "et",
            XAmzSignedHeaders: "qui",
        },
        Request: operations.CreateAppRequestBody{
            CreateApplicationRequest: operations.CreateAppRequestBodyCreateApplicationRequest{
                Name: "voluptatum",
                Tags: map[string]string{
                    "distinctio": "dicta",
                    "tenetur": "suscipit",
                },
            },
        },
    }
    
    res, err := s.Sdk.CreateApp(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateApp` -  <p>Creates an application.</p>
* `CreateCampaign` - Creates a new campaign for an application or updates the settings of an existing campaign for an application.
* `CreateEmailTemplate` - Creates a message template for messages that are sent through the email channel.
* `CreateExportJob` - Creates an export job for an application.
* `CreateImportJob` - Creates an import job for an application.
* `CreateInAppTemplate` - Creates a new message template for messages using the in-app message channel.
* `CreateJourney` - Creates a journey for an application.
* `CreatePushTemplate` - Creates a message template for messages that are sent through a push notification channel.
* `CreateRecommenderConfiguration` - Creates an Amazon Pinpoint configuration for a recommender model.
* `CreateSegment` - Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
* `CreateSmsTemplate` - Creates a message template for messages that are sent through the SMS channel.
* `CreateVoiceTemplate` - Creates a message template for messages that are sent through the voice channel.
* `DeleteAdmChannel` - Disables the ADM channel for an application and deletes any existing settings for the channel.
* `DeleteApnsChannel` - Disables the APNs channel for an application and deletes any existing settings for the channel.
* `DeleteApnsSandboxChannel` - Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.
* `DeleteApnsVoipChannel` - Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.
* `DeleteApnsVoipSandboxChannel` - Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.
* `DeleteApp` - Deletes an application.
* `DeleteBaiduChannel` - Disables the Baidu channel for an application and deletes any existing settings for the channel.
* `DeleteCampaign` - Deletes a campaign from an application.
* `DeleteEmailChannel` - Disables the email channel for an application and deletes any existing settings for the channel.
* `DeleteEmailTemplate` - Deletes a message template for messages that were sent through the email channel.
* `DeleteEndpoint` - Deletes an endpoint from an application.
* `DeleteEventStream` - Deletes the event stream for an application.
* `DeleteGcmChannel` - Disables the GCM channel for an application and deletes any existing settings for the channel.
* `DeleteInAppTemplate` - Deletes a message template for messages sent using the in-app message channel.
* `DeleteJourney` - Deletes a journey from an application.
* `DeletePushTemplate` - Deletes a message template for messages that were sent through a push notification channel.
* `DeleteRecommenderConfiguration` - Deletes an Amazon Pinpoint configuration for a recommender model.
* `DeleteSegment` - Deletes a segment from an application.
* `DeleteSmsChannel` - Disables the SMS channel for an application and deletes any existing settings for the channel.
* `DeleteSmsTemplate` - Deletes a message template for messages that were sent through the SMS channel.
* `DeleteUserEndpoints` - Deletes all the endpoints that are associated with a specific user ID.
* `DeleteVoiceChannel` - Disables the voice channel for an application and deletes any existing settings for the channel.
* `DeleteVoiceTemplate` - Deletes a message template for messages that were sent through the voice channel.
* `GetAdmChannel` - Retrieves information about the status and settings of the ADM channel for an application.
* `GetApnsChannel` - Retrieves information about the status and settings of the APNs channel for an application.
* `GetApnsSandboxChannel` - Retrieves information about the status and settings of the APNs sandbox channel for an application.
* `GetApnsVoipChannel` - Retrieves information about the status and settings of the APNs VoIP channel for an application.
* `GetApnsVoipSandboxChannel` - Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.
* `GetApp` - Retrieves information about an application.
* `GetApplicationDateRangeKpi` - Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.
* `GetApplicationSettings` - Retrieves information about the settings for an application.
* `GetApps` - Retrieves information about all the applications that are associated with your Amazon Pinpoint account.
* `GetBaiduChannel` - Retrieves information about the status and settings of the Baidu channel for an application.
* `GetCampaign` - Retrieves information about the status, configuration, and other settings for a campaign.
* `GetCampaignActivities` - Retrieves information about all the activities for a campaign.
* `GetCampaignDateRangeKpi` - Retrieves (queries) pre-aggregated data for a standard metric that applies to a campaign.
* `GetCampaignVersion` - Retrieves information about the status, configuration, and other settings for a specific version of a campaign.
* `GetCampaignVersions` - Retrieves information about the status, configuration, and other settings for all versions of a campaign.
* `GetCampaigns` - Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application.
* `GetChannels` - Retrieves information about the history and status of each channel for an application.
* `GetEmailChannel` - Retrieves information about the status and settings of the email channel for an application.
* `GetEmailTemplate` - Retrieves the content and settings of a message template for messages that are sent through the email channel.
* `GetEndpoint` - Retrieves information about the settings and attributes of a specific endpoint for an application.
* `GetEventStream` - Retrieves information about the event stream settings for an application.
* `GetExportJob` - Retrieves information about the status and settings of a specific export job for an application.
* `GetExportJobs` - Retrieves information about the status and settings of all the export jobs for an application.
* `GetGcmChannel` - Retrieves information about the status and settings of the GCM channel for an application.
* `GetImportJob` - Retrieves information about the status and settings of a specific import job for an application.
* `GetImportJobs` - Retrieves information about the status and settings of all the import jobs for an application.
* `GetInAppMessages` - Retrieves the in-app messages targeted for the provided endpoint ID.
* `GetInAppTemplate` - Retrieves the content and settings of a message template for messages sent through the in-app channel.
* `GetJourney` - Retrieves information about the status, configuration, and other settings for a journey.
* `GetJourneyDateRangeKpi` - Retrieves (queries) pre-aggregated data for a standard engagement metric that applies to a journey.
* `GetJourneyExecutionActivityMetrics` - Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey activity.
* `GetJourneyExecutionMetrics` - Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey.
* `GetPushTemplate` - Retrieves the content and settings of a message template for messages that are sent through a push notification channel.
* `GetRecommenderConfiguration` - Retrieves information about an Amazon Pinpoint configuration for a recommender model.
* `GetRecommenderConfigurations` - Retrieves information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
* `GetSegment` - Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.
* `GetSegmentExportJobs` - Retrieves information about the status and settings of the export jobs for a segment.
* `GetSegmentImportJobs` - Retrieves information about the status and settings of the import jobs for a segment.
* `GetSegmentVersion` - Retrieves information about the configuration, dimension, and other settings for a specific version of a segment that's associated with an application.
* `GetSegmentVersions` - Retrieves information about the configuration, dimension, and other settings for all the versions of a specific segment that's associated with an application.
* `GetSegments` - Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.
* `GetSmsChannel` - Retrieves information about the status and settings of the SMS channel for an application.
* `GetSmsTemplate` - Retrieves the content and settings of a message template for messages that are sent through the SMS channel.
* `GetUserEndpoints` - Retrieves information about all the endpoints that are associated with a specific user ID.
* `GetVoiceChannel` - Retrieves information about the status and settings of the voice channel for an application.
* `GetVoiceTemplate` - Retrieves the content and settings of a message template for messages that are sent through the voice channel.
* `ListJourneys` - Retrieves information about the status, configuration, and other settings for all the journeys that are associated with an application.
* `ListTagsForResource` - Retrieves all the tags (keys and values) that are associated with an application, campaign, message template, or segment.
* `ListTemplateVersions` - Retrieves information about all the versions of a specific message template.
* `ListTemplates` - Retrieves information about all the message templates that are associated with your Amazon Pinpoint account.
* `PhoneNumberValidate` - Retrieves information about a phone number.
* `PutEventStream` - Creates a new event stream for an application or updates the settings of an existing event stream for an application.
* `PutEvents` - Creates a new event to record for endpoints, or creates or updates endpoint data that existing events are associated with.
* `RemoveAttributes` - Removes one or more attributes, of the same attribute type, from all the endpoints that are associated with an application.
* `SendMessages` - Creates and sends a direct message.
* `SendUsersMessages` - Creates and sends a message to a list of users.
* `TagResource` - Adds one or more tags (keys and values) to an application, campaign, message template, or segment.
* `UntagResource` - Removes one or more tags (keys and values) from an application, campaign, message template, or segment.
* `UpdateAdmChannel` - Enables the ADM channel for an application or updates the status and settings of the ADM channel for an application.
* `UpdateApnsChannel` - Enables the APNs channel for an application or updates the status and settings of the APNs channel for an application.
* `UpdateApnsSandboxChannel` - Enables the APNs sandbox channel for an application or updates the status and settings of the APNs sandbox channel for an application.
* `UpdateApnsVoipChannel` - Enables the APNs VoIP channel for an application or updates the status and settings of the APNs VoIP channel for an application.
* `UpdateApnsVoipSandboxChannel` - Enables the APNs VoIP sandbox channel for an application or updates the status and settings of the APNs VoIP sandbox channel for an application.
* `UpdateApplicationSettings` - Updates the settings for an application.
* `UpdateBaiduChannel` - Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.
* `UpdateCampaign` - Updates the configuration and other settings for a campaign.
* `UpdateEmailChannel` - Enables the email channel for an application or updates the status and settings of the email channel for an application.
* `UpdateEmailTemplate` - Updates an existing message template for messages that are sent through the email channel.
* `UpdateEndpoint` - Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes for an endpoint. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
* `UpdateEndpointsBatch` - Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes for a batch of endpoints. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
* `UpdateGcmChannel` - Enables the GCM channel for an application or updates the status and settings of the GCM channel for an application.
* `UpdateInAppTemplate` - Updates an existing message template for messages sent through the in-app message channel.
* `UpdateJourney` - Updates the configuration and other settings for a journey.
* `UpdateJourneyState` - Cancels (stops) an active journey.
* `UpdatePushTemplate` - Updates an existing message template for messages that are sent through a push notification channel.
* `UpdateRecommenderConfiguration` - Updates an Amazon Pinpoint configuration for a recommender model.
* `UpdateSegment` - Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
* `UpdateSmsChannel` - Enables the SMS channel for an application or updates the status and settings of the SMS channel for an application.
* `UpdateSmsTemplate` - Updates an existing message template for messages that are sent through the SMS channel.
* `UpdateTemplateActiveVersion` - Changes the status of a specific version of a message template to <i>active</i>.
* `UpdateVoiceChannel` - Enables the voice channel for an application or updates the status and settings of the voice channel for an application.
* `UpdateVoiceTemplate` - Updates an existing message template for messages that are sent through the voice channel.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
