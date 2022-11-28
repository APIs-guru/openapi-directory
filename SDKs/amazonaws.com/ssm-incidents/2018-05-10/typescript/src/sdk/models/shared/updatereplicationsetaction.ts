import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddRegionAction } from "./addregionaction";
import { DeleteRegionAction } from "./deleteregionaction";



// UpdateReplicationSetAction
/** 
 * Details used when updating the replication set.
**/
export class UpdateReplicationSetAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addRegionAction" })
  addRegionAction?: AddRegionAction;

  @SpeakeasyMetadata({ data: "json, name=deleteRegionAction" })
  deleteRegionAction?: DeleteRegionAction;
}
