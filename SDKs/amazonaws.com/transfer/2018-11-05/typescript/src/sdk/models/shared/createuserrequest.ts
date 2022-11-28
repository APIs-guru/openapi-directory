import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HomeDirectoryMapEntry } from "./homedirectorymapentry";
import { HomeDirectoryTypeEnum } from "./homedirectorytypeenum";
import { PosixProfile } from "./posixprofile";
import { Tag } from "./tag";



export class CreateUserRequest extends SpeakeasyBase {
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
  role: string;

  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;

  @SpeakeasyMetadata({ data: "json, name=SshPublicKeyBody" })
  sshPublicKeyBody?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName: string;
}
