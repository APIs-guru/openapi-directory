import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://www.clubhouseapi.com/api/"];
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
     * getCheckForUpdate - Clubhouse uses this to check for updates when app is not installed from App Store (eg TestFlight)
    **/
    getCheckForUpdate(req: operations.GetCheckForUpdateRequest, config?: AxiosRequestConfig): Promise<operations.GetCheckForUpdateResponse>;
    /**
     * getGetActionableNotifications - get actionable notifications (the bell again)
    **/
    getGetActionableNotifications(config?: AxiosRequestConfig): Promise<operations.GetGetActionableNotificationsResponse>;
    /**
     * getGetAllTopics - gets all topics.
    **/
    getGetAllTopics(config?: AxiosRequestConfig): Promise<operations.GetGetAllTopicsResponse>;
    /**
     * getGetChannels - get all channels
    **/
    getGetChannels(config?: AxiosRequestConfig): Promise<operations.GetGetChannelsResponse>;
    /**
     * getGetEvents - the Upcoming for You page
    **/
    getGetEvents(req: operations.GetGetEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetGetEventsResponse>;
    /**
     * getGetNotifications - get notifications (the bell icon)
    **/
    getGetNotifications(req: operations.GetGetNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetGetNotificationsResponse>;
    /**
     * getGetSettings - get notification settings
    **/
    getGetSettings(config?: AxiosRequestConfig): Promise<operations.GetGetSettingsResponse>;
    /**
     * getGetSuggestedFollowsAll - gets suggested follows during signup
    **/
    getGetSuggestedFollowsAll(req: operations.GetGetSuggestedFollowsAllRequest, config?: AxiosRequestConfig): Promise<operations.GetGetSuggestedFollowsAllResponse>;
    /**
     * getGetUsersForTopic - looks up users by topic.
    **/
    getGetUsersForTopic(req: operations.GetGetUsersForTopicRequest, config?: AxiosRequestConfig): Promise<operations.GetGetUsersForTopicResponse>;
    /**
     * getGetWelcomeChannel - called during signup
    **/
    getGetWelcomeChannel(config?: AxiosRequestConfig): Promise<operations.GetGetWelcomeChannelResponse>;
    /**
     * postCallPhoneNumberAuth - Call phone number auth.
    **/
    postCallPhoneNumberAuth(req: operations.PostCallPhoneNumberAuthRequest, config?: AxiosRequestConfig): Promise<operations.PostCallPhoneNumberAuthResponse>;
    /**
     * postCheckWaitlistStatus - checks waitlist status.
    **/
    postCheckWaitlistStatus(config?: AxiosRequestConfig): Promise<operations.PostCheckWaitlistStatusResponse>;
    /**
     * postCompletePhoneNumberAuth - Call phone number auth.
    **/
    postCompletePhoneNumberAuth(req: operations.PostCompletePhoneNumberAuthRequest, config?: AxiosRequestConfig): Promise<operations.PostCompletePhoneNumberAuthResponse>;
    /**
     * postCreateChannel - creates a channel
    **/
    postCreateChannel(req: operations.PostCreateChannelRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateChannelResponse>;
    /**
     * postFollow - follows a user
    **/
    postFollow(req: operations.PostFollowRequest, config?: AxiosRequestConfig): Promise<operations.PostFollowResponse>;
    /**
     * postGetClub - gets club by id
    **/
    postGetClub(req: operations.PostGetClubRequest, config?: AxiosRequestConfig): Promise<operations.PostGetClubResponse>;
    /**
     * postGetClubsForTopic - looks up clubs by topic.
    **/
    postGetClubsForTopic(req: operations.PostGetClubsForTopicRequest, config?: AxiosRequestConfig): Promise<operations.PostGetClubsForTopicResponse>;
    /**
     * postGetCreateChannelTargets - is fetched when you tap Create Room
    **/
    postGetCreateChannelTargets(req: operations.PostGetCreateChannelTargetsRequest, config?: AxiosRequestConfig): Promise<operations.PostGetCreateChannelTargetsResponse>;
    /**
     * postGetFollowing - get a list of the users and clubs that this user is following. Returned users have bios truncated to ~80 characters.
    **/
    postGetFollowing(req: operations.PostGetFollowingRequest, config?: AxiosRequestConfig): Promise<operations.PostGetFollowingResponse>;
    /**
     * postGetOnlineFriends - gets online friends on the app homepage.
    **/
    postGetOnlineFriends(req: operations.PostGetOnlineFriendsRequest, config?: AxiosRequestConfig): Promise<operations.PostGetOnlineFriendsResponse>;
    /**
     * postGetProfile - looks up user profile by ID.
    **/
    postGetProfile(req: operations.PostGetProfileRequest, config?: AxiosRequestConfig): Promise<operations.PostGetProfileResponse>;
    /**
     * postGetReleaseNotes - gets release notes.
    **/
    postGetReleaseNotes(config?: AxiosRequestConfig): Promise<operations.PostGetReleaseNotesResponse>;
    /**
     * postGetSuggestedClubInvites - find users to invite to clubs based on phone number
    **/
    postGetSuggestedClubInvites(req: operations.PostGetSuggestedClubInvitesRequest, config?: AxiosRequestConfig): Promise<operations.PostGetSuggestedClubInvitesResponse>;
    /**
     * postGetSuggestedFollowsFriendsOnly - find people to follow by uploading contacts during signup
    **/
    postGetSuggestedFollowsFriendsOnly(req: operations.PostGetSuggestedFollowsFriendsOnlyRequest, config?: AxiosRequestConfig): Promise<operations.PostGetSuggestedFollowsFriendsOnlyResponse>;
    /**
     * postGetSuggestedFollowsSimilar - find similar users. (The Sparkles button on Clubhouse's profile page)
    **/
    postGetSuggestedFollowsSimilar(req: operations.PostGetSuggestedFollowsSimilarRequest, config?: AxiosRequestConfig): Promise<operations.PostGetSuggestedFollowsSimilarResponse>;
    /**
     * postGetSuggestedInvites - find users to invite based on phone number.
     *
     * (also see https://zerforschung.org/posts/clubhouse-telefonnummern-en/ for @zerforschung's analysis of the privacy implications of this API)
    **/
    postGetSuggestedInvites(req: operations.PostGetSuggestedInvitesRequest, config?: AxiosRequestConfig): Promise<operations.PostGetSuggestedInvitesResponse>;
    /**
     * postGetSuggestedSpeakers - gets suggested users when you start a private room
    **/
    postGetSuggestedSpeakers(req: operations.PostGetSuggestedSpeakersRequest, config?: AxiosRequestConfig): Promise<operations.PostGetSuggestedSpeakersResponse>;
    /**
     * postGetTopic - looks up topic by ID.
    **/
    postGetTopic(req: operations.PostGetTopicRequest, config?: AxiosRequestConfig): Promise<operations.PostGetTopicResponse>;
    /**
     * postInviteFromWaitlist - wave to another user on the waitlist to give them access
    **/
    postInviteFromWaitlist(req: operations.PostInviteFromWaitlistRequest, config?: AxiosRequestConfig): Promise<operations.PostInviteFromWaitlistResponse>;
    /**
     * postInviteToApp - invite a user to the app, using one of your invites
    **/
    postInviteToApp(req: operations.PostInviteToAppRequest, config?: AxiosRequestConfig): Promise<operations.PostInviteToAppResponse>;
    /**
     * postJoinChannel - join a channel.
    **/
    postJoinChannel(req: operations.PostJoinChannelRequest, config?: AxiosRequestConfig): Promise<operations.PostJoinChannelResponse>;
    /**
     * postLeaveChannel - leave a channel.
    **/
    postLeaveChannel(req: operations.PostLeaveChannelRequest, config?: AxiosRequestConfig): Promise<operations.PostLeaveChannelResponse>;
    /**
     * postMe - gets user
    **/
    postMe(req: operations.PostMeRequest, config?: AxiosRequestConfig): Promise<operations.PostMeResponse>;
    /**
     * postRecordActionTrails - analytics
    **/
    postRecordActionTrails(req: operations.PostRecordActionTrailsRequest, config?: AxiosRequestConfig): Promise<operations.PostRecordActionTrailsResponse>;
    /**
     * postRefreshToken - gets an access_token from a refresh_token.
    **/
    postRefreshToken(req: operations.PostRefreshTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostRefreshTokenResponse>;
    /**
     * postResendPhoneNumberAuth - Resend phone number auth.
    **/
    postResendPhoneNumberAuth(req: operations.PostResendPhoneNumberAuthRequest, config?: AxiosRequestConfig): Promise<operations.PostResendPhoneNumberAuthResponse>;
    /**
     * postSearchClubs - search clubs.
    **/
    postSearchClubs(req: operations.PostSearchClubsRequest, config?: AxiosRequestConfig): Promise<operations.PostSearchClubsResponse>;
    /**
     * postSearchUsers - search for users
    **/
    postSearchUsers(req: operations.PostSearchUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostSearchUsersResponse>;
    /**
     * postStartPhoneNumberAuth - Starts phone number auth.
    **/
    postStartPhoneNumberAuth(req: operations.PostStartPhoneNumberAuthRequest, config?: AxiosRequestConfig): Promise<operations.PostStartPhoneNumberAuthResponse>;
    /**
     * postUpdateNotifications - updates notification during signup.
    **/
    postUpdateNotifications(req: operations.PostUpdateNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateNotificationsResponse>;
    /**
     * postUpdateUsername - edits username.
    **/
    postUpdateUsername(req: operations.PostUpdateUsernameRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateUsernameResponse>;
}
export {};
