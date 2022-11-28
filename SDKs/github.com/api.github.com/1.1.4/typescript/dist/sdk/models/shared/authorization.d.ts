import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
import { AppPermissions } from "./apppermissions";
export declare class AuthorizationApp extends SpeakeasyBase {
    clientId: string;
    name: string;
    url: string;
}
export declare enum AuthorizationScopedInstallationRepositorySelectionEnum {
    All = "all",
    Selected = "selected"
}
export declare class AuthorizationScopedInstallation extends SpeakeasyBase {
    account: SimpleUser;
    hasMultipleSingleFiles?: boolean;
    permissions: AppPermissions;
    repositoriesUrl: string;
    repositorySelection: AuthorizationScopedInstallationRepositorySelectionEnum;
    singleFileName: string;
    singleFilePaths?: string[];
}
export declare class AuthorizationSimpleUser extends SpeakeasyBase {
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
 * The authorization for an OAuth app, GitHub App, or a Personal Access Token.
**/
export declare class Authorization extends SpeakeasyBase {
    app: AuthorizationApp;
    createdAt: Date;
    fingerprint: string;
    hashedToken: string;
    id: number;
    installation?: AuthorizationScopedInstallation;
    note: string;
    noteUrl: string;
    scopes: string[];
    token: string;
    tokenLastEight: string;
    updatedAt: Date;
    url: string;
    user?: AuthorizationSimpleUser;
}
