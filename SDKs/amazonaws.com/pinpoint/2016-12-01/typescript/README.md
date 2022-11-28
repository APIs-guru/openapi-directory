# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { CreateAppRequest, CreateAppResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CreateAppRequest = {
  headers: {
    xAmzAlgorithm: "dolor",
    xAmzContentSha256: "quidem",
    xAmzCredential: "nulla",
    xAmzDate: "dolores",
    xAmzSecurityToken: "fuga",
    xAmzSignature: "et",
    xAmzSignedHeaders: "qui",
  },
  request: {
    createApplicationRequest: {
      name: "voluptatum",
      tags: {
        "distinctio": "dicta",
        "tenetur": "suscipit",
      },
    },
  },
};

sdk.sdk.createApp(req).then((res: CreateAppResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createApp` -  <p>Creates an application.</p>
* `createCampaign` - Creates a new campaign for an application or updates the settings of an existing campaign for an application.
* `createEmailTemplate` - Creates a message template for messages that are sent through the email channel.
* `createExportJob` - Creates an export job for an application.
* `createImportJob` - Creates an import job for an application.
* `createInAppTemplate` - Creates a new message template for messages using the in-app message channel.
* `createJourney` - Creates a journey for an application.
* `createPushTemplate` - Creates a message template for messages that are sent through a push notification channel.
* `createRecommenderConfiguration` - Creates an Amazon Pinpoint configuration for a recommender model.
* `createSegment` - Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
* `createSmsTemplate` - Creates a message template for messages that are sent through the SMS channel.
* `createVoiceTemplate` - Creates a message template for messages that are sent through the voice channel.
* `deleteAdmChannel` - Disables the ADM channel for an application and deletes any existing settings for the channel.
* `deleteApnsChannel` - Disables the APNs channel for an application and deletes any existing settings for the channel.
* `deleteApnsSandboxChannel` - Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.
* `deleteApnsVoipChannel` - Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.
* `deleteApnsVoipSandboxChannel` - Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.
* `deleteApp` - Deletes an application.
* `deleteBaiduChannel` - Disables the Baidu channel for an application and deletes any existing settings for the channel.
* `deleteCampaign` - Deletes a campaign from an application.
* `deleteEmailChannel` - Disables the email channel for an application and deletes any existing settings for the channel.
* `deleteEmailTemplate` - Deletes a message template for messages that were sent through the email channel.
* `deleteEndpoint` - Deletes an endpoint from an application.
* `deleteEventStream` - Deletes the event stream for an application.
* `deleteGcmChannel` - Disables the GCM channel for an application and deletes any existing settings for the channel.
* `deleteInAppTemplate` - Deletes a message template for messages sent using the in-app message channel.
* `deleteJourney` - Deletes a journey from an application.
* `deletePushTemplate` - Deletes a message template for messages that were sent through a push notification channel.
* `deleteRecommenderConfiguration` - Deletes an Amazon Pinpoint configuration for a recommender model.
* `deleteSegment` - Deletes a segment from an application.
* `deleteSmsChannel` - Disables the SMS channel for an application and deletes any existing settings for the channel.
* `deleteSmsTemplate` - Deletes a message template for messages that were sent through the SMS channel.
* `deleteUserEndpoints` - Deletes all the endpoints that are associated with a specific user ID.
* `deleteVoiceChannel` - Disables the voice channel for an application and deletes any existing settings for the channel.
* `deleteVoiceTemplate` - Deletes a message template for messages that were sent through the voice channel.
* `getAdmChannel` - Retrieves information about the status and settings of the ADM channel for an application.
* `getApnsChannel` - Retrieves information about the status and settings of the APNs channel for an application.
* `getApnsSandboxChannel` - Retrieves information about the status and settings of the APNs sandbox channel for an application.
* `getApnsVoipChannel` - Retrieves information about the status and settings of the APNs VoIP channel for an application.
* `getApnsVoipSandboxChannel` - Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.
* `getApp` - Retrieves information about an application.
* `getApplicationDateRangeKpi` - Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.
* `getApplicationSettings` - Retrieves information about the settings for an application.
* `getApps` - Retrieves information about all the applications that are associated with your Amazon Pinpoint account.
* `getBaiduChannel` - Retrieves information about the status and settings of the Baidu channel for an application.
* `getCampaign` - Retrieves information about the status, configuration, and other settings for a campaign.
* `getCampaignActivities` - Retrieves information about all the activities for a campaign.
* `getCampaignDateRangeKpi` - Retrieves (queries) pre-aggregated data for a standard metric that applies to a campaign.
* `getCampaignVersion` - Retrieves information about the status, configuration, and other settings for a specific version of a campaign.
* `getCampaignVersions` - Retrieves information about the status, configuration, and other settings for all versions of a campaign.
* `getCampaigns` - Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application.
* `getChannels` - Retrieves information about the history and status of each channel for an application.
* `getEmailChannel` - Retrieves information about the status and settings of the email channel for an application.
* `getEmailTemplate` - Retrieves the content and settings of a message template for messages that are sent through the email channel.
* `getEndpoint` - Retrieves information about the settings and attributes of a specific endpoint for an application.
* `getEventStream` - Retrieves information about the event stream settings for an application.
* `getExportJob` - Retrieves information about the status and settings of a specific export job for an application.
* `getExportJobs` - Retrieves information about the status and settings of all the export jobs for an application.
* `getGcmChannel` - Retrieves information about the status and settings of the GCM channel for an application.
* `getImportJob` - Retrieves information about the status and settings of a specific import job for an application.
* `getImportJobs` - Retrieves information about the status and settings of all the import jobs for an application.
* `getInAppMessages` - Retrieves the in-app messages targeted for the provided endpoint ID.
* `getInAppTemplate` - Retrieves the content and settings of a message template for messages sent through the in-app channel.
* `getJourney` - Retrieves information about the status, configuration, and other settings for a journey.
* `getJourneyDateRangeKpi` - Retrieves (queries) pre-aggregated data for a standard engagement metric that applies to a journey.
* `getJourneyExecutionActivityMetrics` - Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey activity.
* `getJourneyExecutionMetrics` - Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey.
* `getPushTemplate` - Retrieves the content and settings of a message template for messages that are sent through a push notification channel.
* `getRecommenderConfiguration` - Retrieves information about an Amazon Pinpoint configuration for a recommender model.
* `getRecommenderConfigurations` - Retrieves information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
* `getSegment` - Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.
* `getSegmentExportJobs` - Retrieves information about the status and settings of the export jobs for a segment.
* `getSegmentImportJobs` - Retrieves information about the status and settings of the import jobs for a segment.
* `getSegmentVersion` - Retrieves information about the configuration, dimension, and other settings for a specific version of a segment that's associated with an application.
* `getSegmentVersions` - Retrieves information about the configuration, dimension, and other settings for all the versions of a specific segment that's associated with an application.
* `getSegments` - Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.
* `getSmsChannel` - Retrieves information about the status and settings of the SMS channel for an application.
* `getSmsTemplate` - Retrieves the content and settings of a message template for messages that are sent through the SMS channel.
* `getUserEndpoints` - Retrieves information about all the endpoints that are associated with a specific user ID.
* `getVoiceChannel` - Retrieves information about the status and settings of the voice channel for an application.
* `getVoiceTemplate` - Retrieves the content and settings of a message template for messages that are sent through the voice channel.
* `listJourneys` - Retrieves information about the status, configuration, and other settings for all the journeys that are associated with an application.
* `listTagsForResource` - Retrieves all the tags (keys and values) that are associated with an application, campaign, message template, or segment.
* `listTemplateVersions` - Retrieves information about all the versions of a specific message template.
* `listTemplates` - Retrieves information about all the message templates that are associated with your Amazon Pinpoint account.
* `phoneNumberValidate` - Retrieves information about a phone number.
* `putEventStream` - Creates a new event stream for an application or updates the settings of an existing event stream for an application.
* `putEvents` - Creates a new event to record for endpoints, or creates or updates endpoint data that existing events are associated with.
* `removeAttributes` - Removes one or more attributes, of the same attribute type, from all the endpoints that are associated with an application.
* `sendMessages` - Creates and sends a direct message.
* `sendUsersMessages` - Creates and sends a message to a list of users.
* `tagResource` - Adds one or more tags (keys and values) to an application, campaign, message template, or segment.
* `untagResource` - Removes one or more tags (keys and values) from an application, campaign, message template, or segment.
* `updateAdmChannel` - Enables the ADM channel for an application or updates the status and settings of the ADM channel for an application.
* `updateApnsChannel` - Enables the APNs channel for an application or updates the status and settings of the APNs channel for an application.
* `updateApnsSandboxChannel` - Enables the APNs sandbox channel for an application or updates the status and settings of the APNs sandbox channel for an application.
* `updateApnsVoipChannel` - Enables the APNs VoIP channel for an application or updates the status and settings of the APNs VoIP channel for an application.
* `updateApnsVoipSandboxChannel` - Enables the APNs VoIP sandbox channel for an application or updates the status and settings of the APNs VoIP sandbox channel for an application.
* `updateApplicationSettings` - Updates the settings for an application.
* `updateBaiduChannel` - Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.
* `updateCampaign` - Updates the configuration and other settings for a campaign.
* `updateEmailChannel` - Enables the email channel for an application or updates the status and settings of the email channel for an application.
* `updateEmailTemplate` - Updates an existing message template for messages that are sent through the email channel.
* `updateEndpoint` - Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes for an endpoint. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
* `updateEndpointsBatch` - Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes for a batch of endpoints. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
* `updateGcmChannel` - Enables the GCM channel for an application or updates the status and settings of the GCM channel for an application.
* `updateInAppTemplate` - Updates an existing message template for messages sent through the in-app message channel.
* `updateJourney` - Updates the configuration and other settings for a journey.
* `updateJourneyState` - Cancels (stops) an active journey.
* `updatePushTemplate` - Updates an existing message template for messages that are sent through a push notification channel.
* `updateRecommenderConfiguration` - Updates an Amazon Pinpoint configuration for a recommender model.
* `updateSegment` - Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
* `updateSmsChannel` - Enables the SMS channel for an application or updates the status and settings of the SMS channel for an application.
* `updateSmsTemplate` - Updates an existing message template for messages that are sent through the SMS channel.
* `updateTemplateActiveVersion` - Changes the status of a specific version of a message template to <i>active</i>.
* `updateVoiceChannel` - Enables the voice channel for an application or updates the status and settings of the voice channel for an application.
* `updateVoiceTemplate` - Updates an existing message template for messages that are sent through the voice channel.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
