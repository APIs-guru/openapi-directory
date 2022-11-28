import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NodePermissions } from "./nodepermissions";
import { PublicKeyContainerOutput } from "./publickeycontainer";
import { UserInfo } from "./userinfo";



// RoomUserOutput
/** 
 * User information
**/
export class RoomUserOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=isGranted" })
  isGranted: boolean;

  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: NodePermissions;

  @SpeakeasyMetadata({ data: "json, name=publicKeyContainer" })
  publicKeyContainer?: PublicKeyContainerOutput;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo: UserInfo;
}
