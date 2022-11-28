import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContributorActivitySimpleUser extends SpeakeasyBase {
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
export declare class ContributorActivityWeeks extends SpeakeasyBase {
    a?: number;
    c?: number;
    d?: number;
    w?: string;
}
/**
 * Contributor Activity
**/
export declare class ContributorActivity extends SpeakeasyBase {
    author: ContributorActivitySimpleUser;
    total: number;
    weeks: ContributorActivityWeeks[];
}
