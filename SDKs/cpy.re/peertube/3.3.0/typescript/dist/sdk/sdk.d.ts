import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://peertube2.cpy.re/api/v1", "https://peertube3.cpy.re/api/v1", "https://peertube.cpy.re/api/v1"];
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
     * deleteAbusesAbuseId - Delete an abuse
    **/
    deleteAbusesAbuseId(req: operations.DeleteAbusesAbuseIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAbusesAbuseIdResponse>;
    /**
     * deleteAbusesAbuseIdMessagesAbuseMessageId - Delete an abuse message
    **/
    deleteAbusesAbuseIdMessagesAbuseMessageId(req: operations.DeleteAbusesAbuseIdMessagesAbuseMessageIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAbusesAbuseIdMessagesAbuseMessageIdResponse>;
    /**
     * deleteServerBlocklistAccountsAccountName - Unblock an account by its handle
    **/
    deleteServerBlocklistAccountsAccountName(req: operations.DeleteServerBlocklistAccountsAccountNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServerBlocklistAccountsAccountNameResponse>;
    /**
     * deleteServerBlocklistServersHost - Unblock a server by its domain
    **/
    deleteServerBlocklistServersHost(req: operations.DeleteServerBlocklistServersHostRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServerBlocklistServersHostResponse>;
    /**
     * deleteServerFollowersNameWithHost - Remove or reject a follower to your server
    **/
    deleteServerFollowersNameWithHost(req: operations.DeleteServerFollowersNameWithHostRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServerFollowersNameWithHostResponse>;
    /**
     * deleteServerFollowingHostOrHandle - Unfollow an actor (PeerTube instance, channel or account)
    **/
    deleteServerFollowingHostOrHandle(req: operations.DeleteServerFollowingHostOrHandleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServerFollowingHostOrHandleResponse>;
    /**
     * deleteUsersMeAvatar - Delete my avatar
    **/
    deleteUsersMeAvatar(req: operations.DeleteUsersMeAvatarRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersMeAvatarResponse>;
    /**
     * deleteUsersMeSubscriptionsSubscriptionHandle - Delete subscription of my user
    **/
    deleteUsersMeSubscriptionsSubscriptionHandle(req: operations.DeleteUsersMeSubscriptionsSubscriptionHandleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersMeSubscriptionsSubscriptionHandleResponse>;
    /**
     * deleteVideoChannelsChannelHandleAvatar - Delete channel avatar
    **/
    deleteVideoChannelsChannelHandleAvatar(req: operations.DeleteVideoChannelsChannelHandleAvatarRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideoChannelsChannelHandleAvatarResponse>;
    /**
     * deleteVideoChannelsChannelHandleBanner - Delete channel banner
    **/
    deleteVideoChannelsChannelHandleBanner(req: operations.DeleteVideoChannelsChannelHandleBannerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideoChannelsChannelHandleBannerResponse>;
    /**
     * deleteVideoPlaylistsPlaylistId - Delete a video playlist
    **/
    deleteVideoPlaylistsPlaylistId(req: operations.DeleteVideoPlaylistsPlaylistIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideoPlaylistsPlaylistIdResponse>;
    /**
     * deleteVideosIdCommentsCommentId - Delete a comment or a reply
    **/
    deleteVideosIdCommentsCommentId(req: operations.DeleteVideosIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideosIdCommentsCommentIdResponse>;
    /**
     * getAbusesAbuseIdMessages - List messages of an abuse
    **/
    getAbusesAbuseIdMessages(req: operations.GetAbusesAbuseIdMessagesRequest, config?: AxiosRequestConfig): Promise<operations.GetAbusesAbuseIdMessagesResponse>;
    /**
     * getAccountsNameRatings - List ratings of an account
    **/
    getAccountsNameRatings(req: operations.GetAccountsNameRatingsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsNameRatingsResponse>;
    /**
     * getAccountsNameVideoChannels - List video channels of an account
    **/
    getAccountsNameVideoChannels(req: operations.GetAccountsNameVideoChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsNameVideoChannelsResponse>;
    /**
     * getCustomPagesHomepageInstance - Get instance custom homepage
    **/
    getCustomPagesHomepageInstance(config?: AxiosRequestConfig): Promise<operations.GetCustomPagesHomepageInstanceResponse>;
    /**
     * getPluginsNpmNamePublicSettings - Get a plugin's public settings
    **/
    getPluginsNpmNamePublicSettings(req: operations.GetPluginsNpmNamePublicSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetPluginsNpmNamePublicSettingsResponse>;
    /**
     * getPluginsNpmNameRegisteredSettings - Get a plugin's registered settings
    **/
    getPluginsNpmNameRegisteredSettings(req: operations.GetPluginsNpmNameRegisteredSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetPluginsNpmNameRegisteredSettingsResponse>;
    /**
     * getServerBlocklistAccounts - List account blocks
    **/
    getServerBlocklistAccounts(req: operations.GetServerBlocklistAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetServerBlocklistAccountsResponse>;
    /**
     * getServerBlocklistServers - List server blocks
    **/
    getServerBlocklistServers(req: operations.GetServerBlocklistServersRequest, config?: AxiosRequestConfig): Promise<operations.GetServerBlocklistServersResponse>;
    /**
     * getServerFollowers - List instances following the server
    **/
    getServerFollowers(req: operations.GetServerFollowersRequest, config?: AxiosRequestConfig): Promise<operations.GetServerFollowersResponse>;
    /**
     * getServerFollowing - List instances followed by the server
    **/
    getServerFollowing(req: operations.GetServerFollowingRequest, config?: AxiosRequestConfig): Promise<operations.GetServerFollowingResponse>;
    /**
     * getUsersMeHistoryVideos - List watched videos history
    **/
    getUsersMeHistoryVideos(req: operations.GetUsersMeHistoryVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersMeHistoryVideosResponse>;
    /**
     * getUsersMeNotifications - List my notifications
    **/
    getUsersMeNotifications(req: operations.GetUsersMeNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersMeNotificationsResponse>;
    /**
     * getUsersMeSubscriptions - Get my user subscriptions
    **/
    getUsersMeSubscriptions(req: operations.GetUsersMeSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersMeSubscriptionsResponse>;
    /**
     * getUsersMeSubscriptionsExist - Get if subscriptions exist for my user
    **/
    getUsersMeSubscriptionsExist(req: operations.GetUsersMeSubscriptionsExistRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersMeSubscriptionsExistResponse>;
    /**
     * getUsersMeSubscriptionsSubscriptionHandle - Get subscription of my user
    **/
    getUsersMeSubscriptionsSubscriptionHandle(req: operations.GetUsersMeSubscriptionsSubscriptionHandleRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersMeSubscriptionsSubscriptionHandleResponse>;
    /**
     * getUsersMeSubscriptionsVideos - List videos of subscriptions of my user
    **/
    getUsersMeSubscriptionsVideos(req: operations.GetUsersMeSubscriptionsVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersMeSubscriptionsVideosResponse>;
    /**
     * getUsersMeVideoPlaylistsVideosExist - Check video exists in my playlists
    **/
    getUsersMeVideoPlaylistsVideosExist(req: operations.GetUsersMeVideoPlaylistsVideosExistRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersMeVideoPlaylistsVideosExistResponse>;
    /**
     * getUsersMeVideoQuotaUsed - Get my user used quota
    **/
    getUsersMeVideoQuotaUsed(req: operations.GetUsersMeVideoQuotaUsedRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersMeVideoQuotaUsedResponse>;
    /**
     * getUsersMeVideos - Get videos of my user
    **/
    getUsersMeVideos(req: operations.GetUsersMeVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersMeVideosResponse>;
    /**
     * getUsersMeVideosImports - Get video imports of my user
    **/
    getUsersMeVideosImports(req: operations.GetUsersMeVideosImportsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersMeVideosImportsResponse>;
    /**
     * getUsersMeVideosVideoIdRating - Get rate of my user for a video
    **/
    getUsersMeVideosVideoIdRating(req: operations.GetUsersMeVideosVideoIdRatingRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersMeVideosVideoIdRatingResponse>;
    /**
     * getVideoPlaylistsPlaylistId - Get a video playlist
    **/
    getVideoPlaylistsPlaylistId(req: operations.GetVideoPlaylistsPlaylistIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoPlaylistsPlaylistIdResponse>;
    /**
     * getVideosIdCommentThreads - List threads of a video
    **/
    getVideosIdCommentThreads(req: operations.GetVideosIdCommentThreadsRequest, config?: AxiosRequestConfig): Promise<operations.GetVideosIdCommentThreadsResponse>;
    /**
     * getVideosIdCommentThreadsThreadId - Get a thread
    **/
    getVideosIdCommentThreadsThreadId(req: operations.GetVideosIdCommentThreadsThreadIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVideosIdCommentThreadsThreadIdResponse>;
    /**
     * getVideosOwnership - List video ownership changes
    **/
    getVideosOwnership(req: operations.GetVideosOwnershipRequest, config?: AxiosRequestConfig): Promise<operations.GetVideosOwnershipResponse>;
    /**
     * postAbuses - Report an abuse
    **/
    postAbuses(req: operations.PostAbusesRequest, config?: AxiosRequestConfig): Promise<operations.PostAbusesResponse>;
    /**
     * postAbusesAbuseIdMessages - Add message to an abuse
    **/
    postAbusesAbuseIdMessages(req: operations.PostAbusesAbuseIdMessagesRequest, config?: AxiosRequestConfig): Promise<operations.PostAbusesAbuseIdMessagesResponse>;
    /**
     * postServerBlocklistAccounts - Block an account
    **/
    postServerBlocklistAccounts(req: operations.PostServerBlocklistAccountsRequest, config?: AxiosRequestConfig): Promise<operations.PostServerBlocklistAccountsResponse>;
    /**
     * postServerBlocklistServers - Block a server
    **/
    postServerBlocklistServers(req: operations.PostServerBlocklistServersRequest, config?: AxiosRequestConfig): Promise<operations.PostServerBlocklistServersResponse>;
    /**
     * postServerFollowersNameWithHostAccept - Accept a pending follower to your server
    **/
    postServerFollowersNameWithHostAccept(req: operations.PostServerFollowersNameWithHostAcceptRequest, config?: AxiosRequestConfig): Promise<operations.PostServerFollowersNameWithHostAcceptResponse>;
    /**
     * postServerFollowersNameWithHostReject - Reject a pending follower to your server
    **/
    postServerFollowersNameWithHostReject(req: operations.PostServerFollowersNameWithHostRejectRequest, config?: AxiosRequestConfig): Promise<operations.PostServerFollowersNameWithHostRejectResponse>;
    /**
     * postServerFollowing - Follow a list of actors (PeerTube instance, channel or account)
    **/
    postServerFollowing(req: operations.PostServerFollowingRequest, config?: AxiosRequestConfig): Promise<operations.PostServerFollowingResponse>;
    /**
     * postUsersMeHistoryVideosRemove - Clear video history
    **/
    postUsersMeHistoryVideosRemove(req: operations.PostUsersMeHistoryVideosRemoveRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersMeHistoryVideosRemoveResponse>;
    /**
     * postUsersMeNotificationsRead - Mark notifications as read by their id
    **/
    postUsersMeNotificationsRead(req: operations.PostUsersMeNotificationsReadRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersMeNotificationsReadResponse>;
    /**
     * postUsersMeNotificationsReadAll - Mark all my notification as read
    **/
    postUsersMeNotificationsReadAll(req: operations.PostUsersMeNotificationsReadAllRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersMeNotificationsReadAllResponse>;
    /**
     * postUsersMeSubscriptions - Add subscription to my user
    **/
    postUsersMeSubscriptions(req: operations.PostUsersMeSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersMeSubscriptionsResponse>;
    /**
     * postVideosIdCommentThreads - Create a thread
    **/
    postVideosIdCommentThreads(req: operations.PostVideosIdCommentThreadsRequest, config?: AxiosRequestConfig): Promise<operations.PostVideosIdCommentThreadsResponse>;
    /**
     * postVideosIdCommentsCommentId - Reply to a thread of a video
    **/
    postVideosIdCommentsCommentId(req: operations.PostVideosIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.PostVideosIdCommentsCommentIdResponse>;
    /**
     * postVideosIdGiveOwnership - Request ownership change
    **/
    postVideosIdGiveOwnership(req: operations.PostVideosIdGiveOwnershipRequest, config?: AxiosRequestConfig): Promise<operations.PostVideosIdGiveOwnershipResponse>;
    /**
     * postVideosOwnershipIdAccept - Accept ownership change request
    **/
    postVideosOwnershipIdAccept(req: operations.PostVideosOwnershipIdAcceptRequest, config?: AxiosRequestConfig): Promise<operations.PostVideosOwnershipIdAcceptResponse>;
    /**
     * postVideosOwnershipIdRefuse - Refuse ownership change request
    **/
    postVideosOwnershipIdRefuse(req: operations.PostVideosOwnershipIdRefuseRequest, config?: AxiosRequestConfig): Promise<operations.PostVideosOwnershipIdRefuseResponse>;
    /**
     * putAbusesAbuseId - Update an abuse
    **/
    putAbusesAbuseId(req: operations.PutAbusesAbuseIdRequest, config?: AxiosRequestConfig): Promise<operations.PutAbusesAbuseIdResponse>;
    /**
     * putCustomPagesHomepageInstance - Set instance custom homepage
    **/
    putCustomPagesHomepageInstance(req: operations.PutCustomPagesHomepageInstanceRequest, config?: AxiosRequestConfig): Promise<operations.PutCustomPagesHomepageInstanceResponse>;
    /**
     * putPluginsNpmNameSettings - Set a plugin's settings
    **/
    putPluginsNpmNameSettings(req: operations.PutPluginsNpmNameSettingsRequest, config?: AxiosRequestConfig): Promise<operations.PutPluginsNpmNameSettingsResponse>;
    /**
     * putServerRedundancyHost - Update a server redundancy policy
    **/
    putServerRedundancyHost(req: operations.PutServerRedundancyHostRequest, config?: AxiosRequestConfig): Promise<operations.PutServerRedundancyHostResponse>;
    /**
     * putUsersMeNotificationSettings - Update my notification settings
    **/
    putUsersMeNotificationSettings(req: operations.PutUsersMeNotificationSettingsRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersMeNotificationSettingsResponse>;
    /**
     * putVideosIdRate - Like/dislike a video
    **/
    putVideosIdRate(req: operations.PutVideosIdRateRequest, config?: AxiosRequestConfig): Promise<operations.PutVideosIdRateResponse>;
    /**
     * addPlugin - Install a plugin
    **/
    addPlugin(req: operations.AddPluginRequest, config?: AxiosRequestConfig): Promise<operations.AddPluginResponse>;
    /**
     * addUser - Create a user
    **/
    addUser(req: operations.AddUserRequest, config?: AxiosRequestConfig): Promise<operations.AddUserResponse>;
    /**
     * addVideoBlock - Block a video
    **/
    addVideoBlock(req: operations.AddVideoBlockRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoBlockResponse>;
    /**
     * addVideoChannel - Create a video channel
    **/
    addVideoChannel(req: operations.AddVideoChannelRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoChannelResponse>;
    /**
     * addVideoPlaylistVideo - Add a video in a playlist
    **/
    addVideoPlaylistVideo(req: operations.AddVideoPlaylistVideoRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoPlaylistVideoResponse>;
    /**
     * addView - Add a view to a video
    **/
    addView(req: operations.AddViewRequest, config?: AxiosRequestConfig): Promise<operations.AddViewResponse>;
    /**
     * delCustomConfig - Delete instance runtime configuration
    **/
    delCustomConfig(req: operations.DelCustomConfigRequest, config?: AxiosRequestConfig): Promise<operations.DelCustomConfigResponse>;
    /**
     * delMirroredVideo - Delete a mirror done on a video
    **/
    delMirroredVideo(req: operations.DelMirroredVideoRequest, config?: AxiosRequestConfig): Promise<operations.DelMirroredVideoResponse>;
    /**
     * delUser - Delete a user
    **/
    delUser(req: operations.DelUserRequest, config?: AxiosRequestConfig): Promise<operations.DelUserResponse>;
    /**
     * delVideo - Delete a video
    **/
    delVideo(req: operations.DelVideoRequest, config?: AxiosRequestConfig): Promise<operations.DelVideoResponse>;
    /**
     * delVideoBlock - Unblock a video by its id
    **/
    delVideoBlock(req: operations.DelVideoBlockRequest, config?: AxiosRequestConfig): Promise<operations.DelVideoBlockResponse>;
    /**
     * delVideoCaption - Delete a video caption
    **/
    delVideoCaption(req: operations.DelVideoCaptionRequest, config?: AxiosRequestConfig): Promise<operations.DelVideoCaptionResponse>;
    /**
     * delVideoChannel - Delete a video channel
    **/
    delVideoChannel(req: operations.DelVideoChannelRequest, config?: AxiosRequestConfig): Promise<operations.DelVideoChannelResponse>;
    /**
     * delVideoPlaylistVideo - Delete an element from a playlist
    **/
    delVideoPlaylistVideo(req: operations.DelVideoPlaylistVideoRequest, config?: AxiosRequestConfig): Promise<operations.DelVideoPlaylistVideoResponse>;
    /**
     * getAbout - Get instance "About" information
    **/
    getAbout(config?: AxiosRequestConfig): Promise<operations.GetAboutResponse>;
    /**
     * getAbuses - List abuses
    **/
    getAbuses(req: operations.GetAbusesRequest, config?: AxiosRequestConfig): Promise<operations.GetAbusesResponse>;
    /**
     * getAccount - Get an account
    **/
    getAccount(req: operations.GetAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountResponse>;
    /**
     * getAccountVideos - List videos of an account
    **/
    getAccountVideos(req: operations.GetAccountVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountVideosResponse>;
    /**
     * getAccounts - List accounts
    **/
    getAccounts(req: operations.GetAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsResponse>;
    /**
     * getAvailablePlugins - List available plugins
    **/
    getAvailablePlugins(req: operations.GetAvailablePluginsRequest, config?: AxiosRequestConfig): Promise<operations.GetAvailablePluginsResponse>;
    /**
     * getCategories - List available video categories
    **/
    getCategories(config?: AxiosRequestConfig): Promise<operations.GetCategoriesResponse>;
    /**
     * getConfig - Get instance public configuration
    **/
    getConfig(config?: AxiosRequestConfig): Promise<operations.GetConfigResponse>;
    /**
     * getCustomConfig - Get instance runtime configuration
    **/
    getCustomConfig(req: operations.GetCustomConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomConfigResponse>;
    /**
     * getJobs - List instance jobs
    **/
    getJobs(req: operations.GetJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetJobsResponse>;
    /**
     * getLanguages - List available video languages
    **/
    getLanguages(config?: AxiosRequestConfig): Promise<operations.GetLanguagesResponse>;
    /**
     * getLicences - List available video licences
    **/
    getLicences(config?: AxiosRequestConfig): Promise<operations.GetLicencesResponse>;
    /**
     * getLiveId - Get information about a live
    **/
    getLiveId(req: operations.GetLiveIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLiveIdResponse>;
    /**
     * getMirroredVideos - List videos being mirrored
    **/
    getMirroredVideos(req: operations.GetMirroredVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetMirroredVideosResponse>;
    /**
     * getMyAbuses - List my abuses
    **/
    getMyAbuses(req: operations.GetMyAbusesRequest, config?: AxiosRequestConfig): Promise<operations.GetMyAbusesResponse>;
    /**
     * getOAuthClient - Login prerequisite
     *
     * You need to retrieve a client id and secret before [logging in](#operation/getOAuthToken).
    **/
    getOAuthClient(config?: AxiosRequestConfig): Promise<operations.GetOAuthClientResponse>;
    /**
     * getOAuthToken - Login
     *
     * With your [client id and secret](#operation/getOAuthClient), you can retrieve an access and refresh tokens.
    **/
    getOAuthToken(req: operations.GetOAuthTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetOAuthTokenResponse>;
    /**
     * getPlaylistPrivacyPolicies - List available playlist privacy policies
    **/
    getPlaylistPrivacyPolicies(config?: AxiosRequestConfig): Promise<operations.GetPlaylistPrivacyPoliciesResponse>;
    /**
     * getPlaylists - List video playlists
    **/
    getPlaylists(req: operations.GetPlaylistsRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaylistsResponse>;
    /**
     * getPlugin - Get a plugin
    **/
    getPlugin(req: operations.GetPluginRequest, config?: AxiosRequestConfig): Promise<operations.GetPluginResponse>;
    /**
     * getPlugins - List plugins
    **/
    getPlugins(req: operations.GetPluginsRequest, config?: AxiosRequestConfig): Promise<operations.GetPluginsResponse>;
    /**
     * getPrivacyPolicies - List available video privacy policies
    **/
    getPrivacyPolicies(config?: AxiosRequestConfig): Promise<operations.GetPrivacyPoliciesResponse>;
    /**
     * getSyndicatedComments - List comments on videos
    **/
    getSyndicatedComments(req: operations.GetSyndicatedCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSyndicatedCommentsResponse>;
    /**
     * getSyndicatedSubscriptionVideos - List videos of subscriptions tied to a token
    **/
    getSyndicatedSubscriptionVideos(req: operations.GetSyndicatedSubscriptionVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetSyndicatedSubscriptionVideosResponse>;
    /**
     * getSyndicatedVideos - List videos
    **/
    getSyndicatedVideos(req: operations.GetSyndicatedVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetSyndicatedVideosResponse>;
    /**
     * getUser - Get a user
    **/
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * getUserInfo - Get my user information
    **/
    getUserInfo(req: operations.GetUserInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetUserInfoResponse>;
    /**
     * getUsers - List users
    **/
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * getVideo - Get a video
    **/
    getVideo(req: operations.GetVideoRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoResponse>;
    /**
     * getVideoBlocks - List video blocks
    **/
    getVideoBlocks(req: operations.GetVideoBlocksRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoBlocksResponse>;
    /**
     * getVideoCaptions - List captions of a video
    **/
    getVideoCaptions(req: operations.GetVideoCaptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoCaptionsResponse>;
    /**
     * getVideoChannel - Get a video channel
    **/
    getVideoChannel(req: operations.GetVideoChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoChannelResponse>;
    /**
     * getVideoChannelVideos - List videos of a video channel
    **/
    getVideoChannelVideos(req: operations.GetVideoChannelVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoChannelVideosResponse>;
    /**
     * getVideoChannels - List video channels
    **/
    getVideoChannels(req: operations.GetVideoChannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoChannelsResponse>;
    /**
     * getVideoDesc - Get complete video description
    **/
    getVideoDesc(req: operations.GetVideoDescRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoDescResponse>;
    /**
     * getVideoPlaylistVideos - List videos of a playlist
    **/
    getVideoPlaylistVideos(req: operations.GetVideoPlaylistVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetVideoPlaylistVideosResponse>;
    /**
     * getVideos - List videos
    **/
    getVideos(req: operations.GetVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetVideosResponse>;
    /**
     * putCustomConfig - Set instance runtime configuration
    **/
    putCustomConfig(req: operations.PutCustomConfigRequest, config?: AxiosRequestConfig): Promise<operations.PutCustomConfigResponse>;
    /**
     * putMirroredVideo - Mirror a video
    **/
    putMirroredVideo(req: operations.PutMirroredVideoRequest, config?: AxiosRequestConfig): Promise<operations.PutMirroredVideoResponse>;
    /**
     * putUser - Update a user
    **/
    putUser(req: operations.PutUserRequest, config?: AxiosRequestConfig): Promise<operations.PutUserResponse>;
    /**
     * putUserInfo - Update my user information
    **/
    putUserInfo(req: operations.PutUserInfoRequest, config?: AxiosRequestConfig): Promise<operations.PutUserInfoResponse>;
    /**
     * putVideoChannel - Update a video channel
    **/
    putVideoChannel(req: operations.PutVideoChannelRequest, config?: AxiosRequestConfig): Promise<operations.PutVideoChannelResponse>;
    /**
     * putVideoPlaylistVideo - Update a playlist element
    **/
    putVideoPlaylistVideo(req: operations.PutVideoPlaylistVideoRequest, config?: AxiosRequestConfig): Promise<operations.PutVideoPlaylistVideoResponse>;
    /**
     * registerUser - Register a user
    **/
    registerUser(req: operations.RegisterUserRequest, config?: AxiosRequestConfig): Promise<operations.RegisterUserResponse>;
    /**
     * reorderVideoPlaylist - Reorder a playlist
    **/
    reorderVideoPlaylist(req: operations.ReorderVideoPlaylistRequest, config?: AxiosRequestConfig): Promise<operations.ReorderVideoPlaylistResponse>;
    /**
     * resendEmailToVerifyUser - Resend user verification link
    **/
    resendEmailToVerifyUser(config?: AxiosRequestConfig): Promise<operations.ResendEmailToVerifyUserResponse>;
    /**
     * revokeOAuthToken - Logout
     *
     * Revokes your access token and its associated refresh token, destroying your current session.
    **/
    revokeOAuthToken(req: operations.RevokeOAuthTokenRequest, config?: AxiosRequestConfig): Promise<operations.RevokeOAuthTokenResponse>;
    /**
     * setProgress - Set watching progress of a video
    **/
    setProgress(req: operations.SetProgressRequest, config?: AxiosRequestConfig): Promise<operations.SetProgressResponse>;
    /**
     * uninstallPlugin - Uninstall a plugin
    **/
    uninstallPlugin(req: operations.UninstallPluginRequest, config?: AxiosRequestConfig): Promise<operations.UninstallPluginResponse>;
    /**
     * updateLiveId - Update information about a live
    **/
    updateLiveId(req: operations.UpdateLiveIdRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLiveIdResponse>;
    /**
     * updatePlugin - Update a plugin
    **/
    updatePlugin(req: operations.UpdatePluginRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePluginResponse>;
    /**
     * uploadResumable - Send chunk for the resumable upload of a video
     *
     * Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to continue, pause or resume the upload of a video
    **/
    uploadResumable(req: operations.UploadResumableRequest, config?: AxiosRequestConfig): Promise<operations.UploadResumableResponse>;
    /**
     * uploadResumableCancel - Cancel the resumable upload of a video, deleting any data uploaded so far
     *
     * Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to cancel the upload of a video
    **/
    uploadResumableCancel(req: operations.UploadResumableCancelRequest, config?: AxiosRequestConfig): Promise<operations.UploadResumableCancelResponse>;
    /**
     * uploadResumableInit - Initialize the resumable upload of a video
     *
     * Uses [a resumable protocol](https://github.com/kukhariev/node-uploadx/blob/master/proto.md) to initialize the upload of a video
    **/
    uploadResumableInit(req: operations.UploadResumableInitRequest, config?: AxiosRequestConfig): Promise<operations.UploadResumableInitResponse>;
    /**
     * verifyUser - Verify a user
     *
     * Following a user registration, the new user will receive an email asking to click a link
     * containing a secret.
     *
    **/
    verifyUser(req: operations.VerifyUserRequest, config?: AxiosRequestConfig): Promise<operations.VerifyUserResponse>;
}
export {};
