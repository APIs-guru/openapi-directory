# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.CreateAppRequest(
    headers=operations.CreateAppHeaders(
        x_amz_algorithm="dolor",
        x_amz_content_sha256="quidem",
        x_amz_credential="nulla",
        x_amz_date="dolores",
        x_amz_security_token="fuga",
        x_amz_signature="et",
        x_amz_signed_headers="qui",
    ),
    request=operations.CreateAppRequestBody(
        create_application_request=operations.CreateAppRequestBodyCreateApplicationRequest(
            name="voluptatum",
            tags={
                "distinctio": "dicta",
                "tenetur": "suscipit",
            },
        ),
    ),
)
    
res = s.sdk.create_app(req)

if res.create_app_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_app` -  <p>Creates an application.</p>
* `create_campaign` - Creates a new campaign for an application or updates the settings of an existing campaign for an application.
* `create_email_template` - Creates a message template for messages that are sent through the email channel.
* `create_export_job` - Creates an export job for an application.
* `create_import_job` - Creates an import job for an application.
* `create_in_app_template` - Creates a new message template for messages using the in-app message channel.
* `create_journey` - Creates a journey for an application.
* `create_push_template` - Creates a message template for messages that are sent through a push notification channel.
* `create_recommender_configuration` - Creates an Amazon Pinpoint configuration for a recommender model.
* `create_segment` - Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
* `create_sms_template` - Creates a message template for messages that are sent through the SMS channel.
* `create_voice_template` - Creates a message template for messages that are sent through the voice channel.
* `delete_adm_channel` - Disables the ADM channel for an application and deletes any existing settings for the channel.
* `delete_apns_channel` - Disables the APNs channel for an application and deletes any existing settings for the channel.
* `delete_apns_sandbox_channel` - Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.
* `delete_apns_voip_channel` - Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.
* `delete_apns_voip_sandbox_channel` - Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.
* `delete_app` - Deletes an application.
* `delete_baidu_channel` - Disables the Baidu channel for an application and deletes any existing settings for the channel.
* `delete_campaign` - Deletes a campaign from an application.
* `delete_email_channel` - Disables the email channel for an application and deletes any existing settings for the channel.
* `delete_email_template` - Deletes a message template for messages that were sent through the email channel.
* `delete_endpoint` - Deletes an endpoint from an application.
* `delete_event_stream` - Deletes the event stream for an application.
* `delete_gcm_channel` - Disables the GCM channel for an application and deletes any existing settings for the channel.
* `delete_in_app_template` - Deletes a message template for messages sent using the in-app message channel.
* `delete_journey` - Deletes a journey from an application.
* `delete_push_template` - Deletes a message template for messages that were sent through a push notification channel.
* `delete_recommender_configuration` - Deletes an Amazon Pinpoint configuration for a recommender model.
* `delete_segment` - Deletes a segment from an application.
* `delete_sms_channel` - Disables the SMS channel for an application and deletes any existing settings for the channel.
* `delete_sms_template` - Deletes a message template for messages that were sent through the SMS channel.
* `delete_user_endpoints` - Deletes all the endpoints that are associated with a specific user ID.
* `delete_voice_channel` - Disables the voice channel for an application and deletes any existing settings for the channel.
* `delete_voice_template` - Deletes a message template for messages that were sent through the voice channel.
* `get_adm_channel` - Retrieves information about the status and settings of the ADM channel for an application.
* `get_apns_channel` - Retrieves information about the status and settings of the APNs channel for an application.
* `get_apns_sandbox_channel` - Retrieves information about the status and settings of the APNs sandbox channel for an application.
* `get_apns_voip_channel` - Retrieves information about the status and settings of the APNs VoIP channel for an application.
* `get_apns_voip_sandbox_channel` - Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.
* `get_app` - Retrieves information about an application.
* `get_application_date_range_kpi` - Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.
* `get_application_settings` - Retrieves information about the settings for an application.
* `get_apps` - Retrieves information about all the applications that are associated with your Amazon Pinpoint account.
* `get_baidu_channel` - Retrieves information about the status and settings of the Baidu channel for an application.
* `get_campaign` - Retrieves information about the status, configuration, and other settings for a campaign.
* `get_campaign_activities` - Retrieves information about all the activities for a campaign.
* `get_campaign_date_range_kpi` - Retrieves (queries) pre-aggregated data for a standard metric that applies to a campaign.
* `get_campaign_version` - Retrieves information about the status, configuration, and other settings for a specific version of a campaign.
* `get_campaign_versions` - Retrieves information about the status, configuration, and other settings for all versions of a campaign.
* `get_campaigns` - Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application.
* `get_channels` - Retrieves information about the history and status of each channel for an application.
* `get_email_channel` - Retrieves information about the status and settings of the email channel for an application.
* `get_email_template` - Retrieves the content and settings of a message template for messages that are sent through the email channel.
* `get_endpoint` - Retrieves information about the settings and attributes of a specific endpoint for an application.
* `get_event_stream` - Retrieves information about the event stream settings for an application.
* `get_export_job` - Retrieves information about the status and settings of a specific export job for an application.
* `get_export_jobs` - Retrieves information about the status and settings of all the export jobs for an application.
* `get_gcm_channel` - Retrieves information about the status and settings of the GCM channel for an application.
* `get_import_job` - Retrieves information about the status and settings of a specific import job for an application.
* `get_import_jobs` - Retrieves information about the status and settings of all the import jobs for an application.
* `get_in_app_messages` - Retrieves the in-app messages targeted for the provided endpoint ID.
* `get_in_app_template` - Retrieves the content and settings of a message template for messages sent through the in-app channel.
* `get_journey` - Retrieves information about the status, configuration, and other settings for a journey.
* `get_journey_date_range_kpi` - Retrieves (queries) pre-aggregated data for a standard engagement metric that applies to a journey.
* `get_journey_execution_activity_metrics` - Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey activity.
* `get_journey_execution_metrics` - Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey.
* `get_push_template` - Retrieves the content and settings of a message template for messages that are sent through a push notification channel.
* `get_recommender_configuration` - Retrieves information about an Amazon Pinpoint configuration for a recommender model.
* `get_recommender_configurations` - Retrieves information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
* `get_segment` - Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.
* `get_segment_export_jobs` - Retrieves information about the status and settings of the export jobs for a segment.
* `get_segment_import_jobs` - Retrieves information about the status and settings of the import jobs for a segment.
* `get_segment_version` - Retrieves information about the configuration, dimension, and other settings for a specific version of a segment that's associated with an application.
* `get_segment_versions` - Retrieves information about the configuration, dimension, and other settings for all the versions of a specific segment that's associated with an application.
* `get_segments` - Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.
* `get_sms_channel` - Retrieves information about the status and settings of the SMS channel for an application.
* `get_sms_template` - Retrieves the content and settings of a message template for messages that are sent through the SMS channel.
* `get_user_endpoints` - Retrieves information about all the endpoints that are associated with a specific user ID.
* `get_voice_channel` - Retrieves information about the status and settings of the voice channel for an application.
* `get_voice_template` - Retrieves the content and settings of a message template for messages that are sent through the voice channel.
* `list_journeys` - Retrieves information about the status, configuration, and other settings for all the journeys that are associated with an application.
* `list_tags_for_resource` - Retrieves all the tags (keys and values) that are associated with an application, campaign, message template, or segment.
* `list_template_versions` - Retrieves information about all the versions of a specific message template.
* `list_templates` - Retrieves information about all the message templates that are associated with your Amazon Pinpoint account.
* `phone_number_validate` - Retrieves information about a phone number.
* `put_event_stream` - Creates a new event stream for an application or updates the settings of an existing event stream for an application.
* `put_events` - Creates a new event to record for endpoints, or creates or updates endpoint data that existing events are associated with.
* `remove_attributes` - Removes one or more attributes, of the same attribute type, from all the endpoints that are associated with an application.
* `send_messages` - Creates and sends a direct message.
* `send_users_messages` - Creates and sends a message to a list of users.
* `tag_resource` - Adds one or more tags (keys and values) to an application, campaign, message template, or segment.
* `untag_resource` - Removes one or more tags (keys and values) from an application, campaign, message template, or segment.
* `update_adm_channel` - Enables the ADM channel for an application or updates the status and settings of the ADM channel for an application.
* `update_apns_channel` - Enables the APNs channel for an application or updates the status and settings of the APNs channel for an application.
* `update_apns_sandbox_channel` - Enables the APNs sandbox channel for an application or updates the status and settings of the APNs sandbox channel for an application.
* `update_apns_voip_channel` - Enables the APNs VoIP channel for an application or updates the status and settings of the APNs VoIP channel for an application.
* `update_apns_voip_sandbox_channel` - Enables the APNs VoIP sandbox channel for an application or updates the status and settings of the APNs VoIP sandbox channel for an application.
* `update_application_settings` - Updates the settings for an application.
* `update_baidu_channel` - Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.
* `update_campaign` - Updates the configuration and other settings for a campaign.
* `update_email_channel` - Enables the email channel for an application or updates the status and settings of the email channel for an application.
* `update_email_template` - Updates an existing message template for messages that are sent through the email channel.
* `update_endpoint` - Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes for an endpoint. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
* `update_endpoints_batch` - Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes for a batch of endpoints. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
* `update_gcm_channel` - Enables the GCM channel for an application or updates the status and settings of the GCM channel for an application.
* `update_in_app_template` - Updates an existing message template for messages sent through the in-app message channel.
* `update_journey` - Updates the configuration and other settings for a journey.
* `update_journey_state` - Cancels (stops) an active journey.
* `update_push_template` - Updates an existing message template for messages that are sent through a push notification channel.
* `update_recommender_configuration` - Updates an Amazon Pinpoint configuration for a recommender model.
* `update_segment` - Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
* `update_sms_channel` - Enables the SMS channel for an application or updates the status and settings of the SMS channel for an application.
* `update_sms_template` - Updates an existing message template for messages that are sent through the SMS channel.
* `update_template_active_version` - Changes the status of a specific version of a message template to <i>active</i>.
* `update_voice_channel` - Enables the voice channel for an application or updates the status and settings of the voice channel for an application.
* `update_voice_template` - Updates an existing message template for messages that are sent through the voice channel.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
