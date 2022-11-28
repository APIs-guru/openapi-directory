import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HomeDirectoryMapEntry } from "./homedirectorymapentry";
import { HomeDirectoryTypeEnum } from "./homedirectorytypeenum";
import { PosixProfile } from "./posixprofile";
import { SshPublicKey } from "./sshpublickey";
import { Tag } from "./tag";



// DescribedUser
/** 
 * Describes the properties of a user that was specified.
**/
export class DescribedUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=HomeDirectory" })
  homeDirectory?: string;

  @SpeakeasyMetadata({ data: "json, name=HomeDirectoryMappings", elemType: HomeDirectoryMapEntry })
  homeDirectoryMappings?: HomeDirectoryMapEntry[];

  @SpeakeasyMetadata({ data: "json, name=HomeDirectoryType" })
  homeDirectoryType?: HomeDirectoryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy?: string;

  @SpeakeasyMetadata({ data: "json, name=PosixProfile" })
  posixProfile?: PosixProfile;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=SshPublicKeys", elemType: SshPublicKey })
  sshPublicKeys?: SshPublicKey[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;
}
