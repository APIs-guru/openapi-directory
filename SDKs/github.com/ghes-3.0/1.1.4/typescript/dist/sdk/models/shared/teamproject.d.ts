import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
export declare class TeamProjectPermissions extends SpeakeasyBase {
    admin: boolean;
    read: boolean;
    write: boolean;
}
/**
 * A team's access to a project.
**/
export declare class TeamProject extends SpeakeasyBase {
    body: string;
    columnsUrl: string;
    createdAt: string;
    creator: SimpleUser;
    htmlUrl: string;
    id: number;
    name: string;
    nodeId: string;
    number: number;
    organizationPermission?: string;
    ownerUrl: string;
    permissions: TeamProjectPermissions;
    private?: boolean;
    state: string;
    updatedAt: string;
    url: string;
}
