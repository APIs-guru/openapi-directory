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
    
req = operations.DeleteAbusesAbuseIDRequest(
    security=operations.DeleteAbusesAbuseIDSecurity(
        o_auth2=shared.SchemeOAuth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.DeleteAbusesAbuseIDPathParams(
        abuse_id=7711782718440894490,
    ),
)
    
res = s.sdk.delete_abuses_abuse_id_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `delete_abuses_abuse_id_` - Delete an abuse
* `delete_abuses_abuse_id_messages_abuse_message_id_` - Delete an abuse message
* `delete_server_blocklist_accounts_account_name_` - Unblock an account by its handle
* `delete_server_blocklist_servers_host_` - Unblock a server by its domain
* `delete_server_followers_name_with_host_` - Remove or reject a follower to your server
* `delete_server_following_host_or_handle_` - Unfollow an actor (PeerTube instance, channel or account)
* `delete_users_me_avatar` - Delete my avatar
* `delete_users_me_subscriptions_subscription_handle_` - Delete subscription of my user
* `delete_video_channels_channel_handle_avatar` - Delete channel avatar
* `delete_video_channels_channel_handle_banner` - Delete channel banner
* `delete_video_playlists_playlist_id_` - Delete a video playlist
* `delete_videos_id_comments_comment_id_` - Delete a comment or a reply
* `get_abuses_abuse_id_messages` - List messages of an abuse
* `get_accounts_name_ratings` - List ratings of an account
* `get_accounts_name_video_channels` - List video channels of an account
* `get_custom_pages_homepage_instance` - Get instance custom homepage
* `get_plugins_npm_name_public_settings` - Get a plugin's public settings
* `get_plugins_npm_name_registered_settings` - Get a plugin's registered settings
* `get_server_blocklist_accounts` - List account blocks
* `get_server_blocklist_servers` - List server blocks
* `get_server_followers` - List instances following the server
* `get_server_following` - List instances followed by the server
* `get_users_me_history_videos` - List watched videos history
* `get_users_me_notifications` - List my notifications
* `get_users_me_subscriptions` - Get my user subscriptions
* `get_users_me_subscriptions_exist` - Get if subscriptions exist for my user
* `get_users_me_subscriptions_subscription_handle_` - Get subscription of my user
* `get_users_me_subscriptions_videos` - List videos of subscriptions of my user
* `get_users_me_video_playlists_videos_exist` - Check video exists in my playlists
* `get_users_me_video_quota_used` - Get my user used quota
* `get_users_me_videos` - Get videos of my user
* `get_users_me_videos_imports` - Get video imports of my user
* `get_users_me_videos_video_id_rating` - Get rate of my user for a video
* `get_video_playlists_playlist_id_` - Get a video playlist
* `get_videos_id_comment_threads` - List threads of a video
* `get_videos_id_comment_threads_thread_id_` - Get a thread
* `get_videos_ownership` - List video ownership changes
* `post_abuses` - Report an abuse
* `post_abuses_abuse_id_messages` - Add message to an abuse
* `post_server_blocklist_accounts` - Block an account
* `post_server_blocklist_servers` - Block a server
* `post_server_followers_name_with_host_accept` - Accept a pending follower to your server
* `post_server_followers_name_with_host_reject` - Reject a pending follower to your server
* `post_server_following` - Follow a list of actors (PeerTube instance, channel or account)
* `post_users_me_history_videos_remove` - Clear video history
* `post_users_me_notifications_read` - Mark notifications as read by their id
* `post_users_me_notifications_read_all` - Mark all my notification as read
* `post_users_me_subscriptions` - Add subscription to my user
* `post_videos_id_comment_threads` - Create a thread
* `post_videos_id_comments_comment_id_` - Reply to a thread of a video
* `post_videos_id_give_ownership` - Request ownership change
* `post_videos_ownership_id_accept` - Accept ownership change request
* `post_videos_ownership_id_refuse` - Refuse ownership change request
* `put_abuses_abuse_id_` - Update an abuse
* `put_custom_pages_homepage_instance` - Set instance custom homepage
* `put_plugins_npm_name_settings` - Set a plugin's settings
* `put_server_redundancy_host_` - Update a server redundancy policy
* `put_users_me_notification_settings` - Update my notification settings
* `put_videos_id_rate` - Like/dislike a video
* `add_plugin` - Install a plugin
* `add_user` - Create a user
* `add_video_block` - Block a video
* `add_video_channel` - Create a video channel
* `add_video_playlist_video` - Add a video in a playlist
* `add_view` - Add a view to a video
* `del_custom_config` - Delete instance runtime configuration
* `del_mirrored_video` - Delete a mirror done on a video
* `del_user` - Delete a user
* `del_video` - Delete a video
* `del_video_block` - Unblock a video by its id
* `del_video_caption` - Delete a video caption
* `del_video_channel` - Delete a video channel
* `del_video_playlist_video` - Delete an element from a playlist
* `get_about` - Get instance "About" information
* `get_abuses` - List abuses
* `get_account` - Get an account
* `get_account_videos` - List videos of an account
* `get_accounts` - List accounts
* `get_available_plugins` - List available plugins
* `get_categories` - List available video categories
* `get_config` - Get instance public configuration
* `get_custom_config` - Get instance runtime configuration
* `get_jobs` - List instance jobs
* `get_languages` - List available video languages
* `get_licences` - List available video licences
* `get_live_id` - Get information about a live
* `get_mirrored_videos` - List videos being mirrored
* `get_my_abuses` - List my abuses
* `get_o_auth_client` - Login prerequisite
* `get_o_auth_token` - Login
* `get_playlist_privacy_policies` - List available playlist privacy policies
* `get_playlists` - List video playlists
* `get_plugin` - Get a plugin
* `get_plugins` - List plugins
* `get_privacy_policies` - List available video privacy policies
* `get_syndicated_comments` - List comments on videos
* `get_syndicated_subscription_videos` - List videos of subscriptions tied to a token
* `get_syndicated_videos` - List videos
* `get_user` - Get a user
* `get_user_info` - Get my user information
* `get_users` - List users
* `get_video` - Get a video
* `get_video_blocks` - List video blocks
* `get_video_captions` - List captions of a video
* `get_video_channel` - Get a video channel
* `get_video_channel_videos` - List videos of a video channel
* `get_video_channels` - List video channels
* `get_video_desc` - Get complete video description
* `get_video_playlist_videos` - List videos of a playlist
* `get_videos` - List videos
* `put_custom_config` - Set instance runtime configuration
* `put_mirrored_video` - Mirror a video
* `put_user` - Update a user
* `put_user_info` - Update my user information
* `put_video_channel` - Update a video channel
* `put_video_playlist_video` - Update a playlist element
* `register_user` - Register a user
* `reorder_video_playlist` - Reorder a playlist
* `resend_email_to_verify_user` - Resend user verification link
* `revoke_o_auth_token` - Logout
* `set_progress` - Set watching progress of a video
* `uninstall_plugin` - Uninstall a plugin
* `update_live_id` - Update information about a live
* `update_plugin` - Update a plugin
* `upload_resumable` - Send chunk for the resumable upload of a video
* `upload_resumable_cancel` - Cancel the resumable upload of a video, deleting any data uploaded so far
* `upload_resumable_init` - Initialize the resumable upload of a video
* `verify_user` - Verify a user

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
