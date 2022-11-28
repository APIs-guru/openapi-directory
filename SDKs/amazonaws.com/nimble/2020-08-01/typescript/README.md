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
import { AcceptEulasRequest, AcceptEulasResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AcceptEulasRequest = {
  pathParams: {
    studioId: "animi",
  },
  headers: {
    xAmzAlgorithm: "rerum",
    xAmzClientToken: "sit",
    xAmzContentSha256: "et",
    xAmzCredential: "minima",
    xAmzDate: "eos",
    xAmzSecurityToken: "accusantium",
    xAmzSignature: "minima",
    xAmzSignedHeaders: "qui",
  },
  request: {
    eulaIds: [
      "est",
    ],
  },
};

sdk.sdk.acceptEulas(req).then((res: AcceptEulasResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `acceptEulas` - Accept EULAs.
* `createLaunchProfile` - Create a launch profile.
* `createStreamingImage` - Creates a streaming image resource in a studio.
* `createStreamingSession` - <p>Creates a streaming session in a studio.</p> <p>After invoking this operation, you must poll GetStreamingSession until the streaming session is in state READY.</p>
* `createStreamingSessionStream` - <p>Creates a streaming session stream for a streaming session.</p> <p>After invoking this API, invoke GetStreamingSessionStream with the returned streamId to poll the resource until it is in state READY.</p>
* `createStudio` - <p>Create a new Studio.</p> <p>When creating a Studio, two IAM roles must be provided: the admin role and the user Role. These roles are assumed by your users when they log in to the Nimble Studio portal.</p> <p>The user role must have the AmazonNimbleStudio-StudioUser managed policy attached for the portal to function properly.</p> <p>The Admin Role must have the AmazonNimbleStudio-StudioAdmin managed policy attached for the portal to function properly.</p> <p>You may optionally specify a KMS key in the StudioEncryptionConfiguration.</p> <p>In Nimble Studio, resource names, descriptions, initialization scripts, and other data you provide are always encrypted at rest using an KMS key. By default, this key is owned by Amazon Web Services and managed on your behalf. You may provide your own KMS key when calling CreateStudio to encrypt this data using a key you own and manage.</p> <p>When providing an KMS key during studio creation, Nimble Studio creates KMS grants in your account to provide your studio user and admin roles access to these KMS keys.</p> <p>If you delete this grant, the studio will no longer be accessible to your portal users.</p> <p>If you delete the studio KMS key, your studio will no longer be accessible.</p>
* `createStudioComponent` - Creates a studio component resource.
* `deleteLaunchProfile` - Permanently delete a launch profile.
* `deleteLaunchProfileMember` - Delete a user from launch profile membership.
* `deleteStreamingImage` - Delete streaming image.
* `deleteStreamingSession` - <p>Deletes streaming session resource.</p> <p>After invoking this operation, use GetStreamingSession to poll the resource until it transitions to a DELETED state.</p> <p>A streaming session will count against your streaming session quota until it is marked DELETED.</p>
* `deleteStudio` - Delete a studio resource.
* `deleteStudioComponent` - Deletes a studio component resource.
* `deleteStudioMember` - Delete a user from studio membership.
* `getEula` - Get Eula.
* `getLaunchProfile` - Get a launch profile.
* `getLaunchProfileDetails` - Launch profile details include the launch profile resource and summary information of resources that are used by, or available to, the launch profile. This includes the name and description of all studio components used by the launch profiles, and the name and description of streaming images that can be used with this launch profile.
* `getLaunchProfileInitialization` - Get a launch profile initialization.
* `getLaunchProfileMember` - Get a user persona in launch profile membership.
* `getStreamingImage` - Get streaming image.
* `getStreamingSession` - <p>Gets StreamingSession resource.</p> <p>Invoke this operation to poll for a streaming session state while creating or deleting a session.</p>
* `getStreamingSessionStream` - <p>Gets a StreamingSessionStream for a streaming session.</p> <p>Invoke this operation to poll the resource after invoking CreateStreamingSessionStream.</p> <p>After the StreamingSessionStream changes to the state READY, the url property will contain a stream to be used with the DCV streaming client.</p>
* `getStudio` - Get a Studio resource.
* `getStudioComponent` - Gets a studio component resource.
* `getStudioMember` - Get a user's membership in a studio.
* `listEulaAcceptances` - List Eula Acceptances.
* `listEulas` - List Eulas.
* `listLaunchProfileMembers` - Get all users in a given launch profile membership.
* `listLaunchProfiles` - List all the launch profiles a studio.
* `listStreamingImages` - <p>List the streaming image resources available to this studio.</p> <p>This list will contain both images provided by Amazon Web Services, as well as streaming images that you have created in your studio.</p>
* `listStreamingSessions` - Lists the streaming image resources in a studio.
* `listStudioComponents` - Lists the StudioComponents in a studio.
* `listStudioMembers` - Get all users in a given studio membership.
* `listStudios` - List studios in your Amazon Web Services account in the requested Amazon Web Services Region.
* `listTagsForResource` - <p>Gets the tags for a resource, given its Amazon Resource Names (ARN).</p> <p>This operation supports ARNs for all resource types in Nimble Studio that support tags, including studio, studio component, launch profile, streaming image, and streaming session. All resources that can be tagged will contain an ARN property, so you do not have to create this ARN yourself.</p>
* `putLaunchProfileMembers` - Add/update users with given persona to launch profile membership.
* `putStudioMembers` - Add/update users with given persona to studio membership.
* `startStudioSsoConfigurationRepair` - <p>Repairs the SSO configuration for a given studio.</p> <p>If the studio has a valid Amazon Web Services SSO configuration currently associated with it, this operation will fail with a validation error.</p> <p>If the studio does not have a valid Amazon Web Services SSO configuration currently associated with it, then a new Amazon Web Services SSO application is created for the studio and the studio is changed to the READY state.</p> <p>After the Amazon Web Services SSO application is repaired, you must use the Amazon Nimble Studio console to add administrators and users to your studio.</p>
* `tagResource` - Creates tags for a resource, given its ARN.
* `untagResource` - Deletes the tags for a resource.
* `updateLaunchProfile` - Update a launch profile.
* `updateLaunchProfileMember` - Update a user persona in launch profile membership.
* `updateStreamingImage` - Update streaming image.
* `updateStudio` - <p>Update a Studio resource.</p> <p>Currently, this operation only supports updating the displayName of your studio.</p>
* `updateStudioComponent` - Updates a studio component resource.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
