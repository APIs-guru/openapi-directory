import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseTypeEnum } from "./licensetypeenum";



export class UpdateReplicationJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: number;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=licenseType" })
  licenseType?: LicenseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=nextReplicationRunStartTime" })
  nextReplicationRunStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=numberOfRecentAmisToKeep" })
  numberOfRecentAmisToKeep?: number;

  @SpeakeasyMetadata({ data: "json, name=replicationJobId" })
  replicationJobId: string;

  @SpeakeasyMetadata({ data: "json, name=roleName" })
  roleName?: string;
}
