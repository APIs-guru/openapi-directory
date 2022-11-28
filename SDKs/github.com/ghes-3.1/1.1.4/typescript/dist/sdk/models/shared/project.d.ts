import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProjectSimpleUser extends SpeakeasyBase {
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
export declare enum ProjectOrganizationPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin",
    None = "none"
}
/**
 * Projects are a way to organize columns and cards of work.
**/
export declare class Project extends SpeakeasyBase {
    body: string;
    columnsUrl: string;
    createdAt: Date;
    creator: ProjectSimpleUser;
    htmlUrl: string;
    id: number;
    name: string;
    nodeId: string;
    number: number;
    organizationPermission?: ProjectOrganizationPermissionEnum;
    ownerUrl: string;
    private?: boolean;
    state: string;
    updatedAt: Date;
    url: string;
}
