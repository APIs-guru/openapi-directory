import { SpeakeasyBase } from "../../../internal/utils";
export declare class PageBuildError extends SpeakeasyBase {
    message: string;
}
export declare class PageBuildSimpleUser extends SpeakeasyBase {
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
 * Page Build
**/
export declare class PageBuild extends SpeakeasyBase {
    commit: string;
    createdAt: Date;
    duration: number;
    error: PageBuildError;
    pusher: PageBuildSimpleUser;
    status: string;
    updatedAt: Date;
    url: string;
}
