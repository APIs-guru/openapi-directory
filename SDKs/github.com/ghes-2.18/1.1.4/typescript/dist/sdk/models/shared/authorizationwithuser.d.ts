import { SpeakeasyBase } from "../../../internal/utils";
export declare class AuthorizationWithUserApp extends SpeakeasyBase {
    clientId?: string;
    name?: string;
    url?: string;
}
export declare class AuthorizationWithUserUser extends SpeakeasyBase {
    avatarUrl?: string;
    eventsUrl?: string;
    followersUrl?: string;
    followingUrl?: string;
    gistsUrl?: string;
    gravatarId?: string;
    htmlUrl?: string;
    id?: number;
    login?: string;
    nodeId?: string;
    organizationsUrl?: string;
    receivedEventsUrl?: string;
    reposUrl?: string;
    siteAdmin?: boolean;
    starredUrl?: string;
    subscriptionsUrl?: string;
    type?: string;
    url?: string;
}
export declare class AuthorizationWithUser extends SpeakeasyBase {
    app?: AuthorizationWithUserApp;
    createdAt?: string;
    fingerprint?: string;
    hashedToken?: string;
    id?: number;
    note?: string;
    noteUrl?: string;
    scopes?: string[];
    token?: string;
    tokenLastEight?: string;
    updatedAt?: string;
    url?: string;
    user?: AuthorizationWithUserUser;
}
