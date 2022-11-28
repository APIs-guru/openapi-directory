import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Create Group User
**/
export declare class GroupUserEntity extends SpeakeasyBase {
    admin?: boolean;
    groupId?: number;
    groupName?: string;
    userId?: number;
    usernames?: string[];
}
