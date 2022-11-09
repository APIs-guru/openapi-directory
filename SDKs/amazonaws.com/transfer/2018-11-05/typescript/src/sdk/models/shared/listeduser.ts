import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HomeDirectoryTypeEnum } from "./homedirectorytypeenum";


// ListedUser
/** 
 * Returns properties of the user that you specify.
**/
export class ListedUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=HomeDirectory" })
  homeDirectory?: string;

  @Metadata({ data: "json, name=HomeDirectoryType" })
  homeDirectoryType?: HomeDirectoryTypeEnum;

  @Metadata({ data: "json, name=Role" })
  role?: string;

  @Metadata({ data: "json, name=SshPublicKeyCount" })
  sshPublicKeyCount?: number;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;
}
