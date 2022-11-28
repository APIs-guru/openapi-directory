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
    
    res, err := s.Sdk.DotGetAvailableLocales(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `DotGetAvailableLocales` - List of available localization cultures
* `DotGetCommonSettings` - Get the common settings used by the Bungie.Net environment.
* `DotGetGlobalAlerts` - Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.
* `DotGetUserSystemOverrides` - Get the user-specific system overrides that should be respected alongside common systems.
* `AppGetApplicationAPIUsage` - Get API usage by application for time frame specified. You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request. You must be authenticated with at least the ReadUserData permission to access this endpoint.
* `AppGetBungieApplications` - Get list of applications created by Bungie.
* `CommunityContentGetCommunityContent` - Returns community content.
* `ContentGetContentByID` - Returns a content item referenced by id
* `ContentGetContentByTagAndType` - Returns the newest item that matches a given tag and Content Type.
* `ContentGetContentType` - Gets an object describing a particular variant of content.
* `ContentSearchContentByTagAndType` - Searches for Content Items that match the given Tag and Content Type.
* `ContentSearchContentWithText` - Gets content based on querystring information passed in. Provides basic search and text search capabilities.
* `ContentSearchHelpArticles` - Search for Help Articles.
* `Destiny2AwaGetActionToken` - Returns the action token if user approves the request.
* `Destiny2AwaInitializeRequest` - Initialize a request to perform an advanced write action.
* `Destiny2AwaProvideAuthorizationResult` - Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.
* `Destiny2EquipItem` - Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
* `Destiny2EquipItems` - Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.
* `Destiny2GetActivityHistory` - Gets activity history stats for indicated character.
* `Destiny2GetCharacter` - Returns character information for the supplied character.
* `Destiny2GetClanAggregateStats` - Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* `Destiny2GetClanLeaderboards` - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* `Destiny2GetClanWeeklyRewardState` - Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
* `Destiny2GetCollectibleNodeDetails` - Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.
* `Destiny2GetDestinyAggregateActivityStats` - Gets all activities the character has participated in together with aggregate statistics for those activities.
* `Destiny2GetDestinyEntityDefinition` - Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.
* `Destiny2GetDestinyManifest` - Returns the current version of the manifest as a json object.
* `Destiny2GetHistoricalStats` - Gets historical stats for indicated character.
* `Destiny2GetHistoricalStatsDefinition` - Gets historical stats definitions.
* `Destiny2GetHistoricalStatsForAccount` - Gets aggregate historical stats organized around each character for a given account.
* `Destiny2GetItem` - Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.
* `Destiny2GetLeaderboards` - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
* `Destiny2GetLeaderboardsForCharacter` - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
* `Destiny2GetLinkedProfiles` - Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information. The passed-in Membership Type/Membership ID may be a Bungie.Net membership or a Destiny membership. It only returns the minimal amount of data to begin making more substantive requests, but will hopefully serve as a useful alternative to UserServices for people who just care about Destiny data. Note that it will only return linked accounts whose linkages you are allowed to view.
* `Destiny2GetPostGameCarnageReport` - Gets the available post game carnage report for the activity ID.
* `Destiny2GetProfile` - Returns Destiny Profile information for the supplied membership.
* `Destiny2GetPublicMilestoneContent` - Gets custom localized content for the milestone of the given hash, if it exists.
* `Destiny2GetPublicMilestones` - Gets public information about currently available Milestones.
* `Destiny2GetPublicVendors` - Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'
* `Destiny2GetUniqueWeaponHistory` - Gets details about unique weapon usage, including all exotic weapons.
* `Destiny2GetVendor` - Get the details of a specific Vendor.
* `Destiny2GetVendors` - Get currently available vendors from the list of vendors that can possibly have rotating inventory. Note that this does not include things like preview vendors and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use their definitions as-is for those.
* `Destiny2InsertSocketPlug` - Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.
* `Destiny2PullFromPostmaster` - Extract an item from the Postmaster, with whatever implications that may entail. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item.
* `Destiny2ReportOffensivePostGameCarnageReportPlayer` - Report a player that you met in an activity that was engaging in ToS-violating activities. Both you and the offending player must have played in the activityId passed in. Please use this judiciously and only when you have strong suspicions of violation, pretty please.
* `Destiny2SearchDestinyEntities` - Gets a page list of Destiny items.
* `Destiny2SearchDestinyPlayer` - Returns a list of Destiny memberships given a full Gamertag or PSN ID. Unless you pass returnOriginalProfile=true, this will return membership information for the users' Primary Cross Save Profile if they are engaged in cross save rather than any original Destiny profile that is now being overridden.
* `Destiny2SetItemLockState` - Set the Lock State for an instanced item. You must have a valid Destiny Account.
* `Destiny2SetQuestTrackedState` - Set the Tracking State for an instanced item, if that item is a Quest or Bounty. You must have a valid Destiny Account. Yeah, it's an item.
* `Destiny2TransferItem` - Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif
* `FireteamGetActivePrivateClanFireteamCount` - Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.
* `FireteamGetAvailableClanFireteams` - Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.
* `FireteamGetClanFireteam` - Gets a specific fireteam.
* `FireteamGetMyClanFireteams` - Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.
* `FireteamSearchPublicAvailableClanFireteams` - Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.
* `ForumGetCoreTopicsPaged` - Gets a listing of all topics marked as part of the core group.
* `ForumGetForumTagSuggestions` - Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
* `ForumGetPoll` - Gets the specified forum poll.
* `ForumGetPostAndParent` - Returns the post specified and its immediate parent.
* `ForumGetPostAndParentAwaitingApproval` - Returns the post specified and its immediate parent of posts that are awaiting approval.
* `ForumGetPostsThreadedPaged` - Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.
* `ForumGetPostsThreadedPagedFromChild` - Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.
* `ForumGetRecruitmentThreadSummaries` - Allows the caller to get a list of to 25 recruitment thread summary information objects.
* `ForumGetTopicForContent` - Gets the post Id for the given content item's comments, if it exists.
* `ForumGetTopicsPaged` - Get topics from any forum.
* `GroupV2AbdicateFoundership` - An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.
* `GroupV2AddOptionalConversation` - Add a new optional conversation/chat channel. Requires admin permissions to the group.
* `GroupV2ApproveAllPending` - Approve all of the pending users for the given group.
* `GroupV2ApprovePending` - Approve the given membershipId to join the group/clan as long as they have applied.
* `GroupV2ApprovePendingForList` - Approve all of the pending users for the given group.
* `GroupV2BanMember` - Bans the requested member from the requested group for the specified period of time.
* `GroupV2DenyAllPending` - Deny all of the pending users for the given group.
* `GroupV2DenyPendingForList` - Deny all of the pending users for the given group that match the passed-in .
* `GroupV2EditClanBanner` - Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.
* `GroupV2EditFounderOptions` - Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.
* `GroupV2EditGroup` - Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.
* `GroupV2EditGroupMembership` - Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.
* `GroupV2EditOptionalConversation` - Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.
* `GroupV2GetAdminsAndFounderOfGroup` - Get the list of members in a given group who are of admin level or higher.
* `GroupV2GetAvailableAvatars` - Returns a list of all available group avatars for the signed-in user.
* `GroupV2GetAvailableThemes` - Returns a list of all available group themes.
* `GroupV2GetBannedMembersOfGroup` - Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.
* `GroupV2GetGroup` - Get information about a specific group of the given ID.
* `GroupV2GetGroupByName` - Get information about a specific group with the given name and type.
* `GroupV2GetGroupByNameV2` - Get information about a specific group with the given name and type. The POST version.
* `GroupV2GetGroupOptionalConversations` - Gets a list of available optional conversation channels and their settings.
* `GroupV2GetGroupsForMember` - Get information about the groups that a given member has joined.
* `GroupV2GetInvitedIndividuals` - Get the list of users who have been invited into the group.
* `GroupV2GetMembersOfGroup` - Get the list of members in a given group.
* `GroupV2GetPendingMemberships` - Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.
* `GroupV2GetPotentialGroupsForMember` - Get information about the groups that a given member has applied to or been invited to.
* `GroupV2GetRecommendedGroups` - Gets groups recommended for you based on the groups to whom those you follow belong.
* `GroupV2GetUserClanInviteSetting` - Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.
* `GroupV2GroupSearch` - Search for Groups.
* `GroupV2IndividualGroupInvite` - Invite a user to join this group.
* `GroupV2IndividualGroupInviteCancel` - Cancels a pending invitation to join a group.
* `GroupV2KickMember` - Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.
* `GroupV2RecoverGroupForFounder` - Allows a founder to manually recover a group they can see in game but not on bungie.net
* `GroupV2UnbanMember` - Unbans the requested member, allowing them to re-apply for membership.
* `TokensApplyMissingPartnerOffersWithoutClaim` - Apply a partner offer to the targeted user. This endpoint does not claim a new offer, but any already claimed offers will be applied to the game if not already.
* `TokensClaimPartnerOffer` - Claim a partner offer as the authenticated user.
* `TokensGetPartnerOfferSkuHistory` - Returns the partner sku and offer history of the targeted user. Elevated permissions are required to see users that are not yourself.
* `TrendingGetTrendingCategories` - Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.
* `TrendingGetTrendingCategory` - Returns paginated lists of trending items for a category.
* `TrendingGetTrendingEntryDetail` - Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.
* `UserGetAvailableThemes` - Returns a list of all available user themes.
* `UserGetBungieNetUserByID` - Loads a bungienet user by membership id.
* `UserGetCredentialTypesForTargetAccount` - Returns a list of credential types attached to the requested account
* `UserGetMembershipDataByID` - Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.
* `UserGetMembershipDataForCurrentUser` - Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.
* `UserGetMembershipFromHardLinkedCredential` - Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.
* `UserSearchUsers` - Returns a list of possible users based on the search string

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
