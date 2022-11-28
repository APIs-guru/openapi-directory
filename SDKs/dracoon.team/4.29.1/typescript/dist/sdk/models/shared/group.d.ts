import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
import { RoleList } from "./rolelist";
/**
 * Group information
**/
export declare class Group extends SpeakeasyBase {
    cntUsers: number;
    createdAt: Date;
    createdBy: UserInfo;
    expireAt?: Date;
    groupRoles?: RoleList;
    id: number;
    name: string;
    updatedAt?: Date;
    updatedBy?: UserInfo;
}
