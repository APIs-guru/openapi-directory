import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserAuthData } from "./userauthdata";
import { UserAuthMethod } from "./userauthmethod";
import { CustomerData } from "./customerdata";
import { UserAttributes } from "./userattributes";
import { UserGroup } from "./usergroup";
import { RoleList } from "./rolelist";


// UserAccount
/** 
 * User information
**/
export class UserAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=authData" })
  authData: UserAuthData;

  @Metadata({ data: "json, name=authMethods", elemType: shared.UserAuthMethod })
  authMethods?: UserAuthMethod[];

  @Metadata({ data: "json, name=customer" })
  customer: CustomerData;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=expireAt" })
  expireAt?: Date;

  @Metadata({ data: "json, name=firstName" })
  firstName: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=hasManageableRooms" })
  hasManageableRooms: boolean;

  @Metadata({ data: "json, name=homeRoomId" })
  homeRoomId?: number;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isEncryptionEnabled" })
  isEncryptionEnabled?: boolean;

  @Metadata({ data: "json, name=isLocked" })
  isLocked: boolean;

  @Metadata({ data: "json, name=language" })
  language: string;

  @Metadata({ data: "json, name=lastLoginFailAt" })
  lastLoginFailAt?: Date;

  @Metadata({ data: "json, name=lastLoginFailIp" })
  lastLoginFailIp?: string;

  @Metadata({ data: "json, name=lastLoginSuccessAt" })
  lastLoginSuccessAt?: Date;

  @Metadata({ data: "json, name=lastLoginSuccessIp" })
  lastLoginSuccessIp?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName: string;

  @Metadata({ data: "json, name=lockStatus" })
  lockStatus: number;

  @Metadata({ data: "json, name=login" })
  login?: string;

  @Metadata({ data: "json, name=mustSetEmail" })
  mustSetEmail?: boolean;

  @Metadata({ data: "json, name=needsToAcceptEULA" })
  needsToAcceptEula?: boolean;

  @Metadata({ data: "json, name=needsToChangePassword" })
  needsToChangePassword: boolean;

  @Metadata({ data: "json, name=needsToChangeUserName" })
  needsToChangeUserName?: boolean;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=userAttributes" })
  userAttributes?: UserAttributes;

  @Metadata({ data: "json, name=userGroups", elemType: shared.UserGroup })
  userGroups?: UserGroup[];

  @Metadata({ data: "json, name=userName" })
  userName: string;

  @Metadata({ data: "json, name=userRoles" })
  userRoles: RoleList;
}
