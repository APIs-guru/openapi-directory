import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusTypeEnum } from "./statustypeenum";



// ReplicationStatusType
/** 
 * A replication object consisting of a <code>RegionReplicationStatus</code> object and includes a Region, KMSKeyId, status, and status message.
**/
export class ReplicationStatusType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=LastAccessedDate" })
  lastAccessedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;
}
