import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamTeamSimple extends SpeakeasyBase {
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
/**
 * Groups of organization members that gives permissions on specified repositories.
**/
export declare class Team extends SpeakeasyBase {
    description: string;
    htmlUrl: string;
    id: number;
    membersUrl: string;
    name: string;
    nodeId: string;
    parent?: TeamTeamSimple;
    permission: string;
    privacy?: string;
    repositoriesUrl: string;
    slug: string;
    url: string;
}
