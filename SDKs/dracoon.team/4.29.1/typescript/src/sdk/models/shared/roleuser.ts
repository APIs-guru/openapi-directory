import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";



// RoleUser
/** 
 * User information
**/
export class RoleUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=isMember" })
  isMember: boolean;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo: UserInfo;
}
