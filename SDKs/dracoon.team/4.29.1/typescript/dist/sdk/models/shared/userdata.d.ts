import { SpeakeasyBase } from "../../../internal/utils";
import { UserAuthData } from "./userauthdata";
import { UserAuthMethod } from "./userauthmethod";
import { PublicKeyContainerOutput } from "./publickeycontainer";
import { UserAttributes } from "./userattributes";
import { RoleList } from "./rolelist";
/**
 * User information
**/
export declare class UserDataOutput extends SpeakeasyBase {
    authData: UserAuthData;
    authMethods?: UserAuthMethod[];
    avatarUuid: string;
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
    login?: string;
    phone?: string;
    publicKeyContainer?: PublicKeyContainerOutput;
    title?: string;
    userAttributes?: UserAttributes;
    userName: string;
    userRoles?: RoleList;
}
