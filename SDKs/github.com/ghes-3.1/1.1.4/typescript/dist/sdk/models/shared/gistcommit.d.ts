import { SpeakeasyBase } from "../../../internal/utils";
export declare class GistCommitChangeStatus extends SpeakeasyBase {
    additions?: number;
    deletions?: number;
    total?: number;
}
export declare class GistCommitSimpleUser extends SpeakeasyBase {
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
 * Gist Commit
**/
export declare class GistCommit extends SpeakeasyBase {
    changeStatus: GistCommitChangeStatus;
    committedAt: Date;
    url: string;
    user: GistCommitSimpleUser;
    version: string;
}
