import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsCheckAuthorizationPathParams extends SpeakeasyBase {
    accessToken: string;
    clientId: string;
}
export declare class AppsCheckAuthorizationAuthorizationApp extends SpeakeasyBase {
    clientId: string;
    name: string;
    url: string;
}
export declare enum AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum {
    All = "all",
    Selected = "selected"
}
export declare class AppsCheckAuthorizationAuthorizationScopedInstallation extends SpeakeasyBase {
    account: shared.SimpleUser;
    hasMultipleSingleFiles?: boolean;
    permissions: shared.AppPermissions;
    repositoriesUrl: string;
    repositorySelection: AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum;
    singleFileName: string;
    singleFilePaths?: string[];
}
export declare class AppsCheckAuthorizationAuthorizationSimpleUser extends SpeakeasyBase {
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
export declare class AppsCheckAuthorizationAuthorization extends SpeakeasyBase {
    app: AppsCheckAuthorizationAuthorizationApp;
    createdAt: Date;
    fingerprint: string;
    hashedToken: string;
    id: number;
    installation?: AppsCheckAuthorizationAuthorizationScopedInstallation;
    note: string;
    noteUrl: string;
    scopes: string[];
    token: string;
    tokenLastEight: string;
    updatedAt: Date;
    url: string;
    user?: AppsCheckAuthorizationAuthorizationSimpleUser;
}
export declare class AppsCheckAuthorizationRequest extends SpeakeasyBase {
    pathParams: AppsCheckAuthorizationPathParams;
}
export declare class AppsCheckAuthorizationResponse extends SpeakeasyBase {
    authorization?: AppsCheckAuthorizationAuthorization;
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
