import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApplicationGrantApp extends SpeakeasyBase {
    clientId: string;
    name: string;
    url: string;
}
export declare class ApplicationGrantSimpleUser extends SpeakeasyBase {
    avatarUrl: string;
    eventsUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    gravatarId: string;
    htmlUrl: string;
    id: number;
    login: string;
    nodeId: string;
    organizationsUrl: string;
    receivedEventsUrl: string;
    reposUrl: string;
    siteAdmin: boolean;
    starredAt?: string;
    starredUrl: string;
    subscriptionsUrl: string;
    type: string;
    url: string;
}
/**
 * The authorization associated with an OAuth Access.
**/
export declare class ApplicationGrant extends SpeakeasyBase {
    app: ApplicationGrantApp;
    createdAt: Date;
    id: number;
    scopes: string[];
    updatedAt: Date;
    url: string;
    user?: ApplicationGrantSimpleUser;
}
