import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseTypeEnum } from "./licensetypeenum";



export class CreateReplicationJobRequest extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=numberOfRecentAmisToKeep" })
  numberOfRecentAmisToKeep?: number;

  @SpeakeasyMetadata({ data: "json, name=roleName" })
  roleName?: string;

  @SpeakeasyMetadata({ data: "json, name=runOnce" })
  runOnce?: boolean;

  @SpeakeasyMetadata({ data: "json, name=seedReplicationTime" })
  seedReplicationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=serverId" })
  serverId: string;
}
