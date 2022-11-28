import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationFull } from "./organizationfull";
export declare class TeamFullTeamSimple extends SpeakeasyBase {
    description: string;
    htmlUrl: string;
    id: number;
    ldapDn?: string;
    membersUrl: string;
    name: string;
    nodeId: string;
    permission: string;
    privacy?: string;
    repositoriesUrl: string;
    slug: string;
    url: string;
}
export declare enum TeamFullPrivacyEnum {
    Closed = "closed",
    Secret = "secret"
}
/**
 * Groups of organization members that gives permissions on specified repositories.
**/
export declare class TeamFull extends SpeakeasyBase {
    createdAt: Date;
    description: string;
    htmlUrl: string;
    id: number;
    ldapDn?: string;
    membersCount: number;
    membersUrl: string;
    name: string;
    nodeId: string;
    organization: OrganizationFull;
    parent?: TeamFullTeamSimple;
    permission: string;
    privacy?: TeamFullPrivacyEnum;
    reposCount: number;
    repositoriesUrl: string;
    slug: string;
    updatedAt: Date;
    url: string;
}
