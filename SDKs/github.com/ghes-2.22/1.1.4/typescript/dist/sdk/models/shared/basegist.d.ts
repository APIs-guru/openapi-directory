import { SpeakeasyBase } from "../../../internal/utils";
export declare class BaseGistFiles extends SpeakeasyBase {
    filename?: string;
    language?: string;
    rawUrl?: string;
    size?: number;
    type?: string;
}
export declare class BaseGistSimpleUser extends SpeakeasyBase {
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
 * Base Gist
**/
export declare class BaseGist extends SpeakeasyBase {
    comments: number;
    commentsUrl: string;
    commitsUrl: string;
    createdAt: Date;
    description: string;
    files: Map<string, BaseGistFiles>;
    forks?: any[];
    forksUrl: string;
    gitPullUrl: string;
    gitPushUrl: string;
    history?: any[];
    htmlUrl: string;
    id: string;
    nodeId: string;
    owner?: BaseGistSimpleUser;
    public: boolean;
    truncated?: boolean;
    updatedAt: Date;
    url: string;
    user: BaseGistSimpleUser;
}
