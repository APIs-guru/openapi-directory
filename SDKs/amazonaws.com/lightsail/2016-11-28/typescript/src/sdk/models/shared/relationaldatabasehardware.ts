import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RelationalDatabaseHardware
/** 
 * Describes the hardware of a database.
**/
export class RelationalDatabaseHardware extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuCount" })
  cpuCount?: number;

  @Metadata({ data: "json, name=diskSizeInGb" })
  diskSizeInGb?: number;

  @Metadata({ data: "json, name=ramSizeInGb" })
  ramSizeInGb?: number;
}
