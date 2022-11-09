import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusTypeEnum } from "./statustypeenum";
/**
 * A replication object consisting of a <code>RegionReplicationStatus</code> object and includes a Region, KMSKeyId, status, and status message.
**/
export declare class ReplicationStatusType extends SpeakeasyBase {
    kmsKeyId?: string;
    lastAccessedDate?: Date;
    region?: string;
    status?: StatusTypeEnum;
    statusMessage?: string;
}
