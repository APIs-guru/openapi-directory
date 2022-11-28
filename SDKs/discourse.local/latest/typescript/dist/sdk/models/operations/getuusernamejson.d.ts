import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUUsernameJsonPathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetUUsernameJsonHeaders extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
}
export declare class GetUUsernameJson200ApplicationJsonUserGroupUsers extends SpeakeasyBase {
    groupId?: number;
    notificationLevel?: number;
    userId?: number;
}
export declare class GetUUsernameJson200ApplicationJsonUserGroups extends SpeakeasyBase {
    allowMembershipRequests?: boolean;
    automatic?: boolean;
    bioCooked?: string;
    bioExcerpt?: string;
    bioRaw?: string;
    canAdminGroup?: boolean;
    canSeeMembers?: boolean;
    defaultNotificationLevel?: number;
    displayName?: string;
    flairBgColor?: string;
    flairColor?: string;
    flairUrl?: string;
    fullName?: string;
    grantTrustLevel?: string;
    hasMessages?: boolean;
    id?: number;
    incomingEmail?: string;
    membersVisibilityLevel?: number;
    membershipRequestTemplate?: string;
    mentionableLevel?: number;
    messageableLevel?: number;
    name?: string;
    primaryGroup?: boolean;
    publicAdmission?: boolean;
    publicExit?: boolean;
    publishReadState?: boolean;
    title?: string;
    userCount?: number;
    visibilityLevel?: number;
}
export declare class GetUUsernameJson200ApplicationJsonUserUserAuthTokens extends SpeakeasyBase {
    browser?: string;
    clientIp?: string;
    createdAt?: string;
    device?: string;
    icon?: string;
    id?: number;
    isActive?: boolean;
    location?: string;
    os?: string;
    seenAt?: string;
}
export declare class GetUUsernameJson200ApplicationJsonUserUserOption extends SpeakeasyBase {
    allowPrivateMessages?: boolean;
    autoTrackTopicsAfterMsecs?: number;
    automaticallyUnpinTopics?: boolean;
    colorSchemeId?: string;
    darkSchemeId?: string;
    digestAfterMinutes?: number;
    dynamicFavicon?: boolean;
    emailDigests?: boolean;
    emailInReplyTo?: boolean;
    emailLevel?: number;
    emailMessagesLevel?: number;
    emailPreviousReplies?: number;
    enableAllowedPmUsers?: boolean;
    enableDefer?: boolean;
    enableQuoting?: boolean;
    externalLinksInNewTab?: boolean;
    hideProfileAndPresence?: boolean;
    homepageId?: string;
    includeTl0InDigests?: boolean;
    likeNotificationFrequency?: number;
    mailingListMode?: boolean;
    mailingListModeFrequency?: number;
    newTopicDurationMinutes?: number;
    notificationLevelWhenReplying?: number;
    skipNewUserTips?: boolean;
    textSize?: string;
    textSizeSeq?: number;
    themeIds?: any[];
    themeKeySeq?: number;
    timezone?: string;
    titleCountMode?: string;
    userId?: number;
}
export declare class GetUUsernameJson200ApplicationJsonUser extends SpeakeasyBase {
    admin?: boolean;
    allowedPmUsernames?: any[];
    avatarTemplate?: string;
    badgeCount?: number;
    canBeDeleted?: boolean;
    canChangeBio?: boolean;
    canChangeLocation?: boolean;
    canChangeWebsite?: boolean;
    canDeleteAllPosts?: boolean;
    canEdit?: boolean;
    canEditEmail?: boolean;
    canEditName?: boolean;
    canEditUsername?: boolean;
    canIgnoreUser?: boolean;
    canMuteUser?: boolean;
    canSendPrivateMessageToUser?: boolean;
    canSendPrivateMessages?: boolean;
    canUploadProfileHeader?: boolean;
    canUploadUserCardBackground?: boolean;
    createdAt?: string;
    customFields?: Map<string, any>;
    featuredTopic?: string;
    featuredUserBadgeIds?: any[];
    flairBgColor?: string;
    flairColor?: string;
    flairUrl?: string;
    groupUsers?: GetUUsernameJson200ApplicationJsonUserGroupUsers[];
    groups?: GetUUsernameJson200ApplicationJsonUserGroups[];
    hasTitleBadges?: boolean;
    id?: number;
    ignored?: boolean;
    ignoredUsernames?: any[];
    invitedBy?: string;
    lastPostedAt?: string;
    lastSeenAt?: string;
    locale?: string;
    mailingListPostsPerDay?: number;
    moderator?: boolean;
    muted?: boolean;
    mutedCategoryIds?: any[];
    mutedTags?: any[];
    mutedUsernames?: any[];
    name?: string;
    pendingCount?: number;
    postCount?: number;
    primaryGroupId?: string;
    primaryGroupName?: string;
    profileViewCount?: number;
    recentTimeRead?: number;
    regularCategoryIds?: any[];
    secondFactorEnabled?: boolean;
    staged?: boolean;
    systemAvatarTemplate?: string;
    systemAvatarUploadId?: string;
    timeRead?: number;
    title?: string;
    trackedCategoryIds?: any[];
    trackedTags?: any[];
    trustLevel?: number;
    uploadedAvatarId?: string;
    userApiKeys?: string;
    userAuthTokens?: GetUUsernameJson200ApplicationJsonUserUserAuthTokens[];
    userFields?: Map<string, any>;
    userOption?: GetUUsernameJson200ApplicationJsonUserUserOption;
    username?: string;
    watchedCategoryIds?: any[];
    watchedFirstPostCategoryIds?: any[];
    watchedTags?: any[];
    watchingFirstPostTags?: any[];
}
export declare class GetUUsernameJson200ApplicationJson extends SpeakeasyBase {
    user?: GetUUsernameJson200ApplicationJsonUser;
    userBadges?: any[];
}
export declare class GetUUsernameJsonRequest extends SpeakeasyBase {
    pathParams: GetUUsernameJsonPathParams;
    headers: GetUUsernameJsonHeaders;
}
export declare class GetUUsernameJsonResponse extends SpeakeasyBase {
    contentType: string;
    getUUsernameJson200ApplicationJsonObject?: GetUUsernameJson200ApplicationJson;
    statusCode: number;
}
