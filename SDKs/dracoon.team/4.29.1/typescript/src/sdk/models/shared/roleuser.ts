import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserInfo } from "./userinfo";


// RoleUser
/** 
 * User information
**/
export class RoleUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isMember" })
  isMember: boolean;

  @Metadata({ data: "json, name=userInfo" })
  userInfo: UserInfo;
}
