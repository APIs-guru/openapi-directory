import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseTypeEnum } from "./licensetypeenum";



// ServerReplicationParameters
/** 
 * The replication parameters for replicating a server.
**/
export class ServerReplicationParameters extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=runOnce" })
  runOnce?: boolean;

  @SpeakeasyMetadata({ data: "json, name=seedTime" })
  seedTime?: Date;
}
