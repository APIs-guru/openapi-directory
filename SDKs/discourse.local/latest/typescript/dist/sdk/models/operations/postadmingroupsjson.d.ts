import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAdminGroupsJsonRequestBodyGroup extends SpeakeasyBase {
    name: string;
}
export declare class PostAdminGroupsJsonRequestBody extends SpeakeasyBase {
    group: PostAdminGroupsJsonRequestBodyGroup;
}
export declare class PostAdminGroupsJson200ApplicationJsonBasicGroup extends SpeakeasyBase {
    allowMembershipRequests?: boolean;
    automatic?: boolean;
    automaticMembershipEmailDomains?: string;
    automaticMembershipRetroactive?: boolean;
    bioCooked?: string;
    bioExcerpt?: string;
    bioRaw?: string;
    canSeeMembers?: boolean;
    defaultNotificationLevel?: number;
    flairBgColor?: string;
    flairColor?: string;
    flairUrl?: string;
    fullName?: string;
    grantTrustLevel?: string;
    hasMessages?: boolean;
    id: number;
    incomingEmail?: string;
    membershipRequestTemplate?: string;
    membershipVisibilityLevel?: number;
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
export declare class PostAdminGroupsJson200ApplicationJson extends SpeakeasyBase {
    basicGroup: PostAdminGroupsJson200ApplicationJsonBasicGroup;
}
export declare class PostAdminGroupsJsonRequest extends SpeakeasyBase {
    request?: PostAdminGroupsJsonRequestBody;
}
export declare class PostAdminGroupsJsonResponse extends SpeakeasyBase {
    contentType: string;
    postAdminGroupsJson200ApplicationJsonObject?: PostAdminGroupsJson200ApplicationJson;
    statusCode: number;
}
