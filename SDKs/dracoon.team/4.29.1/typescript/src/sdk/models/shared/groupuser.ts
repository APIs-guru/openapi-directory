import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserInfo } from "./userinfo";


// GroupUser
/** 
 * User information
**/
export class GroupUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName: string;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isMember" })
  isMember: boolean;

  @Metadata({ data: "json, name=login" })
  login: string;

  @Metadata({ data: "json, name=userInfo" })
  userInfo: UserInfo;
}
