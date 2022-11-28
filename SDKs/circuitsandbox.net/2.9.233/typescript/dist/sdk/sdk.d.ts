import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://circuitsandbox.net/rest/v2"];
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
     * addFavorite - Adds a conversation to the favorites
     *
     * Adds a conversation to the favorites. Favorites can be displayed in a separate side tab inside of the Circuit client to have a better overview of important conversations.
     * OauthScopes: WRITE_CONVERSATIONS
    **/
    addFavorite(req: operations.AddFavoriteRequest, config?: AxiosRequestConfig): Promise<operations.AddFavoriteResponse>;
    /**
     * addLabel - Add a user label
     *
     * Add a label to the list of user labels
     * OauthScopes: WRITE_USER_PROFILE, ORGANIZE_CONVERSATIONS
    **/
    addLabel(req: operations.AddLabelRequest, config?: AxiosRequestConfig): Promise<operations.AddLabelResponse>;
    /**
     * addModerators - Add moderators
     *
     * Adds a list of moderators to a conversation
     * OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
    **/
    addModerators(req: operations.AddModeratorsRequest, config?: AxiosRequestConfig): Promise<operations.AddModeratorsResponse>;
    /**
     * addParticipantCommunity - Adds participants to a community
     *
     * Adds one or more participants to the given community. This operation can only be performed by a user who is already a member of the community.
     * OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
    **/
    addParticipantCommunity(req: operations.AddParticipantCommunityRequest, config?: AxiosRequestConfig): Promise<operations.AddParticipantCommunityResponse>;
    /**
     * addParticipantGroup - Adds participants to a group conversation
     *
     * Adds one or more participants to the given group conversation. This operation can only be performed by a user who is already a member of the conversation.
     * OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
    **/
    addParticipantGroup(req: operations.AddParticipantGroupRequest, config?: AxiosRequestConfig): Promise<operations.AddParticipantGroupResponse>;
    /**
     * addParticipantsToSpace - Add Participant to Space
     *
     * Add a participant to a space
     * OauthScopes: WRITE_SPACE, MANAGE_SPACE
    **/
    addParticipantsToSpace(req: operations.AddParticipantsToSpaceRequest, config?: AxiosRequestConfig): Promise<operations.AddParticipantsToSpaceResponse>;
    /**
     * addPresenceWebHook - Registers Presence WebHook registration
     *
     * Registers a webHook that has a presence filter with the given URL and userIds. There is a maximum number of userIds allowed
     * OauthScopes: READ_USER
    **/
    addPresenceWebHook(req: operations.AddPresenceWebHookRequest, config?: AxiosRequestConfig): Promise<operations.AddPresenceWebHookResponse>;
    /**
     * addRecentSpaceSearch - Add recent search
     *
     * Add recent search of a client to search controller.
     * OauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE
    **/
    addRecentSpaceSearch(req: operations.AddRecentSpaceSearchRequest, config?: AxiosRequestConfig): Promise<operations.AddRecentSpaceSearchResponse>;
    /**
     * addTextItem - Adds a message to a conversation
     *
     * Adds a message to the given conversation. This operation can be only performed on behalf of a user who is already a member of the conversation.
     * OauthScopes: WRITE_CONVERSATIONS, CREATE_CONVERSATIONS_CONTENT
    **/
    addTextItem(req: operations.AddTextItemRequest, config?: AxiosRequestConfig): Promise<operations.AddTextItemResponse>;
    /**
     * addTextItemWithParent - Adds a message to an item
     *
     * Adds a message to the existing item. The added message will be a child item of the message with the given itemId.
     * OauthScopes: WRITE_CONVERSATIONS
    **/
    addTextItemWithParent(req: operations.AddTextItemWithParentRequest, config?: AxiosRequestConfig): Promise<operations.AddTextItemWithParentResponse>;
    /**
     * addWebHook - Registers a WebHook
     *
     * Registers the webHook with the given filter and callback URL.
     * OauthScopes: READ_CONVERSATIONS, READ_USER
    **/
    addWebHook(req: operations.AddWebHookRequest, config?: AxiosRequestConfig): Promise<operations.AddWebHookResponse>;
    /**
     * archiveConversation - Archives conversation
     *
     * Archives a conversation by muting it
     * OauthScopes: WRITE_CONVERSATIONS
    **/
    archiveConversation(req: operations.ArchiveConversationRequest, config?: AxiosRequestConfig): Promise<operations.ArchiveConversationResponse>;
    /**
     * assignLabel - Adds a label to a conversation
     *
     * Adds a label to a conversation, you can search and organize your conversations based on these labels
     * OauthScopes: WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS
    **/
    assignLabel(req: operations.AssignLabelRequest, config?: AxiosRequestConfig): Promise<operations.AssignLabelResponse>;
    /**
     * assignLabels - Assign labels
     *
     * Assign labels to space
     * OauthScopes: WRITE_SPACE, ORGANIZE_SPACE
    **/
    assignLabels(req: operations.AssignLabelsRequest, config?: AxiosRequestConfig): Promise<operations.AssignLabelsResponse>;
    /**
     * cancelSpaceSearch - Cancels a space search of a client.
     *
     * Cancels a space search of a client.
     * OauthScopes: WRITE_SPACE, MANAGE_SPACE
    **/
    cancelSpaceSearch(req: operations.CancelSpaceSearchRequest, config?: AxiosRequestConfig): Promise<operations.CancelSpaceSearchResponse>;
    /**
     * createCommunityConversation - Creates a community conversation
     *
     * Creates a community. Communities are open conversations that anyone in a Circuit domain (tenant) can join without having to be added by another user.
     * OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
    **/
    createCommunityConversation(req: operations.CreateCommunityConversationRequest, config?: AxiosRequestConfig): Promise<operations.CreateCommunityConversationResponse>;
    /**
     * createDirectConversation - Creates a 1-to-1 conversation
     *
     * Creates a 1-to-1 conversation between the authenticated user and the user with the provided userId. In case there is already an existing 1-to-1 conversation between these users, the endpoint returns the existing conversation.
     * OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
    **/
    createDirectConversation(req: operations.CreateDirectConversationRequest, config?: AxiosRequestConfig): Promise<operations.CreateDirectConversationResponse>;
    /**
     * createGroupConversation - Creates a group conversation
     *
     * Creates a group conversation between three or more users. The authenticated user is directly added to this conversation.
     * OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
    **/
    createGroupConversation(req: operations.CreateGroupConversationRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupConversationResponse>;
    /**
     * createIncomingWebhook - Create a new webhook for existing conversation.
     *
     * Create a new webhook. Conversation must exist and creater has to be participant.
     * OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
    **/
    createIncomingWebhook(req: operations.CreateIncomingWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CreateIncomingWebhookResponse>;
    /**
     * createReply - creates a reply to a topic
     *
     * creates a reply to a topic
     * OauthScopes: WRITE_SPACE
    **/
    createReply(req: operations.CreateReplyRequest, config?: AxiosRequestConfig): Promise<operations.CreateReplyResponse>;
    /**
     * createSpace - Create a space
     *
     * Create a space
     * OauthScopes: WRITE_SPACE, MANAGE_SPACE, CREATE_SPACE_CONTENT
    **/
    createSpace(req: operations.CreateSpaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateSpaceResponse>;
    /**
     * createSpaceTopic - creates a new space topic
     *
     * creates a new space topic
     * OauthScopes: WRITE_SPACE, MANAGE_SPACE, CREATE_SPACE_CONTENT
    **/
    createSpaceTopic(req: operations.CreateSpaceTopicRequest, config?: AxiosRequestConfig): Promise<operations.CreateSpaceTopicResponse>;
    /**
     * deleteFavorite - Removes a conversation from favorites
     *
     * Removes a conversation from favorites. Favorites can be displayed in a separate side tab inside of the Circuit client to have a better overview of important conversations.
     * OauthScopes: WRITE_CONVERSATIONS
    **/
    deleteFavorite(req: operations.DeleteFavoriteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFavoriteResponse>;
    /**
     * deleteIncomingWebhook - Delete an existing webhook
     *
     * Delete a new webhook. Webhook must exist
     * OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
    **/
    deleteIncomingWebhook(req: operations.DeleteIncomingWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIncomingWebhookResponse>;
    /**
     * deleteSpace - Delete a space
     *
     * Delete a space
     * OauthScopes: WRITE_SPACE, MANAGE_SPACE, DELETE_SPACE_CONTENT
    **/
    deleteSpace(req: operations.DeleteSpaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpaceResponse>;
    /**
     * deleteSpaceItem - deletes a space item
     *
     * deletes a space item
     * OauthScopes: WRITE_SPACE, DELETE_SPACE_CONTENT
    **/
    deleteSpaceItem(req: operations.DeleteSpaceItemRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpaceItemResponse>;
    /**
     * deleteTextItem - Deletes a message from a conversation
     *
     * Marks a message in the given conversation as deleted. Deleted messages are still part of the conversation, but their content is no more visible. This operation can only be performed on behalf of the message's creator.
     * OauthScopes: WRITE_CONVERSATIONS, DELETE_CONVERSATIONS_CONTENT
    **/
    deleteTextItem(req: operations.DeleteTextItemRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTextItemResponse>;
    /**
     * denySpaceAcces - Deny access for a space
     *
     * Deny access for a space
     * OauthScopes: WRITE_SPACE, MANAGE_SPACE
    **/
    denySpaceAcces(req: operations.DenySpaceAccesRequest, config?: AxiosRequestConfig): Promise<operations.DenySpaceAccesResponse>;
    /**
     * existsSpaceName - Space name exists
     *
     * Find out if a space name already exists for non-secret spaces.
     * OauthScopes: READ_SPACE
    **/
    existsSpaceName(req: operations.ExistsSpaceNameRequest, config?: AxiosRequestConfig): Promise<operations.ExistsSpaceNameResponse>;
    /**
     * flagItem - Adds a flag to a message in a conversation
     *
     * Adds a flag to the given message in the given conversation.
     * OauthScopes: WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS
    **/
    flagItem(req: operations.FlagItemRequest, config?: AxiosRequestConfig): Promise<operations.FlagItemResponse>;
    /**
     * flagSpaceItem - flag a space item
     *
     * flag a space item
     * OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT
    **/
    flagSpaceItem(req: operations.FlagSpaceItemRequest, config?: AxiosRequestConfig): Promise<operations.FlagSpaceItemResponse>;
    /**
     * getActiveSessions - Gets a list of active sessions
     *
     * Gets a list of active RTCsessions
     * OauthScopes: CALLS
    **/
    getActiveSessions(req: operations.GetActiveSessionsRequest, config?: AxiosRequestConfig): Promise<operations.GetActiveSessionsResponse>;
    /**
     * getCommunityConversations - Gets a list of communities
     *
     * Gets a list of communities. This endpoint can be used to explore the communities the authenticated user could join.
     * OauthScopes: READ_CONVERSATIONS
    **/
    getCommunityConversations(req: operations.GetCommunityConversationsRequest, config?: AxiosRequestConfig): Promise<operations.GetCommunityConversationsResponse>;
    /**
     * getConversationItems - Gets a list of conversation items
     *
     * Gets a list of conversation items.
     * OauthScopes: READ_CONVERSATIONS
    **/
    getConversationItems(req: operations.GetConversationItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetConversationItemsResponse>;
    /**
     * getConversationbyId - Gets a conversation
     *
     * Gets a conversation based on the given ID.
     * OauthScopes: READ_CONVERSATIONS
    **/
    getConversationbyId(req: operations.GetConversationbyIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConversationbyIdResponse>;
    /**
     * getConversations - Gets a list of conversations
     *
     * Gets a list of conversations and communities the authenticated user participates in.
     * OauthScopes: READ_CONVERSATIONS
    **/
    getConversations(req: operations.GetConversationsRequest, config?: AxiosRequestConfig): Promise<operations.GetConversationsResponse>;
    /**
     * getConversationsById - Gets conversations
     *
     * Gets conversation based on the given IDs.
     * OauthScopes: READ_CONVERSATIONS
    **/
    getConversationsById(req: operations.GetConversationsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetConversationsByIdResponse>;
    /**
     * getConversationsByLabel - Returns conversations with a certain label
     *
     * Returns conversations with matching labels and paginated
     * OauthScopes: READ_CONVERSATIONS
    **/
    getConversationsByLabel(req: operations.GetConversationsByLabelRequest, config?: AxiosRequestConfig): Promise<operations.GetConversationsByLabelResponse>;
    /**
     * getDirectConversation - Checks for a 1-to-1 conversation
     *
     * Checks if a 1-to-1 conversation between the authenticated user and the user with the provided userId exists.
     * OauthScopes: READ_CONVERSATIONS
    **/
    getDirectConversation(req: operations.GetDirectConversationRequest, config?: AxiosRequestConfig): Promise<operations.GetDirectConversationResponse>;
    /**
     * getDirectory - Get the directory
     *
     * Get the directory by a search query in ordered way
     * OauthScopes: READ_SPACE
    **/
    getDirectory(req: operations.GetDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDirectoryResponse>;
    /**
     * getFavoriteConversations - Gets favorite conversations
     *
     * Gets the conversationIds which are marked as favorites.
     * OauthScopes: READ_CONVERSATIONS
    **/
    getFavoriteConversations(req: operations.GetFavoriteConversationsRequest, config?: AxiosRequestConfig): Promise<operations.GetFavoriteConversationsResponse>;
    /**
     * getFlagItem - Gets a list of the flagged messages of a conversation
     *
     * Gets a list of all the flagged messages in the given conversation.
     * OauthScopes: READ_CONVERSATIONS, ORGANIZE_CONVERSATIONS
    **/
    getFlagItem(req: operations.GetFlagItemRequest, config?: AxiosRequestConfig): Promise<operations.GetFlagItemResponse>;
    /**
     * getFlagItemConv - Gets a list of the flagged messages
     *
     * Gets a list of all the messages the authenticated user has flagged. This endpoint should be used carefully in case where the authenticated user has a lot of flagged messages.
     * OauthScopes: READ_CONVERSATIONS
    **/
    getFlagItemConv(req: operations.GetFlagItemConvRequest, config?: AxiosRequestConfig): Promise<operations.GetFlagItemConvResponse>;
    /**
     * getFlaggedItems - Get flagged items
     *
     * Get flagged items
     * OauthScopes: READ_SPACE
    **/
    getFlaggedItems(req: operations.GetFlaggedItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetFlaggedItemsResponse>;
    /**
     * getIncomingWebhookByUser - Get all webhooks of a special user.
     *
     * Get all webhooks of a special user.
     * OauthScopes: READ_CONVERSATIONS, MANAGE_CONVERSATIONS
    **/
    getIncomingWebhookByUser(req: operations.GetIncomingWebhookByUserRequest, config?: AxiosRequestConfig): Promise<operations.GetIncomingWebhookByUserResponse>;
    /**
     * getJoinDetails - Gets the conference details of a conversation
     *
     * Gets the conference details of the given conversation. Conference details include the URL, which is used to join the conference through a web or mobile application, as well as the dial-in phone numbers and conference PIN, which are used to join the conference by phone.
     * OauthScopes: READ_CONVERSATIONS
    **/
    getJoinDetails(req: operations.GetJoinDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetJoinDetailsResponse>;
    /**
     * getJoinDetailsMultiple - Gets the conference details for multiple conversations
     *
     * Gets the conference details of the given conversations. Conference details include the URL, which is used to join the conference through a web or mobile application, as well as the dial-in phone numbers and conference PIN, which are used to join the conference by phone.
     * OauthScopes: READ_CONVERSATIONS
    **/
    getJoinDetailsMultiple(req: operations.GetJoinDetailsMultipleRequest, config?: AxiosRequestConfig): Promise<operations.GetJoinDetailsMultipleResponse>;
    /**
     * getJournalEntries - Get journal
     *
     * Get telephony journal
     * OauthScopes: READ_CONVERSATIONS
    **/
    getJournalEntries(req: operations.GetJournalEntriesRequest, config?: AxiosRequestConfig): Promise<operations.GetJournalEntriesResponse>;
    /**
     * getLabel - Returns all user labels
     *
     * Returns all labels of the user that were defined either explicit or implicit via assignment to conversations.
     * OauthScopes: READ_USER_PROFILE, ORGANIZE_CONVERSATIONS
    **/
    getLabel(req: operations.GetLabelRequest, config?: AxiosRequestConfig): Promise<operations.GetLabelResponse>;
    /**
     * getLikes - Get the likes of an item
     *
     * Get the likes of an item
     * OauthScopes: READ_SPACE
    **/
    getLikes(req: operations.GetLikesRequest, config?: AxiosRequestConfig): Promise<operations.GetLikesResponse>;
    /**
     * getParticipantsByConvId - Performs a list of participants
     *
     * Performs a search for participants. The max number of participants is configurable. If more participants are available a search pointer is returned for consecutive calls.
     * OauthScopes: READ_CONVERSATIONS
    **/
    getParticipantsByConvId(req: operations.GetParticipantsByConvIdRequest, config?: AxiosRequestConfig): Promise<operations.GetParticipantsByConvIdResponse>;
    /**
     * getParticipantsImportData - missing documentation
     *
     * missing documentation
     * OauthScopes: READ_SPACE
    **/
    getParticipantsImportData(req: operations.GetParticipantsImportDataRequest, config?: AxiosRequestConfig): Promise<operations.GetParticipantsImportDataResponse>;
    /**
     * getPendingParticipants - Get the pending participants of a space
     *
     * Get the pending participants of a space
     * OauthScopes: WRITE_SPACE, MANAGE_SPACE
    **/
    getPendingParticipants(req: operations.GetPendingParticipantsRequest, config?: AxiosRequestConfig): Promise<operations.GetPendingParticipantsResponse>;
    /**
     * getPinnedConversations - Returns pinned topics of a conversation
     *
     * Returns pinned topics of a conversation
     * OauthScopes: READ_CONVERSATIONS
    **/
    getPinnedConversations(req: operations.GetPinnedConversationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPinnedConversationsResponse>;
    /**
     * getPinnedTopics - Retrieve pinned topics
     *
     * Retrieve pinned topics of a space
     * OauthScopes: READ_SPACE
    **/
    getPinnedTopics(req: operations.GetPinnedTopicsRequest, config?: AxiosRequestConfig): Promise<operations.GetPinnedTopicsResponse>;
    /**
     * getPresence - Gets the presence status
     *
     * Gets the presence status of the users whose IDs or email addresses are given.
     * OauthScopes: READ_USER
    **/
    getPresence(req: operations.GetPresenceRequest, config?: AxiosRequestConfig): Promise<operations.GetPresenceResponse>;
    /**
     * getProfile - Gets the authenticated user's profile information
     *
     * Gets the authenticated user's profile information.
     * OauthScopes: READ_USER_PROFILE
    **/
    getProfile(req: operations.GetProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileResponse>;
    /**
     * getRecentSearches - Retrieve recent space searches
     *
     * Retrieve recent space searches for a user.
     * OauthScopes: READ_SPACE
    **/
    getRecentSearches(req: operations.GetRecentSearchesRequest, config?: AxiosRequestConfig): Promise<operations.GetRecentSearchesResponse>;
    /**
     * getSingleConversationtem - Returns a text item
     *
     * Returns a text item for a given item id
     * OauthScopes: READ_CONVERSATIONS
    **/
    getSingleConversationtem(req: operations.GetSingleConversationtemRequest, config?: AxiosRequestConfig): Promise<operations.GetSingleConversationtemResponse>;
    /**
     * getSpaceParticipants - Get the participants of a space
     *
     * Get the participants of a space
     * OauthScopes: READ_SPACE
    **/
    getSpaceParticipants(req: operations.GetSpaceParticipantsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpaceParticipantsResponse>;
    /**
     * getSpaceReplies - Gets space replies
     *
     * Gets a number of Space replies
     * OauthScopes: READ_SPACE
    **/
    getSpaceReplies(req: operations.GetSpaceRepliesRequest, config?: AxiosRequestConfig): Promise<operations.GetSpaceRepliesResponse>;
    /**
     * getSpaceTopics - Gets space topics
     *
     * Gets a number of Space topics
     * OauthScopes: READ_SPACE
    **/
    getSpaceTopics(req: operations.GetSpaceTopicsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpaceTopicsResponse>;
    /**
     * getSpaces - Get the spaces
     *
     * Get the spaces
     * OauthScopes: READ_SPACE
    **/
    getSpaces(req: operations.GetSpacesRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesResponse>;
    /**
     * getSpacesByIds - Get the spaces by their ids
     *
     * Get the spaces by their ids
     * OauthScopes: READ_SPACE
    **/
    getSpacesByIds(req: operations.GetSpacesByIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpacesByIdsResponse>;
    /**
     * getSupportInfo - Gets the support information
     *
     * Gets the support information for the tenant of the requesting user
     * OauthScopes: READ_USER_PROFILE
    **/
    getSupportInfo(req: operations.GetSupportInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetSupportInfoResponse>;
    /**
     * getUserByEmailAddress - Get user by email
     *
     * Get user by first or secondary email address
     * OauthScopes: READ_USER_PROFILE
    **/
    getUserByEmailAddress(req: operations.GetUserByEmailAddressRequest, config?: AxiosRequestConfig): Promise<operations.GetUserByEmailAddressResponse>;
    /**
     * getUserById - Gets the user's profile information
     *
     * Gets the profile information of the user with the given ID.
     * OauthScopes: READ_USER
    **/
    getUserById(req: operations.GetUserByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserByIdResponse>;
    /**
     * getUserPresence - Gets the presence status
     *
     * Gets the presence status of the users whose ID or email address is given.
     * OauthScopes: READ_USER
    **/
    getUserPresence(req: operations.GetUserPresenceRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPresenceResponse>;
    /**
     * getWebHook - Gets a list of webHooks
     *
     * Gets the list of webHooks registered for this user or API.
     * OauthScopes: READ_CONVERSATIONS, READ_USER
    **/
    getWebHook(req: operations.GetWebHookRequest, config?: AxiosRequestConfig): Promise<operations.GetWebHookResponse>;
    /**
     * getWebHookById - Gets a webHook
     *
     * Gets the registered webHook with the given ID.
     * OauthScopes: READ_CONVERSATIONS, READ_USER
    **/
    getWebHookById(req: operations.GetWebHookByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWebHookByIdResponse>;
    /**
     * grantSpaceAcces - grant access for a space
     *
     * grant access for a space
     * OauthScopes: WRITE_SPACE, MANAGE_SPACE
    **/
    grantSpaceAcces(req: operations.GrantSpaceAccesRequest, config?: AxiosRequestConfig): Promise<operations.GrantSpaceAccesResponse>;
    /**
     * joinCommunityConversation - Adds the authenticated user to a community
     *
     * Adds the authenticated user to the given community (i.e., allows the user to join this community). Contrary to the operation of adding a new participant, this operation can only be performed by a user who is not yet a member of the community.
     * OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
    **/
    joinCommunityConversation(req: operations.JoinCommunityConversationRequest, config?: AxiosRequestConfig): Promise<operations.JoinCommunityConversationResponse>;
    /**
     * joinSpace - Join a space
     *
     * Join a space
     * OauthScopes: WRITE_SPACE
    **/
    joinSpace(req: operations.JoinSpaceRequest, config?: AxiosRequestConfig): Promise<operations.JoinSpaceResponse>;
    /**
     * leaveSpace - Leave a space
     *
     * Leave a space
     * OauthScopes: WRITE_SPACE
    **/
    leaveSpace(req: operations.LeaveSpaceRequest, config?: AxiosRequestConfig): Promise<operations.LeaveSpaceResponse>;
    /**
     * likeItem - Adds a "like" to a message
     *
     * Adds a "like" to the given message in the given conversation
     * OauthScopes: WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT
    **/
    likeItem(req: operations.LikeItemRequest, config?: AxiosRequestConfig): Promise<operations.LikeItemResponse>;
    /**
     * likeSpaceItem - Like a space item
     *
     * Like a space item
     * OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT
    **/
    likeSpaceItem(req: operations.LikeSpaceItemRequest, config?: AxiosRequestConfig): Promise<operations.LikeSpaceItemResponse>;
    /**
     * moderateConversation - Set conversation moderated
     *
     * Set a conversation in moderatd mode. Moderators can be added and removed
     * OauthScopes: WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS
    **/
    moderateConversation(req: operations.ModerateConversationRequest, config?: AxiosRequestConfig): Promise<operations.ModerateConversationResponse>;
    /**
     * pinAConversation - Pins a topic of a conversation
     *
     * Pins a topic of a conversation
     * OauthScopes: READ_CONVERSATIONS
    **/
    pinAConversation(req: operations.PinAConversationRequest, config?: AxiosRequestConfig): Promise<operations.PinAConversationResponse>;
    /**
     * pinTopic - Pin a topic
     *
     * Pin a topic
     * OauthScopes: WRITE_SPACE, MANAGE_SPACE
    **/
    pinTopic(req: operations.PinTopicRequest, config?: AxiosRequestConfig): Promise<operations.PinTopicResponse>;
    /**
     * postWebhookAsSlackMessage - Post text item for conversation via webhook.
     *
     * Post text items to conversations via slack apps.
    **/
    postWebhookAsSlackMessage(req: operations.PostWebhookAsSlackMessageRequest, config?: AxiosRequestConfig): Promise<operations.PostWebhookAsSlackMessageResponse>;
    /**
     * removeLabel - Remove a user label
     *
     * Remove a label from the list of user labels
     * OauthScopes: WRITE_USER_PROFILE, ORGANIZE_CONVERSATIONS
    **/
    removeLabel(req: operations.RemoveLabelRequest, config?: AxiosRequestConfig): Promise<operations.RemoveLabelResponse>;
    /**
     * removeModerators - Remove moderators
     *
     * Removes a list of moderators from a conversation
     * OauthScopes: WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS
    **/
    removeModerators(req: operations.RemoveModeratorsRequest, config?: AxiosRequestConfig): Promise<operations.RemoveModeratorsResponse>;
    /**
     * removeParticipantCommunity - Removes participants from a community
     *
     * Removes one or more participants from the given community. The last participant of a community cannot be removed. This operation can only be performed by a user who is already a member of the community.
     * OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
    **/
    removeParticipantCommunity(req: operations.RemoveParticipantCommunityRequest, config?: AxiosRequestConfig): Promise<operations.RemoveParticipantCommunityResponse>;
    /**
     * removeParticipantGroup - Removes participants from a group conversation
     *
     * Removes one or more participants from the given group conversation. The last participant of a group conversation cannot be removed. This operation can only be performed on behalf of a user who is already a member of the conversation.
     * OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
    **/
    removeParticipantGroup(req: operations.RemoveParticipantGroupRequest, config?: AxiosRequestConfig): Promise<operations.RemoveParticipantGroupResponse>;
    /**
     * removeWebHook - Removes a registered webHook
     *
     * Unregisters the webHook with the given ID.
     * OauthScopes: READ_CONVERSATIONS, READ_USER
    **/
    removeWebHook(req: operations.RemoveWebHookRequest, config?: AxiosRequestConfig): Promise<operations.RemoveWebHookResponse>;
    /**
     * removeWebHooks - Removes all webHooks
     *
     * Unregisters all webHooks of the authenticated user
     * OauthScopes: READ_CONVERSATIONS, READ_USER
    **/
    removeWebHooks(req: operations.RemoveWebHooksRequest, config?: AxiosRequestConfig): Promise<operations.RemoveWebHooksResponse>;
    /**
     * requestSpaceAcces - request access for a space
     *
     * request access for a space
     * OauthScopes: READ_SPACE
    **/
    requestSpaceAcces(req: operations.RequestSpaceAccesRequest, config?: AxiosRequestConfig): Promise<operations.RequestSpaceAccesResponse>;
    /**
     * resolveInvitationToken - Resolves an invite token to a conversation
     *
     * Resolves an invite token to a conversation
     * OauthScopes: READ_CONVERSATIONS
    **/
    resolveInvitationToken(req: operations.ResolveInvitationTokenRequest, config?: AxiosRequestConfig): Promise<operations.ResolveInvitationTokenResponse>;
    /**
     * searchConversations - Performs a conversation search
     *
     * Performs a search for conversation content. A maximum of 100 conversations is returned. If you hit this limit you should refine the search term.
     * OauthScopes: READ_CONVERSATIONS
    **/
    searchConversations(req: operations.SearchConversationsRequest, config?: AxiosRequestConfig): Promise<operations.SearchConversationsResponse>;
    /**
     * searchParticipantsToAdd - Finds participants to add to add to a space
     *
     * Finds participants to add to a space
     * OauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE
    **/
    searchParticipantsToAdd(req: operations.SearchParticipantsToAddRequest, config?: AxiosRequestConfig): Promise<operations.SearchParticipantsToAddResponse>;
    /**
     * searchSpaceParticipants - Get the participants of a space
     *
     * Get the participants of a space
     * OauthScopes: READ_SPACE
    **/
    searchSpaceParticipants(req: operations.SearchSpaceParticipantsRequest, config?: AxiosRequestConfig): Promise<operations.SearchSpaceParticipantsResponse>;
    /**
     * searchUser - Search for users
     *
     * Search for users based on an email address or username
     * OauthScopes: READ_USER
    **/
    searchUser(req: operations.SearchUserRequest, config?: AxiosRequestConfig): Promise<operations.SearchUserResponse>;
    /**
     * searchUsersList - Search multiple users.
     *
     * Search multiple users given by id or email address.
     * OauthScopes: READ_USER
    **/
    searchUsersList(req: operations.SearchUsersListRequest, config?: AxiosRequestConfig): Promise<operations.SearchUsersListResponse>;
    /**
     * setUserPresence - Updates the presence status
     *
     * Updates the presence status of the authenticated user.
     * OauthScopes: WRITE_USER_PROFILE, MANAGE_PRESENCE
    **/
    setUserPresence(req: operations.SetUserPresenceRequest, config?: AxiosRequestConfig): Promise<operations.SetUserPresenceResponse>;
    /**
     * startBasicSpacesSearch - starts a basic search in spaces
     *
     * starts a basic search in spaces
     * OauthScopes: READ_SPACE
    **/
    startBasicSpacesSearch(req: operations.StartBasicSpacesSearchRequest, config?: AxiosRequestConfig): Promise<operations.StartBasicSpacesSearchResponse>;
    /**
     * startDetailedSpaceSearch - starts a detailed search in a space
     *
     * starts a detailed search in a space
     * OauthScopes: READ_SPACE
    **/
    startDetailedSpaceSearch(req: operations.StartDetailedSpaceSearchRequest, config?: AxiosRequestConfig): Promise<operations.StartDetailedSpaceSearchResponse>;
    /**
     * unFlagItem - Removes the flag from a message
     *
     * Removes the flag from a given message that is posted to the given conversation.
     * OauthScopes: WRITE_CONVERSATIONS, ORGANIZE_CONVERSATIONS
    **/
    unFlagItem(req: operations.UnFlagItemRequest, config?: AxiosRequestConfig): Promise<operations.UnFlagItemResponse>;
    /**
     * unPinAConversation - Unpins a topic of a conversation
     *
     * Unpins a topic of a conversation
     * OauthScopes: READ_CONVERSATIONS
    **/
    unPinAConversation(req: operations.UnPinAConversationRequest, config?: AxiosRequestConfig): Promise<operations.UnPinAConversationResponse>;
    /**
     * unassignLabel - Removes a label from a conversation
     *
     * Removes a label from a conversation, you can search and organize your conversations based on these labels
     * OauthScopes: WRITE_CONVERSATIONS
    **/
    unassignLabel(req: operations.UnassignLabelRequest, config?: AxiosRequestConfig): Promise<operations.UnassignLabelResponse>;
    /**
     * unassignLabels - Unassign labels
     *
     * Unassign labels from a space
     * OauthScopes: WRITE_SPACE, ORGANIZE_SPACE
    **/
    unassignLabels(req: operations.UnassignLabelsRequest, config?: AxiosRequestConfig): Promise<operations.UnassignLabelsResponse>;
    /**
     * undoArchiveConversation - Unmute conversation
     *
     * The conversation will no longer be archived but active again
     * OauthScopes: WRITE_CONVERSATIONS
    **/
    undoArchiveConversation(req: operations.UndoArchiveConversationRequest, config?: AxiosRequestConfig): Promise<operations.UndoArchiveConversationResponse>;
    /**
     * unflagSpaceItem - Unflag a space item
     *
     * Unflag a space item
     * OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT
    **/
    unflagSpaceItem(req: operations.UnflagSpaceItemRequest, config?: AxiosRequestConfig): Promise<operations.UnflagSpaceItemResponse>;
    /**
     * unlikeItem - Removes a "like" from a message
     *
     * Removes a "like" from the given message in the given conversation
     * OauthScopes: WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT
    **/
    unlikeItem(req: operations.UnlikeItemRequest, config?: AxiosRequestConfig): Promise<operations.UnlikeItemResponse>;
    /**
     * unlikeSpaceItem - Unlike a space item
     *
     * Unlike a space item
     * OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT
    **/
    unlikeSpaceItem(req: operations.UnlikeSpaceItemRequest, config?: AxiosRequestConfig): Promise<operations.UnlikeSpaceItemResponse>;
    /**
     * unmoderateConversation - Set conversation unmoderated
     *
     * Set a conversation to unmoderatd mode
     * OauthScopes: WRITE_CONVERSATIONS, MODERATE_CONVERSATIONS
    **/
    unmoderateConversation(req: operations.UnmoderateConversationRequest, config?: AxiosRequestConfig): Promise<operations.UnmoderateConversationResponse>;
    /**
     * unpinTopic - Unpin a topic
     *
     * Unpin a topic
     * OauthScopes: WRITE_SPACE, MANAGE_SPACE
    **/
    unpinTopic(req: operations.UnpinTopicRequest, config?: AxiosRequestConfig): Promise<operations.UnpinTopicResponse>;
    /**
     * updateConversationCommunity - Updates the information of a community
     *
     * Updates the information of the given community.
     * OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
    **/
    updateConversationCommunity(req: operations.UpdateConversationCommunityRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConversationCommunityResponse>;
    /**
     * updateConversationGroup - Updates the information of a group conversation
     *
     * Updates the information of the given group conversation.
     * OauthScopes: WRITE_CONVERSATIONS, MANAGE_CONVERSATIONS
    **/
    updateConversationGroup(req: operations.UpdateConversationGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConversationGroupResponse>;
    /**
     * updateParticipantInSpace - Update participant
     *
     * Update participant in space
     * OauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE
    **/
    updateParticipantInSpace(req: operations.UpdateParticipantInSpaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateParticipantInSpaceResponse>;
    /**
     * updatePresenceWebHook - Updates a Presence WebHook registration
     *
     * Updates a registration of a webHook that has a presence filter. The update can be performed either on the URL and/or the userIds. The new userIds, if any, will override any existing userIds.
     * OauthScopes: READ_USER
    **/
    updatePresenceWebHook(req: operations.UpdatePresenceWebHookRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePresenceWebHookResponse>;
    /**
     * updateProfile - Updates the user profile
     *
     * Updates the user profile of the authenticated user
     * OauthScopes: WRITE_USER_PROFILE
    **/
    updateProfile(req: operations.UpdateProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProfileResponse>;
    /**
     * updateReadTimestamp - Update read timestamp
     *
     * Update read timestamp
     * OauthScopes: READ_SPACE, WRITE_SPACE
    **/
    updateReadTimestamp(req: operations.UpdateReadTimestampRequest, config?: AxiosRequestConfig): Promise<operations.UpdateReadTimestampResponse>;
    /**
     * updateSpace - Update a space
     *
     * Update a space
     * OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT
    **/
    updateSpace(req: operations.UpdateSpaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSpaceResponse>;
    /**
     * updateSpaceReply - Updates a space reply
     *
     * Updates a space reply
     * OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT
    **/
    updateSpaceReply(req: operations.UpdateSpaceReplyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSpaceReplyResponse>;
    /**
     * updateSpaceTopic - Updates a topic
     *
     * Updates a topic
     * OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT
    **/
    updateSpaceTopic(req: operations.UpdateSpaceTopicRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSpaceTopicResponse>;
    /**
     * updateTextItem - Updates a message
     *
     * Updates the content or subject of the existing message. Only the creator of the message is allowed to perform this operation.
     * OauthScopes: WRITE_CONVERSATIONS, UPDATE_CONVERSATION_CONTENT
    **/
    updateTextItem(req: operations.UpdateTextItemRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTextItemResponse>;
    /**
     * updateTopicTags - Update tags
     *
     * Update the tags of a topic
     * OauthScopes: WRITE_SPACE, UPDATE_SPACE_CONTENT
    **/
    updateTopicTags(req: operations.UpdateTopicTagsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTopicTagsResponse>;
    /**
     * updateWebHook - Updates a WebHook registration
     *
     * Updates a webHook registration with the given filter and callback URL.
     * OauthScopes: READ_CONVERSATIONS, READ_USER
    **/
    updateWebHook(req: operations.UpdateWebHookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWebHookResponse>;
    /**
     * v2GetDeviceInfos - Get devices infos
     *
     * Get the device infos of the requesting user
     * OauthScopes: READ_USER_PROFILE
    **/
    v2GetDeviceInfos(req: operations.V2GetDeviceInfosRequest, config?: AxiosRequestConfig): Promise<operations.V2GetDeviceInfosResponse>;
    /**
     * v2GetTelephonyConversationId - Get telephony conversation id
     *
     * Get telephony conversation id for requesting client
     * OauthScopes: READ_CONVERSATIONS
    **/
    v2GetTelephonyConversationId(req: operations.V2GetTelephonyConversationIdRequest, config?: AxiosRequestConfig): Promise<operations.V2GetTelephonyConversationIdResponse>;
    /**
     * v2GetTopicWithReplies - Gets space replies and a topic
     *
     * Gets a number of Space replies with a matching topic
     * OauthScopes: READ_SPACE
    **/
    v2GetTopicWithReplies(req: operations.V2GetTopicWithRepliesRequest, config?: AxiosRequestConfig): Promise<operations.V2GetTopicWithRepliesResponse>;
    /**
     * v2RemoveParticipantsFromSpace - Removes participants from a space
     *
     * removes Participants from a space
     * OauthScopes: WRITE_SPACE, MANAGE_SPACE, ORGANIZE_SPACE
    **/
    v2RemoveParticipantsFromSpace(req: operations.V2RemoveParticipantsFromSpaceRequest, config?: AxiosRequestConfig): Promise<operations.V2RemoveParticipantsFromSpaceResponse>;
    /**
     * v2UpdateWelcomeBoxContent - Update content of welcome box
     *
     * Update content of the welcome box of a space
     * OauthScopes: MANAGE_SPACE, WRITE_SPACE
    **/
    v2UpdateWelcomeBoxContent(req: operations.V2UpdateWelcomeBoxContentRequest, config?: AxiosRequestConfig): Promise<operations.V2UpdateWelcomeBoxContentResponse>;
}
export {};
