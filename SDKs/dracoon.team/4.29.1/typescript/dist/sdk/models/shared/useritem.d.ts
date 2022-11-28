import { SpeakeasyBase } from "../../../internal/utils";
import { UserAttributes } from "./userattributes";
import { RoleList } from "./rolelist";
/**
 * User information
**/
export declare class UserItem extends SpeakeasyBase {
    avatarUuid: string;
    createdAt?: Date;
    email?: string;
    expireAt?: Date;
    firstName: string;
    gender?: string;
    hasManageableRooms?: boolean;
    homeRoomId?: number;
    id: number;
    isEncryptionEnabled?: boolean;
    isLocked: boolean;
    lastLoginSuccessAt?: Date;
    lastName: string;
    lockStatus: number;
    login: string;
    phone?: string;
    title?: string;
    userAttributes?: UserAttributes;
    userName: string;
    userRoles?: RoleList;
}
