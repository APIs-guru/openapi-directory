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
    
res = s.sdk.dot_get_available_locales()

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `dot_get_available_locales` - List of available localization cultures
* `dot_get_common_settings` - Get the common settings used by the Bungie.Net environment.
* `dot_get_global_alerts` - Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.
* `dot_get_user_system_overrides` - Get the user-specific system overrides that should be respected alongside common systems.
* `app_get_application_api_usage` - Get API usage by application for time frame specified. You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request. You must be authenticated with at least the ReadUserData permission to access this endpoint.
* `app_get_bungie_applications` - Get list of applications created by Bungie.
* `community_content_get_community_content` - Returns community content.
* `content_get_content_by_id` - Returns a content item referenced by id
* `content_get_content_by_tag_and_type` - Returns the newest item that matches a given tag and Content Type.
* `content_get_content_type` - Gets an object describing a particular variant of content.
* `content_search_content_by_tag_and_type` - Searches for Content Items that match the given Tag and Content Type.
* `content_search_content_with_text` - Gets content based on querystring information passed in. Provides basic search and text search capabilities.
* `content_search_help_articles` - Search for Help Articles.
* `destiny2_awa_get_action_token` - Returns the action token if user approves the request.
* `destiny2_awa_initialize_request` - Initialize a request to perform an advanced write action.
* `destiny2_awa_provide_authorization_result` - Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.
* `destiny2_equip_item` - Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
* `destiny2_equip_items` - Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.
* `destiny2_get_activity_history` - Gets activity history stats for indicated character.
* `destiny2_get_character` - Returns character information for the supplied character.
* `destiny2_get_clan_aggregate_stats` - Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* `destiny2_get_clan_leaderboards` - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* `destiny2_get_clan_weekly_reward_state` - Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
* `destiny2_get_collectible_node_details` - Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.
* `destiny2_get_destiny_aggregate_activity_stats` - Gets all activities the character has participated in together with aggregate statistics for those activities.
* `destiny2_get_destiny_entity_definition` - Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.
* `destiny2_get_destiny_manifest` - Returns the current version of the manifest as a json object.
* `destiny2_get_historical_stats` - Gets historical stats for indicated character.
* `destiny2_get_historical_stats_definition` - Gets historical stats definitions.
* `destiny2_get_historical_stats_for_account` - Gets aggregate historical stats organized around each character for a given account.
* `destiny2_get_item` - Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.
* `destiny2_get_leaderboards` - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
* `destiny2_get_leaderboards_for_character` - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* `destiny2_get_linked_profiles` - Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information. The passed-in Membership Type/Membership ID may be a Bungie.Net membership or a Destiny membership. It only returns the minimal amount of data to begin making more substantive requests, but will hopefully serve as a useful alternative to UserServices for people who just care about Destiny data. Note that it will only return linked accounts whose linkages you are allowed to view.
* `destiny2_get_post_game_carnage_report` - Gets the available post game carnage report for the activity ID.
* `destiny2_get_profile` - Returns Destiny Profile information for the supplied membership.
* `destiny2_get_public_milestone_content` - Gets custom localized content for the milestone of the given hash, if it exists.
* `destiny2_get_public_milestones` - Gets public information about currently available Milestones.
* `destiny2_get_public_vendors` - Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'
* `destiny2_get_unique_weapon_history` - Gets details about unique weapon usage, including all exotic weapons.
* `destiny2_get_vendor` - Get the details of a specific Vendor.
* `destiny2_get_vendors` - Get currently available vendors from the list of vendors that can possibly have rotating inventory. Note that this does not include things like preview vendors and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use their definitions as-is for those.
* `destiny2_insert_socket_plug` - Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.
* `destiny2_pull_from_postmaster` - Extract an item from the Postmaster, with whatever implications that may entail. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item.
* `destiny2_report_offensive_post_game_carnage_report_player` - Report a player that you met in an activity that was engaging in ToS-violating activities. Both you and the offending player must have played in the activityId passed in. Please use this judiciously and only when you have strong suspicions of violation, pretty please.
* `destiny2_search_destiny_entities` - Gets a page list of Destiny items.
* `destiny2_search_destiny_player` - Returns a list of Destiny memberships given a full Gamertag or PSN ID. Unless you pass returnOriginalProfile=true, this will return membership information for the users' Primary Cross Save Profile if they are engaged in cross save rather than any original Destiny profile that is now being overridden.
* `destiny2_set_item_lock_state` - Set the Lock State for an instanced item. You must have a valid Destiny Account.
* `destiny2_set_quest_tracked_state` - Set the Tracking State for an instanced item, if that item is a Quest or Bounty. You must have a valid Destiny Account. Yeah, it's an item.
* `destiny2_transfer_item` - Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif
* `fireteam_get_active_private_clan_fireteam_count` - Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.
* `fireteam_get_available_clan_fireteams` - Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.
* `fireteam_get_clan_fireteam` - Gets a specific fireteam.
* `fireteam_get_my_clan_fireteams` - Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.
* `fireteam_search_public_available_clan_fireteams` - Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.
* `forum_get_core_topics_paged` - Gets a listing of all topics marked as part of the core group.
* `forum_get_forum_tag_suggestions` - Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
* `forum_get_poll` - Gets the specified forum poll.
* `forum_get_post_and_parent` - Returns the post specified and its immediate parent.
* `forum_get_post_and_parent_awaiting_approval` - Returns the post specified and its immediate parent of posts that are awaiting approval.
* `forum_get_posts_threaded_paged` - Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.
* `forum_get_posts_threaded_paged_from_child` - Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.
* `forum_get_recruitment_thread_summaries` - Allows the caller to get a list of to 25 recruitment thread summary information objects.
* `forum_get_topic_for_content` - Gets the post Id for the given content item's comments, if it exists.
* `forum_get_topics_paged` - Get topics from any forum.
* `group_v2_abdicate_foundership` - An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.
* `group_v2_add_optional_conversation` - Add a new optional conversation/chat channel. Requires admin permissions to the group.
* `group_v2_approve_all_pending` - Approve all of the pending users for the given group.
* `group_v2_approve_pending` - Approve the given membershipId to join the group/clan as long as they have applied.
* `group_v2_approve_pending_for_list` - Approve all of the pending users for the given group.
* `group_v2_ban_member` - Bans the requested member from the requested group for the specified period of time.
* `group_v2_deny_all_pending` - Deny all of the pending users for the given group.
* `group_v2_deny_pending_for_list` - Deny all of the pending users for the given group that match the passed-in .
* `group_v2_edit_clan_banner` - Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.
* `group_v2_edit_founder_options` - Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.
* `group_v2_edit_group` - Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.
* `group_v2_edit_group_membership` - Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.
* `group_v2_edit_optional_conversation` - Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.
* `group_v2_get_admins_and_founder_of_group` - Get the list of members in a given group who are of admin level or higher.
* `group_v2_get_available_avatars` - Returns a list of all available group avatars for the signed-in user.
* `group_v2_get_available_themes` - Returns a list of all available group themes.
* `group_v2_get_banned_members_of_group` - Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.
* `group_v2_get_group` - Get information about a specific group of the given ID.
* `group_v2_get_group_by_name` - Get information about a specific group with the given name and type.
* `group_v2_get_group_by_name_v2` - Get information about a specific group with the given name and type. The POST version.
* `group_v2_get_group_optional_conversations` - Gets a list of available optional conversation channels and their settings.
* `group_v2_get_groups_for_member` - Get information about the groups that a given member has joined.
* `group_v2_get_invited_individuals` - Get the list of users who have been invited into the group.
* `group_v2_get_members_of_group` - Get the list of members in a given group.
* `group_v2_get_pending_memberships` - Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.
* `group_v2_get_potential_groups_for_member` - Get information about the groups that a given member has applied to or been invited to.
* `group_v2_get_recommended_groups` - Gets groups recommended for you based on the groups to whom those you follow belong.
* `group_v2_get_user_clan_invite_setting` - Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.
* `group_v2_group_search` - Search for Groups.
* `group_v2_individual_group_invite` - Invite a user to join this group.
* `group_v2_individual_group_invite_cancel` - Cancels a pending invitation to join a group.
* `group_v2_kick_member` - Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.
* `group_v2_recover_group_for_founder` - Allows a founder to manually recover a group they can see in game but not on bungie.net
* `group_v2_unban_member` - Unbans the requested member, allowing them to re-apply for membership.
* `tokens_apply_missing_partner_offers_without_claim` - Apply a partner offer to the targeted user. This endpoint does not claim a new offer, but any already claimed offers will be applied to the game if not already.
* `tokens_claim_partner_offer` - Claim a partner offer as the authenticated user.
* `tokens_get_partner_offer_sku_history` - Returns the partner sku and offer history of the targeted user. Elevated permissions are required to see users that are not yourself.
* `trending_get_trending_categories` - Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.
* `trending_get_trending_category` - Returns paginated lists of trending items for a category.
* `trending_get_trending_entry_detail` - Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.
* `user_get_available_themes` - Returns a list of all available user themes.
* `user_get_bungie_net_user_by_id` - Loads a bungienet user by membership id.
* `user_get_credential_types_for_target_account` - Returns a list of credential types attached to the requested account
* `user_get_membership_data_by_id` - Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.
* `user_get_membership_data_for_current_user` - Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.
* `user_get_membership_from_hard_linked_credential` - Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.
* `user_search_users` - Returns a list of possible users based on the search string

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
