import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorldConfig
/** 
 * Configuration information for a world.
**/
export class WorldConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=world" })
  world?: string;
}
