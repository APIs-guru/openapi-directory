import { SpeakeasyBase } from "../../../internal/utils";
import { AddRegionAction } from "./addregionaction";
import { DeleteRegionAction } from "./deleteregionaction";
/**
 * Details used when updating the replication set.
**/
export declare class UpdateReplicationSetAction extends SpeakeasyBase {
    addRegionAction?: AddRegionAction;
    deleteRegionAction?: DeleteRegionAction;
}
