import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RelationalDatabaseHardware
/** 
 * Describes the hardware of a database.
**/
export class RelationalDatabaseHardware extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuCount" })
  cpuCount?: number;

  @SpeakeasyMetadata({ data: "json, name=diskSizeInGb" })
  diskSizeInGb?: number;

  @SpeakeasyMetadata({ data: "json, name=ramSizeInGb" })
  ramSizeInGb?: number;
}
