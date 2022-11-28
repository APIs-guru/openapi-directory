import { SpeakeasyBase } from "../../../internal/utils";
import { UserAuthData } from "./userauthdata";
import { UserAuthMethod } from "./userauthmethod";
import { CustomerData } from "./customerdata";
import { UserAttributes } from "./userattributes";
import { UserGroup } from "./usergroup";
import { RoleList } from "./rolelist";
/**
 * User information
**/
export declare class UserAccount extends SpeakeasyBase {
    authData: UserAuthData;
    authMethods?: UserAuthMethod[];
    customer: CustomerData;
    email?: string;
    expireAt?: Date;
    firstName: string;
    gender?: string;
    hasManageableRooms: boolean;
    homeRoomId?: number;
    id: number;
    isEncryptionEnabled?: boolean;
    isLocked: boolean;
    language: string;
    lastLoginFailAt?: Date;
    lastLoginFailIp?: string;
    lastLoginSuccessAt?: Date;
    lastLoginSuccessIp?: string;
    lastName: string;
    lockStatus: number;
    login?: string;
    mustSetEmail?: boolean;
    needsToAcceptEula?: boolean;
    needsToChangePassword: boolean;
    needsToChangeUserName?: boolean;
    phone?: string;
    title?: string;
    userAttributes?: UserAttributes;
    userGroups?: UserGroup[];
    userName: string;
    userRoles: RoleList;
}
