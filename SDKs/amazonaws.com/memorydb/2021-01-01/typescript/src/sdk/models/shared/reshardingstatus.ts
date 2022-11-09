import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SlotMigration } from "./slotmigration";


// ReshardingStatus
/** 
 * The status of the online resharding
**/
export class ReshardingStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=SlotMigration" })
  slotMigration?: SlotMigration;
}
