import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlotMigration } from "./slotmigration";



// ReshardingStatus
/** 
 * The status of the online resharding
**/
export class ReshardingStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SlotMigration" })
  slotMigration?: SlotMigration;
}
