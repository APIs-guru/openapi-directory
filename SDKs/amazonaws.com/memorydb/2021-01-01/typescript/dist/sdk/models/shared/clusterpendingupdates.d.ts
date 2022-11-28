import { SpeakeasyBase } from "../../../internal/utils";
import { AcLsUpdateStatus } from "./aclsupdatestatus";
import { ReshardingStatus } from "./reshardingstatus";
import { PendingModifiedServiceUpdate } from "./pendingmodifiedserviceupdate";
/**
 * A list of updates being applied to the cluster
**/
export declare class ClusterPendingUpdates extends SpeakeasyBase {
    acLs?: AcLsUpdateStatus;
    resharding?: ReshardingStatus;
    serviceUpdates?: PendingModifiedServiceUpdate[];
}
