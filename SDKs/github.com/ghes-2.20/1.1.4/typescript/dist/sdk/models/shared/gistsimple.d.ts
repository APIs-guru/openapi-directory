import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
export declare class GistSimpleFiles extends SpeakeasyBase {
    content?: string;
    filename?: string;
    language?: string;
    rawUrl?: string;
    size?: number;
    truncated?: boolean;
    type?: string;
}
export declare class GistSimpleGistFiles extends SpeakeasyBase {
    filename?: string;
    language?: string;
    rawUrl?: string;
    size?: number;
    type?: string;
}
export declare class GistSimpleGistSimpleUser extends SpeakeasyBase {
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
 * Gist
**/
export declare class GistSimpleGist extends SpeakeasyBase {
    comments: number;
    commentsUrl: string;
    commitsUrl: string;
    createdAt: Date;
    description: string;
    files: Map<string, GistSimpleGistFiles>;
    forks?: any[];
    forksUrl: string;
    gitPullUrl: string;
    gitPushUrl: string;
    history?: any[];
    htmlUrl: string;
    id: string;
    nodeId: string;
    owner?: GistSimpleGistSimpleUser;
    public: boolean;
    truncated?: boolean;
    updatedAt: Date;
    url: string;
    user: GistSimpleGistSimpleUser;
}
/**
 * Gist Simple
**/
export declare class GistSimple extends SpeakeasyBase {
    comments?: number;
    commentsUrl?: string;
    commitsUrl?: string;
    createdAt?: string;
    description?: string;
    files?: Map<string, GistSimpleFiles>;
    forkOf?: GistSimpleGist;
    forks?: Map<string, any>[];
    forksUrl?: string;
    gitPullUrl?: string;
    gitPushUrl?: string;
    history?: Map<string, any>[];
    htmlUrl?: string;
    id?: string;
    nodeId?: string;
    owner?: SimpleUser;
    public?: boolean;
    truncated?: boolean;
    updatedAt?: string;
    url?: string;
    user?: string;
}
