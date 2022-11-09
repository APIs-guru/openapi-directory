import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=Arn" })
  arn: string;

  @Metadata({ data: "json, name=HomeDirectory" })
  homeDirectory?: string;

  @Metadata({ data: "json, name=HomeDirectoryMappings", elemType: shared.HomeDirectoryMapEntry })
  homeDirectoryMappings?: HomeDirectoryMapEntry[];

  @Metadata({ data: "json, name=HomeDirectoryType" })
  homeDirectoryType?: HomeDirectoryTypeEnum;

  @Metadata({ data: "json, name=Policy" })
  policy?: string;

  @Metadata({ data: "json, name=PosixProfile" })
  posixProfile?: PosixProfile;

  @Metadata({ data: "json, name=Role" })
  role?: string;

  @Metadata({ data: "json, name=SshPublicKeys", elemType: shared.SshPublicKey })
  sshPublicKeys?: SshPublicKey[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=UserName" })
  userName?: string;
}
