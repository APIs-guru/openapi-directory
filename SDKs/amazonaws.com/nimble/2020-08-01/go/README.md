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
    
    req := operations.AcceptEulasRequest{
        PathParams: operations.AcceptEulasPathParams{
            StudioID: "animi",
        },
        Headers: operations.AcceptEulasHeaders{
            XAmzAlgorithm: "rerum",
            XAmzClientToken: "sit",
            XAmzContentSha256: "et",
            XAmzCredential: "minima",
            XAmzDate: "eos",
            XAmzSecurityToken: "accusantium",
            XAmzSignature: "minima",
            XAmzSignedHeaders: "qui",
        },
        Request: operations.AcceptEulasRequestBody{
            EulaIds: []string{
                "est",
            },
        },
    }
    
    res, err := s.Sdk.AcceptEulas(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptEulasResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AcceptEulas` - Accept EULAs.
* `CreateLaunchProfile` - Create a launch profile.
* `CreateStreamingImage` - Creates a streaming image resource in a studio.
* `CreateStreamingSession` - <p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in state READY.</p>
* `CreateStreamingSessionStream` - <p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in state READY.</p>
* `CreateStudio` - <p>Create a new Studio.</p> <p>When creating a Studio, two IAM roles must be provided: the admin role and the user Role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p> <p>The user role must have the AmazonNimbleStudio-StudioUser managed policy attached for the portal to function properly.</p> <p>The Admin Role must have the AmazonNimbleStudio-StudioAdmin managed policy attached for the portal to function properly.</p> <p>You may optionally specify a KMS key in the StudioEncryptionConfiguration.</p> <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an KMS key. By default, this key is owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key when calling CreateStudio to encrypt this data using a key you own and manage.</p> <p>When providing an KMS key during studio creation, Nimble Studio creates KMS grants in your account to provide your studio user and admin roles access to these KMS keys.</p> <p>If you delete this grant, the studio will no longer be accessible to your portal users.</p> <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>
* `CreateStudioComponent` - Creates a studio component resource.
* `DeleteLaunchProfile` - Permanently delete a launch profile.
* `DeleteLaunchProfileMember` - Delete a user from launch profile membership.
* `DeleteStreamingImage` - Delete streaming image.
* `DeleteStreamingSession` - <p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a DELETED state.</p> <p>A streaming session will count against your streaming session quota until it is marked DELETED.</p>
* `DeleteStudio` - Delete a studio resource.
* `DeleteStudioComponent` - Deletes a studio component resource.
* `DeleteStudioMember` - Delete a user from studio membership.
* `GetEula` - Get Eula.
* `GetLaunchProfile` - Get a launch profile.
* `GetLaunchProfileDetails` - Launch profile details include the launch profile resource and summary information of resources that are used by, or available to, the launch profile. This includes the name and description of all studio components used by the launch profiles, and the name and description of streaming images that can be used with this launch profile.
* `GetLaunchProfileInitialization` - Get a launch profile initialization.
* `GetLaunchProfileMember` - Get a user persona in launch profile membership.
* `GetStreamingImage` - Get streaming image.
* `GetStreamingSession` - <p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>
* `GetStreamingSessionStream` - <p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking CreateStreamingSessionStream.</p> <p>After the StreamingSessionStream changes to the state READY, the url property will contain a stream to be used with the DCV streaming client.</p>
* `GetStudio` - Get a Studio resource.
* `GetStudioComponent` - Gets a studio component resource.
* `GetStudioMember` - Get a user's membership in a studio.
* `ListEulaAcceptances` - List Eula Acceptances.
* `ListEulas` - List Eulas.
* `ListLaunchProfileMembers` - Get all users in a given launch profile membership.
* `ListLaunchProfiles` - List all the launch profiles a studio.
* `ListStreamingImages` - <p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by Amazon Web Services, as well as streaming images that you have created in your studio.</p>
* `ListStreamingSessions` - Lists the streaming image resources in a studio.
* `ListStudioComponents` - Lists the StudioComponents in a studio.
* `ListStudioMembers` - Get all users in a given studio membership.
* `ListStudios` - List studios in your Amazon Web Services account in the requested Amazon Web Services Region.
* `ListTagsForResource` - <p>Gets the tags for a resource, given its Amazon Resource Names (ARN).</p> <p>This operation supports ARNs for all resource types in Nimble Studio that support tags, including studio, studio component, launch profile, streaming image, and streaming session. All resources that can be tagged will contain an ARN property, so you do not have to create this ARN yourself.</p>
* `PutLaunchProfileMembers` - Add/update users with given persona to launch profile membership.
* `PutStudioMembers` - Add/update users with given persona to studio membership.
* `StartStudioSsoConfigurationRepair` - <p>Repairs the SSO configuration for a given studio.</p> <p>If the studio has a valid Amazon Web Services SSO configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid Amazon Web Services SSO configuration currently associated with it, then a new Amazon Web Services SSO application is created for the studio and the studio is changed to the READY state.</p> <p>After the Amazon Web Services SSO application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>
* `TagResource` - Creates tags for a resource, given its ARN.
* `UntagResource` - Deletes the tags for a resource.
* `UpdateLaunchProfile` - Update a launch profile.
* `UpdateLaunchProfileMember` - Update a user persona in launch profile membership.
* `UpdateStreamingImage` - Update streaming image.
* `UpdateStudio` - <p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>
* `UpdateStudioComponent` - Updates a studio component resource.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
