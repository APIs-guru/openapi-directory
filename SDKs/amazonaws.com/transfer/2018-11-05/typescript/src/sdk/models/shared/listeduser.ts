import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HomeDirectoryTypeEnum } from "./homedirectorytypeenum";



// ListedUser
/** 
 * Returns properties of the user that you specify.
**/
export class ListedUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=HomeDirectory" })
  homeDirectory?: string;

  @SpeakeasyMetadata({ data: "json, name=HomeDirectoryType" })
  homeDirectoryType?: HomeDirectoryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=SshPublicKeyCount" })
  sshPublicKeyCount?: number;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;
}
