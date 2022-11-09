import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LicenseTypeEnum } from "./licensetypeenum";


export class UpdateReplicationJobRequest extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=nextReplicationRunStartTime" })
  nextReplicationRunStartTime?: Date;

  @Metadata({ data: "json, name=numberOfRecentAmisToKeep" })
  numberOfRecentAmisToKeep?: number;

  @Metadata({ data: "json, name=replicationJobId" })
  replicationJobId: string;

  @Metadata({ data: "json, name=roleName" })
  roleName?: string;
}
