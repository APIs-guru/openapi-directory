import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAdminUsersListFlagJsonFlagEnum {
    Active = "active",
    New = "new",
    Staff = "staff",
    Suspended = "suspended",
    Blocked = "blocked",
    Suspect = "suspect"
}
export declare class GetAdminUsersListFlagJsonPathParams extends SpeakeasyBase {
    flag: GetAdminUsersListFlagJsonFlagEnum;
}
export declare enum GetAdminUsersListFlagJsonAscEnum {
    True = "true"
}
export declare enum GetAdminUsersListFlagJsonOrderEnum {
    Created = "created",
    LastEmailed = "last_emailed",
    Seen = "seen",
    Username = "username",
    Email = "email",
    TrustLevel = "trust_level",
    DaysVisited = "days_visited",
    PostsRead = "posts_read",
    TopicsViewed = "topics_viewed",
    Posts = "posts",
    ReadTime = "read_time"
}
export declare class GetAdminUsersListFlagJsonQueryParams extends SpeakeasyBase {
    asc?: GetAdminUsersListFlagJsonAscEnum;
    order?: GetAdminUsersListFlagJsonOrderEnum;
    page?: number;
    showEmails?: boolean;
}
export declare class GetAdminUsersListFlagJson200ApplicationJson extends SpeakeasyBase {
    active: boolean;
    admin: boolean;
    avatarTemplate: string;
    createdAt: string;
    createdAtAge: any;
    daysVisited: number;
    email?: string;
    flagLevel: number;
    id: number;
    lastEmailedAge: any;
    lastEmailedAt: string;
    lastSeenAge: any;
    lastSeenAt: string;
    manualLockedTrustLevel: string;
    moderator: boolean;
    name: string;
    postCount: number;
    postsReadCount: number;
    secondaryEmails?: any[];
    staged: boolean;
    timeRead: number;
    title: string;
    topicsEntered: number;
    trustLevel: number;
    username: string;
}
export declare class GetAdminUsersListFlagJsonRequest extends SpeakeasyBase {
    pathParams: GetAdminUsersListFlagJsonPathParams;
    queryParams: GetAdminUsersListFlagJsonQueryParams;
}
export declare class GetAdminUsersListFlagJsonResponse extends SpeakeasyBase {
    contentType: string;
    getAdminUsersListFlagJson200ApplicationJsonObjects?: GetAdminUsersListFlagJson200ApplicationJson[];
    statusCode: number;
}
