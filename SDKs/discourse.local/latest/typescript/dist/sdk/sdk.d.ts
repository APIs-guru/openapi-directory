import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://discourse.local", "https://{defaultHost}"];
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
     * deleteAdminBadgesIdJson - Delete badge
    **/
    deleteAdminBadgesIdJson(req: operations.DeleteAdminBadgesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAdminBadgesIdJsonResponse>;
    /**
     * deleteAdminGroupsIdJson - Delete a group
    **/
    deleteAdminGroupsIdJson(req: operations.DeleteAdminGroupsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAdminGroupsIdJsonResponse>;
    /**
     * deleteAdminUsersIdJson - Delete a user
    **/
    deleteAdminUsersIdJson(req: operations.DeleteAdminUsersIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAdminUsersIdJsonResponse>;
    /**
     * deleteGroupsIdMembersJson - Remove group members
    **/
    deleteGroupsIdMembersJson(req: operations.DeleteGroupsIdMembersJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupsIdMembersJsonResponse>;
    /**
     * deleteTIdJson - Remove a topic
    **/
    deleteTIdJson(req: operations.DeleteTIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTIdJsonResponse>;
    /**
     * getAdminBackupsFilename - Download backup
    **/
    getAdminBackupsFilename(req: operations.GetAdminBackupsFilenameRequest, config?: AxiosRequestConfig): Promise<operations.GetAdminBackupsFilenameResponse>;
    /**
     * getAdminBackupsJson - List backups
    **/
    getAdminBackupsJson(config?: AxiosRequestConfig): Promise<operations.GetAdminBackupsJsonResponse>;
    /**
     * getAdminBadgesJson - List badges
    **/
    getAdminBadgesJson(config?: AxiosRequestConfig): Promise<operations.GetAdminBadgesJsonResponse>;
    /**
     * getAdminUsersIdJson - Get a user by id
    **/
    getAdminUsersIdJson(req: operations.GetAdminUsersIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetAdminUsersIdJsonResponse>;
    /**
     * getAdminUsersListFlagJson - Get a list of users
    **/
    getAdminUsersListFlagJson(req: operations.GetAdminUsersListFlagJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetAdminUsersListFlagJsonResponse>;
    /**
     * getCIdShowJson - Show category
    **/
    getCIdShowJson(req: operations.GetCIdShowJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCIdShowJsonResponse>;
    /**
     * getCSlugIdJson - List topics
    **/
    getCSlugIdJson(req: operations.GetCSlugIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCSlugIdJsonResponse>;
    /**
     * getCategoriesJson - Retrieves a list of categories
    **/
    getCategoriesJson(config?: AxiosRequestConfig): Promise<operations.GetCategoriesJsonResponse>;
    /**
     * getDirectoryItemsJson - Get a public list of users
    **/
    getDirectoryItemsJson(req: operations.GetDirectoryItemsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetDirectoryItemsJsonResponse>;
    /**
     * getGroupsJson - List groups
    **/
    getGroupsJson(config?: AxiosRequestConfig): Promise<operations.GetGroupsJsonResponse>;
    /**
     * getGroupsNameJson - Get a group
    **/
    getGroupsNameJson(req: operations.GetGroupsNameJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsNameJsonResponse>;
    /**
     * getGroupsNameMembersJson - List group members
    **/
    getGroupsNameMembersJson(req: operations.GetGroupsNameMembersJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsNameMembersJsonResponse>;
    /**
     * getLatestJson - Get the latest topics
    **/
    getLatestJson(req: operations.GetLatestJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestJsonResponse>;
    /**
     * getNotificationsJson - Get the notifications that belong to the current user
    **/
    getNotificationsJson(config?: AxiosRequestConfig): Promise<operations.GetNotificationsJsonResponse>;
    /**
     * getPostsIdJson - Retrieve a single post
    **/
    getPostsIdJson(req: operations.GetPostsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPostsIdJsonResponse>;
    /**
     * getPostsJson - List latest posts across topics
    **/
    getPostsJson(req: operations.GetPostsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPostsJsonResponse>;
    /**
     * getTIdJson - Get a single topic
    **/
    getTIdJson(req: operations.GetTIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetTIdJsonResponse>;
    /**
     * getTagGroupsIdJson - Get a single tag group
    **/
    getTagGroupsIdJson(req: operations.GetTagGroupsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetTagGroupsIdJsonResponse>;
    /**
     * getTagGroupsJson - Get a list of tag groups
    **/
    getTagGroupsJson(config?: AxiosRequestConfig): Promise<operations.GetTagGroupsJsonResponse>;
    /**
     * getTagNameJson - Get a specific tag
    **/
    getTagNameJson(req: operations.GetTagNameJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetTagNameJsonResponse>;
    /**
     * getTagsJson - Get a list of tags
    **/
    getTagsJson(config?: AxiosRequestConfig): Promise<operations.GetTagsJsonResponse>;
    /**
     * getTopJson - Get the top topics
    **/
    getTopJson(req: operations.GetTopJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetTopJsonResponse>;
    /**
     * getTopJsonPeriodEqualFlag - Get the top topics filtered by a flag
    **/
    getTopJsonPeriodEqualFlag(req: operations.GetTopJsonPeriodEqualFlagRequest, config?: AxiosRequestConfig): Promise<operations.GetTopJsonPeriodEqualFlagResponse>;
    /**
     * getTopicsPrivateMessagesSentUsernameJson - Get a list of private messages sent for a user
    **/
    getTopicsPrivateMessagesSentUsernameJson(req: operations.GetTopicsPrivateMessagesSentUsernameJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetTopicsPrivateMessagesSentUsernameJsonResponse>;
    /**
     * getTopicsPrivateMessagesUsernameJson - Get a list of private messages for a user
    **/
    getTopicsPrivateMessagesUsernameJson(req: operations.GetTopicsPrivateMessagesUsernameJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetTopicsPrivateMessagesUsernameJsonResponse>;
    /**
     * getUByExternalExternalIdJson - Get a user by external_id
    **/
    getUByExternalExternalIdJson(req: operations.GetUByExternalExternalIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetUByExternalExternalIdJsonResponse>;
    /**
     * getUByExternalProviderExternalIdJson - Get a user by identity provider external ID
    **/
    getUByExternalProviderExternalIdJson(req: operations.GetUByExternalProviderExternalIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetUByExternalProviderExternalIdJsonResponse>;
    /**
     * getUUsernameJson - Get a single user by username
    **/
    getUUsernameJson(req: operations.GetUUsernameJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetUUsernameJsonResponse>;
    /**
     * getUserActionsJson - Get a list of user actions
    **/
    getUserActionsJson(req: operations.GetUserActionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetUserActionsJsonResponse>;
    /**
     * getUserBadgesUsernameJson - List badges for a user
    **/
    getUserBadgesUsernameJson(req: operations.GetUserBadgesUsernameJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetUserBadgesUsernameJsonResponse>;
    /**
     * postAdminBackupsJson - Create backup
    **/
    postAdminBackupsJson(req: operations.PostAdminBackupsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostAdminBackupsJsonResponse>;
    /**
     * postAdminBadgesJson - Create badge
    **/
    postAdminBadgesJson(req: operations.PostAdminBadgesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostAdminBadgesJsonResponse>;
    /**
     * postAdminGroupsJson - Creates a group
    **/
    postAdminGroupsJson(req: operations.PostAdminGroupsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostAdminGroupsJsonResponse>;
    /**
     * postAdminUsersIdLogOutJson - Log a user out
    **/
    postAdminUsersIdLogOutJson(req: operations.PostAdminUsersIdLogOutJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostAdminUsersIdLogOutJsonResponse>;
    /**
     * postCategoriesJson - Creates a category
    **/
    postCategoriesJson(req: operations.PostCategoriesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostCategoriesJsonResponse>;
    /**
     * postInvitesJson - Create an invite
    **/
    postInvitesJson(req: operations.PostInvitesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostInvitesJsonResponse>;
    /**
     * postPostActionsJson - Like a post and other actions
    **/
    postPostActionsJson(req: operations.PostPostActionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostPostActionsJsonResponse>;
    /**
     * postPostsJson - Creates a new topic, a new post, or a private message
    **/
    postPostsJson(req: operations.PostPostsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostPostsJsonResponse>;
    /**
     * postSessionForgotPasswordJson - Send password reset email
    **/
    postSessionForgotPasswordJson(req: operations.PostSessionForgotPasswordJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostSessionForgotPasswordJsonResponse>;
    /**
     * postTIdInviteJson - Invite to topic
    **/
    postTIdInviteJson(req: operations.PostTIdInviteJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostTIdInviteJsonResponse>;
    /**
     * postTIdNotificationsJson - Set notification level
    **/
    postTIdNotificationsJson(req: operations.PostTIdNotificationsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostTIdNotificationsJsonResponse>;
    /**
     * postTIdTimerJson - Create topic timer
    **/
    postTIdTimerJson(req: operations.PostTIdTimerJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostTIdTimerJsonResponse>;
    /**
     * postTagGroupsJson - Creates a tag group
    **/
    postTagGroupsJson(req: operations.PostTagGroupsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostTagGroupsJsonResponse>;
    /**
     * postUploadsJson - Creates an upload
    **/
    postUploadsJson(req: operations.PostUploadsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostUploadsJsonResponse>;
    /**
     * postUserAvatarUsernameRefreshGravatarJson - Refresh gravatar
    **/
    postUserAvatarUsernameRefreshGravatarJson(req: operations.PostUserAvatarUsernameRefreshGravatarJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostUserAvatarUsernameRefreshGravatarJsonResponse>;
    /**
     * postUsersJson - Creates a user
    **/
    postUsersJson(req: operations.PostUsersJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersJsonResponse>;
    /**
     * putAdminBackupsFilename - Send download backup email
    **/
    putAdminBackupsFilename(req: operations.PutAdminBackupsFilenameRequest, config?: AxiosRequestConfig): Promise<operations.PutAdminBackupsFilenameResponse>;
    /**
     * putAdminBadgesIdJson - Update badge
    **/
    putAdminBadgesIdJson(req: operations.PutAdminBadgesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutAdminBadgesIdJsonResponse>;
    /**
     * putAdminUsersIdAnonymizeJson - Anonymize a user
    **/
    putAdminUsersIdAnonymizeJson(req: operations.PutAdminUsersIdAnonymizeJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutAdminUsersIdAnonymizeJsonResponse>;
    /**
     * putAdminUsersIdSuspendJson - Suspend a user
    **/
    putAdminUsersIdSuspendJson(req: operations.PutAdminUsersIdSuspendJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutAdminUsersIdSuspendJsonResponse>;
    /**
     * putCategoriesIdJson - Updates a category
    **/
    putCategoriesIdJson(req: operations.PutCategoriesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutCategoriesIdJsonResponse>;
    /**
     * putGroupsIdJson - Update a group
    **/
    putGroupsIdJson(req: operations.PutGroupsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutGroupsIdJsonResponse>;
    /**
     * putGroupsIdMembersJson - Add group members
    **/
    putGroupsIdMembersJson(req: operations.PutGroupsIdMembersJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutGroupsIdMembersJsonResponse>;
    /**
     * putNotificationsMarkReadJson - Mark notifications as read
    **/
    putNotificationsMarkReadJson(req: operations.PutNotificationsMarkReadJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutNotificationsMarkReadJsonResponse>;
    /**
     * putPostsIdJson - Update a single post
    **/
    putPostsIdJson(req: operations.PutPostsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutPostsIdJsonResponse>;
    /**
     * putPostsIdLockedJson - Lock a post from being edited
    **/
    putPostsIdLockedJson(req: operations.PutPostsIdLockedJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutPostsIdLockedJsonResponse>;
    /**
     * putTIdBookmarkJson - Bookmark topic
    **/
    putTIdBookmarkJson(req: operations.PutTIdBookmarkJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutTIdBookmarkJsonResponse>;
    /**
     * putTIdChangeTimestampJson - Update topic timestamp
    **/
    putTIdChangeTimestampJson(req: operations.PutTIdChangeTimestampJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutTIdChangeTimestampJsonResponse>;
    /**
     * putTIdJson - Update a topic
    **/
    putTIdJson(req: operations.PutTIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutTIdJsonResponse>;
    /**
     * putTIdStatusJson - Update the status of a topic
    **/
    putTIdStatusJson(req: operations.PutTIdStatusJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutTIdStatusJsonResponse>;
    /**
     * putTagGroupsIdJson - Update tag group
    **/
    putTagGroupsIdJson(req: operations.PutTagGroupsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutTagGroupsIdJsonResponse>;
    /**
     * putUUsernamePreferencesAvatarPickJson - Update avatar
    **/
    putUUsernamePreferencesAvatarPickJson(req: operations.PutUUsernamePreferencesAvatarPickJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutUUsernamePreferencesAvatarPickJsonResponse>;
    /**
     * putUUsernamePreferencesEmailJson - Update email
    **/
    putUUsernamePreferencesEmailJson(req: operations.PutUUsernamePreferencesEmailJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutUUsernamePreferencesEmailJsonResponse>;
    /**
     * putUsersPasswordResetTokenJson - Change password
    **/
    putUsersPasswordResetTokenJson(req: operations.PutUsersPasswordResetTokenJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersPasswordResetTokenJsonResponse>;
}
export {};
