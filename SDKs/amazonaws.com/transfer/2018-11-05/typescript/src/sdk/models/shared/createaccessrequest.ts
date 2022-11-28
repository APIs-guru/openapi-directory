import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HomeDirectoryMapEntry } from "./homedirectorymapentry";
import { HomeDirectoryTypeEnum } from "./homedirectorytypeenum";
import { PosixProfile } from "./posixprofile";



export class CreateAccessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExternalId" })
  externalId: string;

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
}
