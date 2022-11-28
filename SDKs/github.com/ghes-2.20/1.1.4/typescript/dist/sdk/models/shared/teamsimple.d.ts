import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Groups of organization members that gives permissions on specified repositories.
**/
export declare class TeamSimple extends SpeakeasyBase {
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
