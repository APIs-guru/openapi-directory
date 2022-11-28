import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://www.bungie.net/Platform"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * dotGetAvailableLocales - List of available localization cultures
    **/
    dotGetAvailableLocales(config?: AxiosRequestConfig): Promise<operations.DotGetAvailableLocalesResponse>;
    /**
     * dotGetCommonSettings - Get the common settings used by the Bungie.Net environment.
    **/
    dotGetCommonSettings(config?: AxiosRequestConfig): Promise<operations.DotGetCommonSettingsResponse>;
    /**
     * dotGetGlobalAlerts - Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.
    **/
    dotGetGlobalAlerts(req: operations.DotGetGlobalAlertsRequest, config?: AxiosRequestConfig): Promise<operations.DotGetGlobalAlertsResponse>;
    /**
     * dotGetUserSystemOverrides - Get the user-specific system overrides that should be respected alongside common systems.
    **/
    dotGetUserSystemOverrides(config?: AxiosRequestConfig): Promise<operations.DotGetUserSystemOverridesResponse>;
    /**
     * appGetApplicationApiUsage - Get API usage by application for time frame specified. You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request. You must be authenticated with at least the ReadUserData permission to access this endpoint.
    **/
    appGetApplicationApiUsage(req: operations.AppGetApplicationApiUsageRequest, config?: AxiosRequestConfig): Promise<operations.AppGetApplicationApiUsageResponse>;
    /**
     * appGetBungieApplications - Get list of applications created by Bungie.
    **/
    appGetBungieApplications(config?: AxiosRequestConfig): Promise<operations.AppGetBungieApplicationsResponse>;
    /**
     * communityContentGetCommunityContent - Returns community content.
    **/
    communityContentGetCommunityContent(req: operations.CommunityContentGetCommunityContentRequest, config?: AxiosRequestConfig): Promise<operations.CommunityContentGetCommunityContentResponse>;
    /**
     * contentGetContentById - Returns a content item referenced by id
    **/
    contentGetContentById(req: operations.ContentGetContentByIdRequest, config?: AxiosRequestConfig): Promise<operations.ContentGetContentByIdResponse>;
    /**
     * contentGetContentByTagAndType - Returns the newest item that matches a given tag and Content Type.
    **/
    contentGetContentByTagAndType(req: operations.ContentGetContentByTagAndTypeRequest, config?: AxiosRequestConfig): Promise<operations.ContentGetContentByTagAndTypeResponse>;
    /**
     * contentGetContentType - Gets an object describing a particular variant of content.
    **/
    contentGetContentType(req: operations.ContentGetContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.ContentGetContentTypeResponse>;
    /**
     * contentSearchContentByTagAndType - Searches for Content Items that match the given Tag and Content Type.
    **/
    contentSearchContentByTagAndType(req: operations.ContentSearchContentByTagAndTypeRequest, config?: AxiosRequestConfig): Promise<operations.ContentSearchContentByTagAndTypeResponse>;
    /**
     * contentSearchContentWithText - Gets content based on querystring information passed in. Provides basic search and text search capabilities.
    **/
    contentSearchContentWithText(req: operations.ContentSearchContentWithTextRequest, config?: AxiosRequestConfig): Promise<operations.ContentSearchContentWithTextResponse>;
    /**
     * contentSearchHelpArticles - Search for Help Articles.
    **/
    contentSearchHelpArticles(req: operations.ContentSearchHelpArticlesRequest, config?: AxiosRequestConfig): Promise<operations.ContentSearchHelpArticlesResponse>;
    /**
     * destiny2AwaGetActionToken - Returns the action token if user approves the request.
    **/
    destiny2AwaGetActionToken(req: operations.Destiny2AwaGetActionTokenRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2AwaGetActionTokenResponse>;
    /**
     * destiny2AwaInitializeRequest - Initialize a request to perform an advanced write action.
    **/
    destiny2AwaInitializeRequest(req: operations.Destiny2AwaInitializeRequestRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2AwaInitializeRequestResponse>;
    /**
     * destiny2AwaProvideAuthorizationResult - Provide the result of the user interaction. Called by the Bungie Destiny App to approve or reject a request.
    **/
    destiny2AwaProvideAuthorizationResult(config?: AxiosRequestConfig): Promise<operations.Destiny2AwaProvideAuthorizationResultResponse>;
    /**
     * destiny2EquipItem - Equip an item. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline.
    **/
    destiny2EquipItem(req: operations.Destiny2EquipItemRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2EquipItemResponse>;
    /**
     * destiny2EquipItems - Equip a list of items by itemInstanceIds. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Any items not found on your character will be ignored.
    **/
    destiny2EquipItems(req: operations.Destiny2EquipItemsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2EquipItemsResponse>;
    /**
     * destiny2GetActivityHistory - Gets activity history stats for indicated character.
    **/
    destiny2GetActivityHistory(req: operations.Destiny2GetActivityHistoryRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetActivityHistoryResponse>;
    /**
     * destiny2GetCharacter - Returns character information for the supplied character.
    **/
    destiny2GetCharacter(req: operations.Destiny2GetCharacterRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetCharacterResponse>;
    /**
     * destiny2GetClanAggregateStats - Gets aggregated stats for a clan using the same categories as the clan leaderboards. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
    **/
    destiny2GetClanAggregateStats(req: operations.Destiny2GetClanAggregateStatsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetClanAggregateStatsResponse>;
    /**
     * destiny2GetClanLeaderboards - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
    **/
    destiny2GetClanLeaderboards(req: operations.Destiny2GetClanLeaderboardsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetClanLeaderboardsResponse>;
    /**
     * destiny2GetClanWeeklyRewardState - Returns information on the weekly clan rewards and if the clan has earned them or not. Note that this will always report rewards as not redeemed.
    **/
    destiny2GetClanWeeklyRewardState(req: operations.Destiny2GetClanWeeklyRewardStateRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetClanWeeklyRewardStateResponse>;
    /**
     * destiny2GetCollectibleNodeDetails - Given a Presentation Node that has Collectibles as direct descendants, this will return item details about those descendants in the context of the requesting character.
    **/
    destiny2GetCollectibleNodeDetails(req: operations.Destiny2GetCollectibleNodeDetailsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetCollectibleNodeDetailsResponse>;
    /**
     * destiny2GetDestinyAggregateActivityStats - Gets all activities the character has participated in together with aggregate statistics for those activities.
    **/
    destiny2GetDestinyAggregateActivityStats(req: operations.Destiny2GetDestinyAggregateActivityStatsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetDestinyAggregateActivityStatsResponse>;
    /**
     * destiny2GetDestinyEntityDefinition - Returns the static definition of an entity of the given Type and hash identifier. Examine the API Documentation for the Type Names of entities that have their own definitions. Note that the return type will always *inherit from* DestinyDefinition, but the specific type returned will be the requested entity type if it can be found. Please don't use this as a chatty alternative to the Manifest database if you require large sets of data, but for simple and one-off accesses this should be handy.
    **/
    destiny2GetDestinyEntityDefinition(req: operations.Destiny2GetDestinyEntityDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetDestinyEntityDefinitionResponse>;
    /**
     * destiny2GetDestinyManifest - Returns the current version of the manifest as a json object.
    **/
    destiny2GetDestinyManifest(config?: AxiosRequestConfig): Promise<operations.Destiny2GetDestinyManifestResponse>;
    /**
     * destiny2GetHistoricalStats - Gets historical stats for indicated character.
    **/
    destiny2GetHistoricalStats(req: operations.Destiny2GetHistoricalStatsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetHistoricalStatsResponse>;
    /**
     * destiny2GetHistoricalStatsDefinition - Gets historical stats definitions.
    **/
    destiny2GetHistoricalStatsDefinition(config?: AxiosRequestConfig): Promise<operations.Destiny2GetHistoricalStatsDefinitionResponse>;
    /**
     * destiny2GetHistoricalStatsForAccount - Gets aggregate historical stats organized around each character for a given account.
    **/
    destiny2GetHistoricalStatsForAccount(req: operations.Destiny2GetHistoricalStatsForAccountRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetHistoricalStatsForAccountResponse>;
    /**
     * destiny2GetItem - Retrieve the details of an instanced Destiny Item. An instanced Destiny item is one with an ItemInstanceId. Non-instanced items, such as materials, have no useful instance-specific details and thus are not queryable here.
    **/
    destiny2GetItem(req: operations.Destiny2GetItemRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetItemResponse>;
    /**
     * destiny2GetLeaderboards - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint has not yet been implemented. It is being returned for a preview of future functionality, and for public comment/suggestion/preparation.
    **/
    destiny2GetLeaderboards(req: operations.Destiny2GetLeaderboardsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetLeaderboardsResponse>;
    /**
     * destiny2GetLeaderboardsForCharacter - Gets leaderboards with the signed in user's friends and the supplied destinyMembershipId as the focus. PREVIEW: This endpoint is still in beta, and may experience rough edges. The schema is in final form, but there may be bugs that prevent desirable operation.
    **/
    destiny2GetLeaderboardsForCharacter(req: operations.Destiny2GetLeaderboardsForCharacterRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetLeaderboardsForCharacterResponse>;
    /**
     * destiny2GetLinkedProfiles - Returns a summary information about all profiles linked to the requesting membership type/membership ID that have valid Destiny information. The passed-in Membership Type/Membership ID may be a Bungie.Net membership or a Destiny membership. It only returns the minimal amount of data to begin making more substantive requests, but will hopefully serve as a useful alternative to UserServices for people who just care about Destiny data. Note that it will only return linked accounts whose linkages you are allowed to view.
    **/
    destiny2GetLinkedProfiles(req: operations.Destiny2GetLinkedProfilesRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetLinkedProfilesResponse>;
    /**
     * destiny2GetPostGameCarnageReport - Gets the available post game carnage report for the activity ID.
    **/
    destiny2GetPostGameCarnageReport(req: operations.Destiny2GetPostGameCarnageReportRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetPostGameCarnageReportResponse>;
    /**
     * destiny2GetProfile - Returns Destiny Profile information for the supplied membership.
    **/
    destiny2GetProfile(req: operations.Destiny2GetProfileRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetProfileResponse>;
    /**
     * destiny2GetPublicMilestoneContent - Gets custom localized content for the milestone of the given hash, if it exists.
    **/
    destiny2GetPublicMilestoneContent(req: operations.Destiny2GetPublicMilestoneContentRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetPublicMilestoneContentResponse>;
    /**
     * destiny2GetPublicMilestones - Gets public information about currently available Milestones.
    **/
    destiny2GetPublicMilestones(config?: AxiosRequestConfig): Promise<operations.Destiny2GetPublicMilestonesResponse>;
    /**
     * destiny2GetPublicVendors - Get items available from vendors where the vendors have items for sale that are common for everyone. If any portion of the Vendor's available inventory is character or account specific, we will be unable to return their data from this endpoint due to the way that available inventory is computed. As I am often guilty of saying: 'It's a long story...'
    **/
    destiny2GetPublicVendors(req: operations.Destiny2GetPublicVendorsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetPublicVendorsResponse>;
    /**
     * destiny2GetUniqueWeaponHistory - Gets details about unique weapon usage, including all exotic weapons.
    **/
    destiny2GetUniqueWeaponHistory(req: operations.Destiny2GetUniqueWeaponHistoryRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetUniqueWeaponHistoryResponse>;
    /**
     * destiny2GetVendor - Get the details of a specific Vendor.
    **/
    destiny2GetVendor(req: operations.Destiny2GetVendorRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetVendorResponse>;
    /**
     * destiny2GetVendors - Get currently available vendors from the list of vendors that can possibly have rotating inventory. Note that this does not include things like preview vendors and vendors-as-kiosks, neither of whom have rotating/dynamic inventories. Use their definitions as-is for those.
    **/
    destiny2GetVendors(req: operations.Destiny2GetVendorsRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2GetVendorsResponse>;
    /**
     * destiny2InsertSocketPlug - Insert a plug into a socketed item. I know how it sounds, but I assure you it's much more G-rated than you might be guessing. We haven't decided yet whether this will be able to insert plugs that have side effects, but if we do it will require special scope permission for an application attempting to do so. You must have a valid Destiny Account, and either be in a social space, in orbit, or offline. Request must include proof of permission for 'InsertPlugs' from the account owner.
    **/
    destiny2InsertSocketPlug(req: operations.Destiny2InsertSocketPlugRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2InsertSocketPlugResponse>;
    /**
     * destiny2PullFromPostmaster - Extract an item from the Postmaster, with whatever implications that may entail. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item.
    **/
    destiny2PullFromPostmaster(req: operations.Destiny2PullFromPostmasterRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2PullFromPostmasterResponse>;
    /**
     * destiny2ReportOffensivePostGameCarnageReportPlayer - Report a player that you met in an activity that was engaging in ToS-violating activities. Both you and the offending player must have played in the activityId passed in. Please use this judiciously and only when you have strong suspicions of violation, pretty please.
    **/
    destiny2ReportOffensivePostGameCarnageReportPlayer(req: operations.Destiny2ReportOffensivePostGameCarnageReportPlayerRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2ReportOffensivePostGameCarnageReportPlayerResponse>;
    /**
     * destiny2SearchDestinyEntities - Gets a page list of Destiny items.
    **/
    destiny2SearchDestinyEntities(req: operations.Destiny2SearchDestinyEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2SearchDestinyEntitiesResponse>;
    /**
     * destiny2SearchDestinyPlayer - Returns a list of Destiny memberships given a full Gamertag or PSN ID. Unless you pass returnOriginalProfile=true, this will return membership information for the users' Primary Cross Save Profile if they are engaged in cross save rather than any original Destiny profile that is now being overridden.
    **/
    destiny2SearchDestinyPlayer(req: operations.Destiny2SearchDestinyPlayerRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2SearchDestinyPlayerResponse>;
    /**
     * destiny2SetItemLockState - Set the Lock State for an instanced item. You must have a valid Destiny Account.
    **/
    destiny2SetItemLockState(req: operations.Destiny2SetItemLockStateRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2SetItemLockStateResponse>;
    /**
     * destiny2SetQuestTrackedState - Set the Tracking State for an instanced item, if that item is a Quest or Bounty. You must have a valid Destiny Account. Yeah, it's an item.
    **/
    destiny2SetQuestTrackedState(req: operations.Destiny2SetQuestTrackedStateRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2SetQuestTrackedStateResponse>;
    /**
     * destiny2TransferItem - Transfer an item to/from your vault. You must have a valid Destiny account. You must also pass BOTH a reference AND an instance ID if it's an instanced item. itshappening.gif
    **/
    destiny2TransferItem(req: operations.Destiny2TransferItemRequest, config?: AxiosRequestConfig): Promise<operations.Destiny2TransferItemResponse>;
    /**
     * fireteamGetActivePrivateClanFireteamCount - Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.
    **/
    fireteamGetActivePrivateClanFireteamCount(req: operations.FireteamGetActivePrivateClanFireteamCountRequest, config?: AxiosRequestConfig): Promise<operations.FireteamGetActivePrivateClanFireteamCountResponse>;
    /**
     * fireteamGetAvailableClanFireteams - Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.
    **/
    fireteamGetAvailableClanFireteams(req: operations.FireteamGetAvailableClanFireteamsRequest, config?: AxiosRequestConfig): Promise<operations.FireteamGetAvailableClanFireteamsResponse>;
    /**
     * fireteamGetClanFireteam - Gets a specific fireteam.
    **/
    fireteamGetClanFireteam(req: operations.FireteamGetClanFireteamRequest, config?: AxiosRequestConfig): Promise<operations.FireteamGetClanFireteamResponse>;
    /**
     * fireteamGetMyClanFireteams - Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.
    **/
    fireteamGetMyClanFireteams(req: operations.FireteamGetMyClanFireteamsRequest, config?: AxiosRequestConfig): Promise<operations.FireteamGetMyClanFireteamsResponse>;
    /**
     * fireteamSearchPublicAvailableClanFireteams - Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.
    **/
    fireteamSearchPublicAvailableClanFireteams(req: operations.FireteamSearchPublicAvailableClanFireteamsRequest, config?: AxiosRequestConfig): Promise<operations.FireteamSearchPublicAvailableClanFireteamsResponse>;
    /**
     * forumGetCoreTopicsPaged - Gets a listing of all topics marked as part of the core group.
    **/
    forumGetCoreTopicsPaged(req: operations.ForumGetCoreTopicsPagedRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetCoreTopicsPagedResponse>;
    /**
     * forumGetForumTagSuggestions - Gets tag suggestions based on partial text entry, matching them with other tags previously used in the forums.
    **/
    forumGetForumTagSuggestions(req: operations.ForumGetForumTagSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetForumTagSuggestionsResponse>;
    /**
     * forumGetPoll - Gets the specified forum poll.
    **/
    forumGetPoll(req: operations.ForumGetPollRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetPollResponse>;
    /**
     * forumGetPostAndParent - Returns the post specified and its immediate parent.
    **/
    forumGetPostAndParent(req: operations.ForumGetPostAndParentRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetPostAndParentResponse>;
    /**
     * forumGetPostAndParentAwaitingApproval - Returns the post specified and its immediate parent of posts that are awaiting approval.
    **/
    forumGetPostAndParentAwaitingApproval(req: operations.ForumGetPostAndParentAwaitingApprovalRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetPostAndParentAwaitingApprovalResponse>;
    /**
     * forumGetPostsThreadedPaged - Returns a thread of posts at the given parent, optionally returning replies to those posts as well as the original parent.
    **/
    forumGetPostsThreadedPaged(req: operations.ForumGetPostsThreadedPagedRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetPostsThreadedPagedResponse>;
    /**
     * forumGetPostsThreadedPagedFromChild - Returns a thread of posts starting at the topicId of the input childPostId, optionally returning replies to those posts as well as the original parent.
    **/
    forumGetPostsThreadedPagedFromChild(req: operations.ForumGetPostsThreadedPagedFromChildRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetPostsThreadedPagedFromChildResponse>;
    /**
     * forumGetRecruitmentThreadSummaries - Allows the caller to get a list of to 25 recruitment thread summary information objects.
    **/
    forumGetRecruitmentThreadSummaries(config?: AxiosRequestConfig): Promise<operations.ForumGetRecruitmentThreadSummariesResponse>;
    /**
     * forumGetTopicForContent - Gets the post Id for the given content item's comments, if it exists.
    **/
    forumGetTopicForContent(req: operations.ForumGetTopicForContentRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetTopicForContentResponse>;
    /**
     * forumGetTopicsPaged - Get topics from any forum.
    **/
    forumGetTopicsPaged(req: operations.ForumGetTopicsPagedRequest, config?: AxiosRequestConfig): Promise<operations.ForumGetTopicsPagedResponse>;
    /**
     * groupV2AbdicateFoundership - An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.
    **/
    groupV2AbdicateFoundership(req: operations.GroupV2AbdicateFoundershipRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2AbdicateFoundershipResponse>;
    /**
     * groupV2AddOptionalConversation - Add a new optional conversation/chat channel. Requires admin permissions to the group.
    **/
    groupV2AddOptionalConversation(req: operations.GroupV2AddOptionalConversationRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2AddOptionalConversationResponse>;
    /**
     * groupV2ApproveAllPending - Approve all of the pending users for the given group.
    **/
    groupV2ApproveAllPending(req: operations.GroupV2ApproveAllPendingRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2ApproveAllPendingResponse>;
    /**
     * groupV2ApprovePending - Approve the given membershipId to join the group/clan as long as they have applied.
    **/
    groupV2ApprovePending(req: operations.GroupV2ApprovePendingRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2ApprovePendingResponse>;
    /**
     * groupV2ApprovePendingForList - Approve all of the pending users for the given group.
    **/
    groupV2ApprovePendingForList(req: operations.GroupV2ApprovePendingForListRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2ApprovePendingForListResponse>;
    /**
     * groupV2BanMember - Bans the requested member from the requested group for the specified period of time.
    **/
    groupV2BanMember(req: operations.GroupV2BanMemberRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2BanMemberResponse>;
    /**
     * groupV2DenyAllPending - Deny all of the pending users for the given group.
    **/
    groupV2DenyAllPending(req: operations.GroupV2DenyAllPendingRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2DenyAllPendingResponse>;
    /**
     * groupV2DenyPendingForList - Deny all of the pending users for the given group that match the passed-in .
    **/
    groupV2DenyPendingForList(req: operations.GroupV2DenyPendingForListRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2DenyPendingForListResponse>;
    /**
     * groupV2EditClanBanner - Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.
    **/
    groupV2EditClanBanner(req: operations.GroupV2EditClanBannerRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2EditClanBannerResponse>;
    /**
     * groupV2EditFounderOptions - Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.
    **/
    groupV2EditFounderOptions(req: operations.GroupV2EditFounderOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2EditFounderOptionsResponse>;
    /**
     * groupV2EditGroup - Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.
    **/
    groupV2EditGroup(req: operations.GroupV2EditGroupRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2EditGroupResponse>;
    /**
     * groupV2EditGroupMembership - Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.
    **/
    groupV2EditGroupMembership(req: operations.GroupV2EditGroupMembershipRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2EditGroupMembershipResponse>;
    /**
     * groupV2EditOptionalConversation - Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.
    **/
    groupV2EditOptionalConversation(req: operations.GroupV2EditOptionalConversationRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2EditOptionalConversationResponse>;
    /**
     * groupV2GetAdminsAndFounderOfGroup - Get the list of members in a given group who are of admin level or higher.
    **/
    groupV2GetAdminsAndFounderOfGroup(req: operations.GroupV2GetAdminsAndFounderOfGroupRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetAdminsAndFounderOfGroupResponse>;
    /**
     * groupV2GetAvailableAvatars - Returns a list of all available group avatars for the signed-in user.
    **/
    groupV2GetAvailableAvatars(config?: AxiosRequestConfig): Promise<operations.GroupV2GetAvailableAvatarsResponse>;
    /**
     * groupV2GetAvailableThemes - Returns a list of all available group themes.
    **/
    groupV2GetAvailableThemes(config?: AxiosRequestConfig): Promise<operations.GroupV2GetAvailableThemesResponse>;
    /**
     * groupV2GetBannedMembersOfGroup - Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.
    **/
    groupV2GetBannedMembersOfGroup(req: operations.GroupV2GetBannedMembersOfGroupRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetBannedMembersOfGroupResponse>;
    /**
     * groupV2GetGroup - Get information about a specific group of the given ID.
    **/
    groupV2GetGroup(req: operations.GroupV2GetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetGroupResponse>;
    /**
     * groupV2GetGroupByName - Get information about a specific group with the given name and type.
    **/
    groupV2GetGroupByName(req: operations.GroupV2GetGroupByNameRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetGroupByNameResponse>;
    /**
     * groupV2GetGroupByNameV2 - Get information about a specific group with the given name and type. The POST version.
    **/
    groupV2GetGroupByNameV2(config?: AxiosRequestConfig): Promise<operations.GroupV2GetGroupByNameV2Response>;
    /**
     * groupV2GetGroupOptionalConversations - Gets a list of available optional conversation channels and their settings.
    **/
    groupV2GetGroupOptionalConversations(req: operations.GroupV2GetGroupOptionalConversationsRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetGroupOptionalConversationsResponse>;
    /**
     * groupV2GetGroupsForMember - Get information about the groups that a given member has joined.
    **/
    groupV2GetGroupsForMember(req: operations.GroupV2GetGroupsForMemberRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetGroupsForMemberResponse>;
    /**
     * groupV2GetInvitedIndividuals - Get the list of users who have been invited into the group.
    **/
    groupV2GetInvitedIndividuals(req: operations.GroupV2GetInvitedIndividualsRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetInvitedIndividualsResponse>;
    /**
     * groupV2GetMembersOfGroup - Get the list of members in a given group.
    **/
    groupV2GetMembersOfGroup(req: operations.GroupV2GetMembersOfGroupRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetMembersOfGroupResponse>;
    /**
     * groupV2GetPendingMemberships - Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.
    **/
    groupV2GetPendingMemberships(req: operations.GroupV2GetPendingMembershipsRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetPendingMembershipsResponse>;
    /**
     * groupV2GetPotentialGroupsForMember - Get information about the groups that a given member has applied to or been invited to.
    **/
    groupV2GetPotentialGroupsForMember(req: operations.GroupV2GetPotentialGroupsForMemberRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetPotentialGroupsForMemberResponse>;
    /**
     * groupV2GetRecommendedGroups - Gets groups recommended for you based on the groups to whom those you follow belong.
    **/
    groupV2GetRecommendedGroups(req: operations.GroupV2GetRecommendedGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetRecommendedGroupsResponse>;
    /**
     * groupV2GetUserClanInviteSetting - Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.
    **/
    groupV2GetUserClanInviteSetting(req: operations.GroupV2GetUserClanInviteSettingRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2GetUserClanInviteSettingResponse>;
    /**
     * groupV2GroupSearch - Search for Groups.
    **/
    groupV2GroupSearch(config?: AxiosRequestConfig): Promise<operations.GroupV2GroupSearchResponse>;
    /**
     * groupV2IndividualGroupInvite - Invite a user to join this group.
    **/
    groupV2IndividualGroupInvite(req: operations.GroupV2IndividualGroupInviteRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2IndividualGroupInviteResponse>;
    /**
     * groupV2IndividualGroupInviteCancel - Cancels a pending invitation to join a group.
    **/
    groupV2IndividualGroupInviteCancel(req: operations.GroupV2IndividualGroupInviteCancelRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2IndividualGroupInviteCancelResponse>;
    /**
     * groupV2KickMember - Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.
    **/
    groupV2KickMember(req: operations.GroupV2KickMemberRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2KickMemberResponse>;
    /**
     * groupV2RecoverGroupForFounder - Allows a founder to manually recover a group they can see in game but not on bungie.net
    **/
    groupV2RecoverGroupForFounder(req: operations.GroupV2RecoverGroupForFounderRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2RecoverGroupForFounderResponse>;
    /**
     * groupV2UnbanMember - Unbans the requested member, allowing them to re-apply for membership.
    **/
    groupV2UnbanMember(req: operations.GroupV2UnbanMemberRequest, config?: AxiosRequestConfig): Promise<operations.GroupV2UnbanMemberResponse>;
    /**
     * tokensApplyMissingPartnerOffersWithoutClaim - Apply a partner offer to the targeted user. This endpoint does not claim a new offer, but any already claimed offers will be applied to the game if not already.
    **/
    tokensApplyMissingPartnerOffersWithoutClaim(req: operations.TokensApplyMissingPartnerOffersWithoutClaimRequest, config?: AxiosRequestConfig): Promise<operations.TokensApplyMissingPartnerOffersWithoutClaimResponse>;
    /**
     * tokensClaimPartnerOffer - Claim a partner offer as the authenticated user.
    **/
    tokensClaimPartnerOffer(req: operations.TokensClaimPartnerOfferRequest, config?: AxiosRequestConfig): Promise<operations.TokensClaimPartnerOfferResponse>;
    /**
     * tokensGetPartnerOfferSkuHistory - Returns the partner sku and offer history of the targeted user. Elevated permissions are required to see users that are not yourself.
    **/
    tokensGetPartnerOfferSkuHistory(req: operations.TokensGetPartnerOfferSkuHistoryRequest, config?: AxiosRequestConfig): Promise<operations.TokensGetPartnerOfferSkuHistoryResponse>;
    /**
     * trendingGetTrendingCategories - Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.
    **/
    trendingGetTrendingCategories(config?: AxiosRequestConfig): Promise<operations.TrendingGetTrendingCategoriesResponse>;
    /**
     * trendingGetTrendingCategory - Returns paginated lists of trending items for a category.
    **/
    trendingGetTrendingCategory(req: operations.TrendingGetTrendingCategoryRequest, config?: AxiosRequestConfig): Promise<operations.TrendingGetTrendingCategoryResponse>;
    /**
     * trendingGetTrendingEntryDetail - Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.
    **/
    trendingGetTrendingEntryDetail(req: operations.TrendingGetTrendingEntryDetailRequest, config?: AxiosRequestConfig): Promise<operations.TrendingGetTrendingEntryDetailResponse>;
    /**
     * userGetAvailableThemes - Returns a list of all available user themes.
    **/
    userGetAvailableThemes(config?: AxiosRequestConfig): Promise<operations.UserGetAvailableThemesResponse>;
    /**
     * userGetBungieNetUserById - Loads a bungienet user by membership id.
    **/
    userGetBungieNetUserById(req: operations.UserGetBungieNetUserByIdRequest, config?: AxiosRequestConfig): Promise<operations.UserGetBungieNetUserByIdResponse>;
    /**
     * userGetCredentialTypesForTargetAccount - Returns a list of credential types attached to the requested account
    **/
    userGetCredentialTypesForTargetAccount(req: operations.UserGetCredentialTypesForTargetAccountRequest, config?: AxiosRequestConfig): Promise<operations.UserGetCredentialTypesForTargetAccountResponse>;
    /**
     * userGetMembershipDataById - Returns a list of accounts associated with the supplied membership ID and membership type. This will include all linked accounts (even when hidden) if supplied credentials permit it.
    **/
    userGetMembershipDataById(req: operations.UserGetMembershipDataByIdRequest, config?: AxiosRequestConfig): Promise<operations.UserGetMembershipDataByIdResponse>;
    /**
     * userGetMembershipDataForCurrentUser - Returns a list of accounts associated with signed in user. This is useful for OAuth implementations that do not give you access to the token response.
    **/
    userGetMembershipDataForCurrentUser(req: operations.UserGetMembershipDataForCurrentUserRequest, config?: AxiosRequestConfig): Promise<operations.UserGetMembershipDataForCurrentUserResponse>;
    /**
     * userGetMembershipFromHardLinkedCredential - Gets any hard linked membership given a credential. Only works for credentials that are public (just SteamID64 right now). Cross Save aware.
    **/
    userGetMembershipFromHardLinkedCredential(req: operations.UserGetMembershipFromHardLinkedCredentialRequest, config?: AxiosRequestConfig): Promise<operations.UserGetMembershipFromHardLinkedCredentialResponse>;
    /**
     * userSearchUsers - Returns a list of possible users based on the search string
    **/
    userSearchUsers(req: operations.UserSearchUsersRequest, config?: AxiosRequestConfig): Promise<operations.UserSearchUsersResponse>;
}
export {};
