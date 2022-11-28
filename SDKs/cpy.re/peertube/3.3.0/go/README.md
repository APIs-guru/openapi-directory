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
    s := sdk.New()
    
    req := operations.DeleteAbusesAbuseIDRequest{
        Security: operations.DeleteAbusesAbuseIDSecurity{
            OAuth2: shared.SchemeOAuth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.DeleteAbusesAbuseIDPathParams{
            AbuseID: 7711782718440894490,
        },
    }
    
    res, err := s.Sdk.DeleteAbusesAbuseID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `DeleteAbusesAbuseID` - Delete an abuse
* `DeleteAbusesAbuseIDMessagesAbuseMessageID` - Delete an abuse message
* `DeleteServerBlocklistAccountsAccountName` - Unblock an account by its handle
* `DeleteServerBlocklistServersHost` - Unblock a server by its domain
* `DeleteServerFollowersNameWithHost` - Remove or reject a follower to your server
* `DeleteServerFollowingHostOrHandle` - Unfollow an actor (PeerTube instance, channel or account)
* `DeleteUsersMeAvatar` - Delete my avatar
* `DeleteUsersMeSubscriptionsSubscriptionHandle` - Delete subscription of my user
* `DeleteVideoChannelsChannelHandleAvatar` - Delete channel avatar
* `DeleteVideoChannelsChannelHandleBanner` - Delete channel banner
* `DeleteVideoPlaylistsPlaylistID` - Delete a video playlist
* `DeleteVideosIDCommentsCommentID` - Delete a comment or a reply
* `GetAbusesAbuseIDMessages` - List messages of an abuse
* `GetAccountsNameRatings` - List ratings of an account
* `GetAccountsNameVideoChannels` - List video channels of an account
* `GetCustomPagesHomepageInstance` - Get instance custom homepage
* `GetPluginsNpmNamePublicSettings` - Get a plugin's public settings
* `GetPluginsNpmNameRegisteredSettings` - Get a plugin's registered settings
* `GetServerBlocklistAccounts` - List account blocks
* `GetServerBlocklistServers` - List server blocks
* `GetServerFollowers` - List instances following the server
* `GetServerFollowing` - List instances followed by the server
* `GetUsersMeHistoryVideos` - List watched videos history
* `GetUsersMeNotifications` - List my notifications
* `GetUsersMeSubscriptions` - Get my user subscriptions
* `GetUsersMeSubscriptionsExist` - Get if subscriptions exist for my user
* `GetUsersMeSubscriptionsSubscriptionHandle` - Get subscription of my user
* `GetUsersMeSubscriptionsVideos` - List videos of subscriptions of my user
* `GetUsersMeVideoPlaylistsVideosExist` - Check video exists in my playlists
* `GetUsersMeVideoQuotaUsed` - Get my user used quota
* `GetUsersMeVideos` - Get videos of my user
* `GetUsersMeVideosImports` - Get video imports of my user
* `GetUsersMeVideosVideoIDRating` - Get rate of my user for a video
* `GetVideoPlaylistsPlaylistID` - Get a video playlist
* `GetVideosIDCommentThreads` - List threads of a video
* `GetVideosIDCommentThreadsThreadID` - Get a thread
* `GetVideosOwnership` - List video ownership changes
* `PostAbuses` - Report an abuse
* `PostAbusesAbuseIDMessages` - Add message to an abuse
* `PostServerBlocklistAccounts` - Block an account
* `PostServerBlocklistServers` - Block a server
* `PostServerFollowersNameWithHostAccept` - Accept a pending follower to your server
* `PostServerFollowersNameWithHostReject` - Reject a pending follower to your server
* `PostServerFollowing` - Follow a list of actors (PeerTube instance, channel or account)
* `PostUsersMeHistoryVideosRemove` - Clear video history
* `PostUsersMeNotificationsRead` - Mark notifications as read by their id
* `PostUsersMeNotificationsReadAll` - Mark all my notification as read
* `PostUsersMeSubscriptions` - Add subscription to my user
* `PostVideosIDCommentThreads` - Create a thread
* `PostVideosIDCommentsCommentID` - Reply to a thread of a video
* `PostVideosIDGiveOwnership` - Request ownership change
* `PostVideosOwnershipIDAccept` - Accept ownership change request
* `PostVideosOwnershipIDRefuse` - Refuse ownership change request
* `PutAbusesAbuseID` - Update an abuse
* `PutCustomPagesHomepageInstance` - Set instance custom homepage
* `PutPluginsNpmNameSettings` - Set a plugin's settings
* `PutServerRedundancyHost` - Update a server redundancy policy
* `PutUsersMeNotificationSettings` - Update my notification settings
* `PutVideosIDRate` - Like/dislike a video
* `AddPlugin` - Install a plugin
* `AddUser` - Create a user
* `AddVideoBlock` - Block a video
* `AddVideoChannel` - Create a video channel
* `AddVideoPlaylistVideo` - Add a video in a playlist
* `AddView` - Add a view to a video
* `DelCustomConfig` - Delete instance runtime configuration
* `DelMirroredVideo` - Delete a mirror done on a video
* `DelUser` - Delete a user
* `DelVideo` - Delete a video
* `DelVideoBlock` - Unblock a video by its id
* `DelVideoCaption` - Delete a video caption
* `DelVideoChannel` - Delete a video channel
* `DelVideoPlaylistVideo` - Delete an element from a playlist
* `GetAbout` - Get instance "About" information
* `GetAbuses` - List abuses
* `GetAccount` - Get an account
* `GetAccountVideos` - List videos of an account
* `GetAccounts` - List accounts
* `GetAvailablePlugins` - List available plugins
* `GetCategories` - List available video categories
* `GetConfig` - Get instance public configuration
* `GetCustomConfig` - Get instance runtime configuration
* `GetJobs` - List instance jobs
* `GetLanguages` - List available video languages
* `GetLicences` - List available video licences
* `GetLiveID` - Get information about a live
* `GetMirroredVideos` - List videos being mirrored
* `GetMyAbuses` - List my abuses
* `GetOAuthClient` - Login prerequisite
* `GetOAuthToken` - Login
* `GetPlaylistPrivacyPolicies` - List available playlist privacy policies
* `GetPlaylists` - List video playlists
* `GetPlugin` - Get a plugin
* `GetPlugins` - List plugins
* `GetPrivacyPolicies` - List available video privacy policies
* `GetSyndicatedComments` - List comments on videos
* `GetSyndicatedSubscriptionVideos` - List videos of subscriptions tied to a token
* `GetSyndicatedVideos` - List videos
* `GetUser` - Get a user
* `GetUserInfo` - Get my user information
* `GetUsers` - List users
* `GetVideo` - Get a video
* `GetVideoBlocks` - List video blocks
* `GetVideoCaptions` - List captions of a video
* `GetVideoChannel` - Get a video channel
* `GetVideoChannelVideos` - List videos of a video channel
* `GetVideoChannels` - List video channels
* `GetVideoDesc` - Get complete video description
* `GetVideoPlaylistVideos` - List videos of a playlist
* `GetVideos` - List videos
* `PutCustomConfig` - Set instance runtime configuration
* `PutMirroredVideo` - Mirror a video
* `PutUser` - Update a user
* `PutUserInfo` - Update my user information
* `PutVideoChannel` - Update a video channel
* `PutVideoPlaylistVideo` - Update a playlist element
* `RegisterUser` - Register a user
* `ReorderVideoPlaylist` - Reorder a playlist
* `ResendEmailToVerifyUser` - Resend user verification link
* `RevokeOAuthToken` - Logout
* `SetProgress` - Set watching progress of a video
* `UninstallPlugin` - Uninstall a plugin
* `UpdateLiveID` - Update information about a live
* `UpdatePlugin` - Update a plugin
* `UploadResumable` - Send chunk for the resumable upload of a video
* `UploadResumableCancel` - Cancel the resumable upload of a video, deleting any data uploaded so far
* `UploadResumableInit` - Initialize the resumable upload of a video
* `VerifyUser` - Verify a user

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
