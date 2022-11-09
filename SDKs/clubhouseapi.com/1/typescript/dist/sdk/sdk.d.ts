import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    GetCheckForUpdate(req: operations.GetCheckForUpdateRequest, config?: AxiosRequestConfig): Promise<operations.GetCheckForUpdateResponse>;
    GetGetActionableNotifications(config?: AxiosRequestConfig): Promise<operations.GetGetActionableNotificationsResponse>;
    GetGetAllTopics(config?: AxiosRequestConfig): Promise<operations.GetGetAllTopicsResponse>;
    GetGetChannels(config?: AxiosRequestConfig): Promise<operations.GetGetChannelsResponse>;
    GetGetEvents(req: operations.GetGetEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetGetEventsResponse>;
    GetGetNotifications(req: operations.GetGetNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGetNotificationsResponse>;
    GetGetSettings(config?: AxiosRequestConfig): Promise<operations.GetGetSettingsResponse>;
    GetGetSuggestedFollowsAll(req: operations.GetGetSuggestedFollowsAllRequest, config?: AxiosRequestConfig): Promise<operations.GetGetSuggestedFollowsAllResponse>;
    GetGetUsersForTopic(req: operations.GetGetUsersForTopicRequest, config?: AxiosRequestConfig): Promise<operations.GetGetUsersForTopicResponse>;
    GetGetWelcomeChannel(config?: AxiosRequestConfig): Promise<operations.GetGetWelcomeChannelResponse>;
    PostCallPhoneNumberAuth(req: operations.PostCallPhoneNumberAuthRequest, config?: AxiosRequestConfig): Promise<operations.PostCallPhoneNumberAuthResponse>;
    PostCheckWaitlistStatus(config?: AxiosRequestConfig): Promise<operations.PostCheckWaitlistStatusResponse>;
    PostCompletePhoneNumberAuth(req: operations.PostCompletePhoneNumberAuthRequest, config?: AxiosRequestConfig): Promise<operations.PostCompletePhoneNumberAuthResponse>;
    PostCreateChannel(req: operations.PostCreateChannelRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateChannelResponse>;
    PostFollow(req: operations.PostFollowRequest, config?: AxiosRequestConfig): Promise<operations.PostFollowResponse>;
    PostGetClub(req: operations.PostGetClubRequest, config?: AxiosRequestConfig): Promise<operations.PostGetClubResponse>;
    PostGetClubsForTopic(req: operations.PostGetClubsForTopicRequest, config?: AxiosRequestConfig): Promise<operations.PostGetClubsForTopicResponse>;
    PostGetCreateChannelTargets(req: operations.PostGetCreateChannelTargetsRequest, config?: AxiosRequestConfig): Promise<operations.PostGetCreateChannelTargetsResponse>;
    PostGetFollowing(req: operations.PostGetFollowingRequest, config?: AxiosRequestConfig): Promise<operations.PostGetFollowingResponse>;
    PostGetOnlineFriends(req: operations.PostGetOnlineFriendsRequest, config?: AxiosRequestConfig): Promise<operations.PostGetOnlineFriendsResponse>;
    PostGetProfile(req: operations.PostGetProfileRequest, config?: AxiosRequestConfig): Promise<operations.PostGetProfileResponse>;
    PostGetReleaseNotes(config?: AxiosRequestConfig): Promise<operations.PostGetReleaseNotesResponse>;
    PostGetSuggestedClubInvites(req: operations.PostGetSuggestedClubInvitesRequest, config?: AxiosRequestConfig): Promise<operations.PostGetSuggestedClubInvitesResponse>;
    PostGetSuggestedFollowsFriendsOnly(req: operations.PostGetSuggestedFollowsFriendsOnlyRequest, config?: AxiosRequestConfig): Promise<operations.PostGetSuggestedFollowsFriendsOnlyResponse>;
    PostGetSuggestedFollowsSimilar(req: operations.PostGetSuggestedFollowsSimilarRequest, config?: AxiosRequestConfig): Promise<operations.PostGetSuggestedFollowsSimilarResponse>;
    /**
     * (also see https://zerforschung.org/posts/clubhouse-telefonnummern-en/ for @zerforschung's analysis of the privacy implications of this API)
    **/
    PostGetSuggestedInvites(req: operations.PostGetSuggestedInvitesRequest, config?: AxiosRequestConfig): Promise<operations.PostGetSuggestedInvitesResponse>;
    PostGetSuggestedSpeakers(req: operations.PostGetSuggestedSpeakersRequest, config?: AxiosRequestConfig): Promise<operations.PostGetSuggestedSpeakersResponse>;
    PostGetTopic(req: operations.PostGetTopicRequest, config?: AxiosRequestConfig): Promise<operations.PostGetTopicResponse>;
    PostInviteFromWaitlist(req: operations.PostInviteFromWaitlistRequest, config?: AxiosRequestConfig): Promise<operations.PostInviteFromWaitlistResponse>;
    PostInviteToApp(req: operations.PostInviteToAppRequest, config?: AxiosRequestConfig): Promise<operations.PostInviteToAppResponse>;
    PostJoinChannel(req: operations.PostJoinChannelRequest, config?: AxiosRequestConfig): Promise<operations.PostJoinChannelResponse>;
    PostLeaveChannel(req: operations.PostLeaveChannelRequest, config?: AxiosRequestConfig): Promise<operations.PostLeaveChannelResponse>;
    PostMe(req: operations.PostMeRequest, config?: AxiosRequestConfig): Promise<operations.PostMeResponse>;
    PostRecordActionTrails(req: operations.PostRecordActionTrailsRequest, config?: AxiosRequestConfig): Promise<operations.PostRecordActionTrailsResponse>;
    PostRefreshToken(req: operations.PostRefreshTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostRefreshTokenResponse>;
    PostResendPhoneNumberAuth(req: operations.PostResendPhoneNumberAuthRequest, config?: AxiosRequestConfig): Promise<operations.PostResendPhoneNumberAuthResponse>;
    PostSearchClubs(req: operations.PostSearchClubsRequest, config?: AxiosRequestConfig): Promise<operations.PostSearchClubsResponse>;
    PostSearchUsers(req: operations.PostSearchUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostSearchUsersResponse>;
    PostStartPhoneNumberAuth(req: operations.PostStartPhoneNumberAuthRequest, config?: AxiosRequestConfig): Promise<operations.PostStartPhoneNumberAuthResponse>;
    PostUpdateNotifications(req: operations.PostUpdateNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateNotificationsResponse>;
    PostUpdateUsername(req: operations.PostUpdateUsernameRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateUsernameResponse>;
}
export {};
