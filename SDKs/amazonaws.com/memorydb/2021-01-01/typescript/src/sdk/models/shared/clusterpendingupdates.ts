import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AcLsUpdateStatus } from "./aclsupdatestatus";
import { ReshardingStatus } from "./reshardingstatus";
import { PendingModifiedServiceUpdate } from "./pendingmodifiedserviceupdate";



// ClusterPendingUpdates
/** 
 * A list of updates being applied to the cluster
**/
export class ClusterPendingUpdates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ACLs" })
  acLs?: AcLsUpdateStatus;

  @SpeakeasyMetadata({ data: "json, name=Resharding" })
  resharding?: ReshardingStatus;

  @SpeakeasyMetadata({ data: "json, name=ServiceUpdates", elemType: PendingModifiedServiceUpdate })
  serviceUpdates?: PendingModifiedServiceUpdate[];
}
