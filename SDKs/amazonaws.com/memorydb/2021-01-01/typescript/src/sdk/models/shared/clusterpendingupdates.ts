import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AcLsUpdateStatus } from "./aclsupdatestatus";
import { ReshardingStatus } from "./reshardingstatus";
import { PendingModifiedServiceUpdate } from "./pendingmodifiedserviceupdate";


// ClusterPendingUpdates
/** 
 * A list of updates being applied to the cluster
**/
export class ClusterPendingUpdates extends SpeakeasyBase {
  @Metadata({ data: "json, name=ACLs" })
  acLs?: AcLsUpdateStatus;

  @Metadata({ data: "json, name=Resharding" })
  resharding?: ReshardingStatus;

  @Metadata({ data: "json, name=ServiceUpdates", elemType: shared.PendingModifiedServiceUpdate })
  serviceUpdates?: PendingModifiedServiceUpdate[];
}
