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
    
req = operations.AcceptEulasRequest(
    path_params=operations.AcceptEulasPathParams(
        studio_id="animi",
    ),
    headers=operations.AcceptEulasHeaders(
        x_amz_algorithm="rerum",
        x_amz_client_token="sit",
        x_amz_content_sha256="et",
        x_amz_credential="minima",
        x_amz_date="eos",
        x_amz_security_token="accusantium",
        x_amz_signature="minima",
        x_amz_signed_headers="qui",
    ),
    request=operations.AcceptEulasRequestBody(
        eula_ids=[
            "est",
        ],
    ),
)
    
res = s.sdk.accept_eulas(req)

if res.accept_eulas_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `accept_eulas` - Accept EULAs.
* `create_launch_profile` - Create a launch profile.
* `create_streaming_image` - Creates a streaming image resource in a studio.
* `create_streaming_session` - <p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in state READY.</p>
* `create_streaming_session_stream` - <p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in state READY.</p>
* `create_studio` - <p>Create a new Studio.</p> <p>When creating a Studio, two IAM roles must be provided: the admin role and the user Role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p> <p>The user role must have the AmazonNimbleStudio-StudioUser managed policy attached for the portal to function properly.</p> <p>The Admin Role must have the AmazonNimbleStudio-StudioAdmin managed policy attached for the portal to function properly.</p> <p>You may optionally specify a KMS key in the StudioEncryptionConfiguration.</p> <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an KMS key. By default, this key is owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key when calling CreateStudio to encrypt this data using a key you own and manage.</p> <p>When providing an KMS key during studio creation, Nimble Studio creates KMS grants in your account to provide your studio user and admin roles access to these KMS keys.</p> <p>If you delete this grant, the studio will no longer be accessible to your portal users.</p> <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>
* `create_studio_component` - Creates a studio component resource.
* `delete_launch_profile` - Permanently delete a launch profile.
* `delete_launch_profile_member` - Delete a user from launch profile membership.
* `delete_streaming_image` - Delete streaming image.
* `delete_streaming_session` - <p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a DELETED state.</p> <p>A streaming session will count against your streaming session quota until it is marked DELETED.</p>
* `delete_studio` - Delete a studio resource.
* `delete_studio_component` - Deletes a studio component resource.
* `delete_studio_member` - Delete a user from studio membership.
* `get_eula` - Get Eula.
* `get_launch_profile` - Get a launch profile.
* `get_launch_profile_details` - Launch profile details include the launch profile resource and summary information of resources that are used by, or available to, the launch profile. This includes the name and description of all studio components used by the launch profiles, and the name and description of streaming images that can be used with this launch profile.
* `get_launch_profile_initialization` - Get a launch profile initialization.
* `get_launch_profile_member` - Get a user persona in launch profile membership.
* `get_streaming_image` - Get streaming image.
* `get_streaming_session` - <p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>
* `get_streaming_session_stream` - <p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking CreateStreamingSessionStream.</p> <p>After the StreamingSessionStream changes to the state READY, the url property will contain a stream to be used with the DCV streaming client.</p>
* `get_studio` - Get a Studio resource.
* `get_studio_component` - Gets a studio component resource.
* `get_studio_member` - Get a user's membership in a studio.
* `list_eula_acceptances` - List Eula Acceptances.
* `list_eulas` - List Eulas.
* `list_launch_profile_members` - Get all users in a given launch profile membership.
* `list_launch_profiles` - List all the launch profiles a studio.
* `list_streaming_images` - <p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by Amazon Web Services, as well as streaming images that you have created in your studio.</p>
* `list_streaming_sessions` - Lists the streaming image resources in a studio.
* `list_studio_components` - Lists the StudioComponents in a studio.
* `list_studio_members` - Get all users in a given studio membership.
* `list_studios` - List studios in your Amazon Web Services account in the requested Amazon Web Services Region.
* `list_tags_for_resource` - <p>Gets the tags for a resource, given its Amazon Resource Names (ARN).</p> <p>This operation supports ARNs for all resource types in Nimble Studio that support tags, including studio, studio component, launch profile, streaming image, and streaming session. All resources that can be tagged will contain an ARN property, so you do not have to create this ARN yourself.</p>
* `put_launch_profile_members` - Add/update users with given persona to launch profile membership.
* `put_studio_members` - Add/update users with given persona to studio membership.
* `start_studio_sso_configuration_repair` - <p>Repairs the SSO configuration for a given studio.</p> <p>If the studio has a valid Amazon Web Services SSO configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid Amazon Web Services SSO configuration currently associated with it, then a new Amazon Web Services SSO application is created for the studio and the studio is changed to the READY state.</p> <p>After the Amazon Web Services SSO application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>
* `tag_resource` - Creates tags for a resource, given its ARN.
* `untag_resource` - Deletes the tags for a resource.
* `update_launch_profile` - Update a launch profile.
* `update_launch_profile_member` - Update a user persona in launch profile membership.
* `update_streaming_image` - Update streaming image.
* `update_studio` - <p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>
* `update_studio_component` - Updates a studio component resource.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
