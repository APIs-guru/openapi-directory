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
import { DeleteAbusesAbuseIdRequest, DeleteAbusesAbuseIdResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteAbusesAbuseIdRequest = {
  security: {
    oAuth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    abuseId: 7711782718440894490,
  },
};

sdk.sdk.deleteAbusesAbuseId(req).then((res: DeleteAbusesAbuseIdResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteAbusesAbuseId` - Delete an abuse
* `deleteAbusesAbuseIdMessagesAbuseMessageId` - Delete an abuse message
* `deleteServerBlocklistAccountsAccountName` - Unblock an account by its handle
* `deleteServerBlocklistServersHost` - Unblock a server by its domain
* `deleteServerFollowersNameWithHost` - Remove or reject a follower to your server
* `deleteServerFollowingHostOrHandle` - Unfollow an actor (PeerTube instance, channel or account)
* `deleteUsersMeAvatar` - Delete my avatar
* `deleteUsersMeSubscriptionsSubscriptionHandle` - Delete subscription of my user
* `deleteVideoChannelsChannelHandleAvatar` - Delete channel avatar
* `deleteVideoChannelsChannelHandleBanner` - Delete channel banner
* `deleteVideoPlaylistsPlaylistId` - Delete a video playlist
* `deleteVideosIdCommentsCommentId` - Delete a comment or a reply
* `getAbusesAbuseIdMessages` - List messages of an abuse
* `getAccountsNameRatings` - List ratings of an account
* `getAccountsNameVideoChannels` - List video channels of an account
* `getCustomPagesHomepageInstance` - Get instance custom homepage
* `getPluginsNpmNamePublicSettings` - Get a plugin's public settings
* `getPluginsNpmNameRegisteredSettings` - Get a plugin's registered settings
* `getServerBlocklistAccounts` - List account blocks
* `getServerBlocklistServers` - List server blocks
* `getServerFollowers` - List instances following the server
* `getServerFollowing` - List instances followed by the server
* `getUsersMeHistoryVideos` - List watched videos history
* `getUsersMeNotifications` - List my notifications
* `getUsersMeSubscriptions` - Get my user subscriptions
* `getUsersMeSubscriptionsExist` - Get if subscriptions exist for my user
* `getUsersMeSubscriptionsSubscriptionHandle` - Get subscription of my user
* `getUsersMeSubscriptionsVideos` - List videos of subscriptions of my user
* `getUsersMeVideoPlaylistsVideosExist` - Check video exists in my playlists
* `getUsersMeVideoQuotaUsed` - Get my user used quota
* `getUsersMeVideos` - Get videos of my user
* `getUsersMeVideosImports` - Get video imports of my user
* `getUsersMeVideosVideoIdRating` - Get rate of my user for a video
* `getVideoPlaylistsPlaylistId` - Get a video playlist
* `getVideosIdCommentThreads` - List threads of a video
* `getVideosIdCommentThreadsThreadId` - Get a thread
* `getVideosOwnership` - List video ownership changes
* `postAbuses` - Report an abuse
* `postAbusesAbuseIdMessages` - Add message to an abuse
* `postServerBlocklistAccounts` - Block an account
* `postServerBlocklistServers` - Block a server
* `postServerFollowersNameWithHostAccept` - Accept a pending follower to your server
* `postServerFollowersNameWithHostReject` - Reject a pending follower to your server
* `postServerFollowing` - Follow a list of actors (PeerTube instance, channel or account)
* `postUsersMeHistoryVideosRemove` - Clear video history
* `postUsersMeNotificationsRead` - Mark notifications as read by their id
* `postUsersMeNotificationsReadAll` - Mark all my notification as read
* `postUsersMeSubscriptions` - Add subscription to my user
* `postVideosIdCommentThreads` - Create a thread
* `postVideosIdCommentsCommentId` - Reply to a thread of a video
* `postVideosIdGiveOwnership` - Request ownership change
* `postVideosOwnershipIdAccept` - Accept ownership change request
* `postVideosOwnershipIdRefuse` - Refuse ownership change request
* `putAbusesAbuseId` - Update an abuse
* `putCustomPagesHomepageInstance` - Set instance custom homepage
* `putPluginsNpmNameSettings` - Set a plugin's settings
* `putServerRedundancyHost` - Update a server redundancy policy
* `putUsersMeNotificationSettings` - Update my notification settings
* `putVideosIdRate` - Like/dislike a video
* `addPlugin` - Install a plugin
* `addUser` - Create a user
* `addVideoBlock` - Block a video
* `addVideoChannel` - Create a video channel
* `addVideoPlaylistVideo` - Add a video in a playlist
* `addView` - Add a view to a video
* `delCustomConfig` - Delete instance runtime configuration
* `delMirroredVideo` - Delete a mirror done on a video
* `delUser` - Delete a user
* `delVideo` - Delete a video
* `delVideoBlock` - Unblock a video by its id
* `delVideoCaption` - Delete a video caption
* `delVideoChannel` - Delete a video channel
* `delVideoPlaylistVideo` - Delete an element from a playlist
* `getAbout` - Get instance "About" information
* `getAbuses` - List abuses
* `getAccount` - Get an account
* `getAccountVideos` - List videos of an account
* `getAccounts` - List accounts
* `getAvailablePlugins` - List available plugins
* `getCategories` - List available video categories
* `getConfig` - Get instance public configuration
* `getCustomConfig` - Get instance runtime configuration
* `getJobs` - List instance jobs
* `getLanguages` - List available video languages
* `getLicences` - List available video licences
* `getLiveId` - Get information about a live
* `getMirroredVideos` - List videos being mirrored
* `getMyAbuses` - List my abuses
* `getOAuthClient` - Login prerequisite
* `getOAuthToken` - Login
* `getPlaylistPrivacyPolicies` - List available playlist privacy policies
* `getPlaylists` - List video playlists
* `getPlugin` - Get a plugin
* `getPlugins` - List plugins
* `getPrivacyPolicies` - List available video privacy policies
* `getSyndicatedComments` - List comments on videos
* `getSyndicatedSubscriptionVideos` - List videos of subscriptions tied to a token
* `getSyndicatedVideos` - List videos
* `getUser` - Get a user
* `getUserInfo` - Get my user information
* `getUsers` - List users
* `getVideo` - Get a video
* `getVideoBlocks` - List video blocks
* `getVideoCaptions` - List captions of a video
* `getVideoChannel` - Get a video channel
* `getVideoChannelVideos` - List videos of a video channel
* `getVideoChannels` - List video channels
* `getVideoDesc` - Get complete video description
* `getVideoPlaylistVideos` - List videos of a playlist
* `getVideos` - List videos
* `putCustomConfig` - Set instance runtime configuration
* `putMirroredVideo` - Mirror a video
* `putUser` - Update a user
* `putUserInfo` - Update my user information
* `putVideoChannel` - Update a video channel
* `putVideoPlaylistVideo` - Update a playlist element
* `registerUser` - Register a user
* `reorderVideoPlaylist` - Reorder a playlist
* `resendEmailToVerifyUser` - Resend user verification link
* `revokeOAuthToken` - Logout
* `setProgress` - Set watching progress of a video
* `uninstallPlugin` - Uninstall a plugin
* `updateLiveId` - Update information about a live
* `updatePlugin` - Update a plugin
* `uploadResumable` - Send chunk for the resumable upload of a video
* `uploadResumableCancel` - Cancel the resumable upload of a video, deleting any data uploaded so far
* `uploadResumableInit` - Initialize the resumable upload of a video
* `verifyUser` - Verify a user

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
