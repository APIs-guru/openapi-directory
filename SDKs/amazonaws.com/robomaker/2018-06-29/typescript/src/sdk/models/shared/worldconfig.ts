import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorldConfig
/** 
 * Configuration information for a world.
**/
export class WorldConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=world" })
  world?: string;
}
