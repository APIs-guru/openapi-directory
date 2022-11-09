import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LicenseTypeEnum } from "./licensetypeenum";


// ServerReplicationParameters
/** 
 * The replication parameters for replicating a server.
**/
export class ServerReplicationParameters extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=runOnce" })
  runOnce?: boolean;

  @Metadata({ data: "json, name=seedTime" })
  seedTime?: Date;
}
