import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserAttributes } from "./userattributes";
import { RoleList } from "./rolelist";


// UserItem
/** 
 * User information
**/
export class UserItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=avatarUuid" })
  avatarUuid: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @Metadata({ data: "json, name=firstName" })
  firstName: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=hasManageableRooms" })
  hasManageableRooms?: boolean;

  @Metadata({ data: "json, name=homeRoomId" })
  homeRoomId?: number;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isEncryptionEnabled" })
  isEncryptionEnabled?: boolean;

  @Metadata({ data: "json, name=isLocked" })
  isLocked: boolean;

  @Metadata({ data: "json, name=lastLoginSuccessAt" })
  lastLoginSuccessAt?: Date;

  @Metadata({ data: "json, name=lastName" })
  lastName: string;

  @Metadata({ data: "json, name=lockStatus" })
  lockStatus: number;

  @Metadata({ data: "json, name=login" })
  login: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=userAttributes" })
  userAttributes?: UserAttributes;

  @Metadata({ data: "json, name=userName" })
  userName: string;

  @Metadata({ data: "json, name=userRoles" })
  userRoles?: RoleList;
}
