import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NodePermissions } from "./nodepermissions";
import { PublicKeyContainer } from "./publickeycontainer";
import { UserInfo } from "./userinfo";


// RoomUser
/** 
 * User information
**/
export class RoomUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName: string;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isGranted" })
  isGranted: boolean;

  @Metadata({ data: "json, name=login" })
  login: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: NodePermissions;

  @Metadata({ data: "json, name=publicKeyContainer" })
  publicKeyContainer?: PublicKeyContainer;

  @Metadata({ data: "json, name=userInfo" })
  userInfo: UserInfo;
}
