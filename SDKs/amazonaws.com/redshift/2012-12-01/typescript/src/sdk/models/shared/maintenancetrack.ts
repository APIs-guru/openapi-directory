import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateTarget } from "./updatetarget";



// MaintenanceTrack
/** 
 * Defines a maintenance track that determines which Amazon Redshift version to apply during a maintenance window. If the value for <code>MaintenanceTrack</code> is <code>current</code>, the cluster is updated to the most recently certified maintenance release. If the value is <code>trailing</code>, the cluster is updated to the previously certified maintenance release. 
**/
export class MaintenanceTrack extends SpeakeasyBase {
  @SpeakeasyMetadata()
  databaseVersion?: string;

  @SpeakeasyMetadata()
  maintenanceTrackName?: string;

  @SpeakeasyMetadata({ elemType: UpdateTarget })
  updateTargets?: UpdateTarget[];
}
