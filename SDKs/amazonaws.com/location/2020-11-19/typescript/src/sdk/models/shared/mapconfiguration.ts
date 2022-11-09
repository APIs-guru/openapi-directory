import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MapConfiguration
/** 
 * Specifies the map tile style selected from an available provider.
**/
export class MapConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Style" })
  style: string;
}
