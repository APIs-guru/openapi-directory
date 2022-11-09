import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HomeDirectoryMapEntry } from "./homedirectorymapentry";
import { HomeDirectoryTypeEnum } from "./homedirectorytypeenum";
import { PosixProfile } from "./posixprofile";


export class CreateAccessRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExternalId" })
  externalId: string;

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
  role: string;

  @Metadata({ data: "json, name=ServerId" })
  serverId: string;
}
