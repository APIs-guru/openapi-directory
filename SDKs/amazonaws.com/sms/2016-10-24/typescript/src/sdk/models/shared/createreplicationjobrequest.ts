import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LicenseTypeEnum } from "./licensetypeenum";


export class CreateReplicationJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "json, name=frequency" })
  frequency?: number;

  @Metadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=licenseType" })
  licenseType?: LicenseTypeEnum;

  @Metadata({ data: "json, name=numberOfRecentAmisToKeep" })
  numberOfRecentAmisToKeep?: number;

  @Metadata({ data: "json, name=roleName" })
  roleName?: string;

  @Metadata({ data: "json, name=runOnce" })
  runOnce?: boolean;

  @Metadata({ data: "json, name=seedReplicationTime" })
  seedReplicationTime: Date;

  @Metadata({ data: "json, name=serverId" })
  serverId: string;
}
