import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusTypeEnum } from "./statustypeenum";


// ReplicationStatusType
/** 
 * A replication object consisting of a <code>RegionReplicationStatus</code> object and includes a Region, KMSKeyId, status, and status message.
**/
export class ReplicationStatusType extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=LastAccessedDate" })
  lastAccessedDate?: Date;

  @Metadata({ data: "json, name=Region" })
  region?: string;

  @Metadata({ data: "json, name=Status" })
  status?: StatusTypeEnum;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;
}
