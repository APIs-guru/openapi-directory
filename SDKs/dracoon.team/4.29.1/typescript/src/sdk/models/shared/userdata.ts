import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserAuthData } from "./userauthdata";
import { UserAuthMethod } from "./userauthmethod";
import { PublicKeyContainerOutput } from "./publickeycontainer";
import { UserAttributes } from "./userattributes";
import { RoleList } from "./rolelist";



// UserDataOutput
/** 
 * User information
**/
export class UserDataOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authData" })
  authData: UserAuthData;

  @SpeakeasyMetadata({ data: "json, name=authMethods", elemType: UserAuthMethod })
  authMethods?: UserAuthMethod[];

  @SpeakeasyMetadata({ data: "json, name=avatarUuid" })
  avatarUuid: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=hasManageableRooms" })
  hasManageableRooms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=homeRoomId" })
  homeRoomId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=isEncryptionEnabled" })
  isEncryptionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isLocked" })
  isLocked: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastLoginSuccessAt" })
  lastLoginSuccessAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=lockStatus" })
  lockStatus: number;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKeyContainer" })
  publicKeyContainer?: PublicKeyContainerOutput;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=userAttributes" })
  userAttributes?: UserAttributes;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName: string;

  @SpeakeasyMetadata({ data: "json, name=userRoles" })
  userRoles?: RoleList;
}
