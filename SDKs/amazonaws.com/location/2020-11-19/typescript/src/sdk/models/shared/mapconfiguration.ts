import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MapConfiguration
/** 
 * Specifies the map tile style selected from an available provider.
**/
export class MapConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Style" })
  style: string;
}
