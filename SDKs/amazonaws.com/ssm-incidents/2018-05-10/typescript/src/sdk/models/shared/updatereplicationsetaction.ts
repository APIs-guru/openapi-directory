import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AddRegionAction } from "./addregionaction";
import { DeleteRegionAction } from "./deleteregionaction";


// UpdateReplicationSetAction
/** 
 * Details used when updating the replication set.
**/
export class UpdateReplicationSetAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=addRegionAction" })
  addRegionAction?: AddRegionAction;

  @Metadata({ data: "json, name=deleteRegionAction" })
  deleteRegionAction?: DeleteRegionAction;
}
