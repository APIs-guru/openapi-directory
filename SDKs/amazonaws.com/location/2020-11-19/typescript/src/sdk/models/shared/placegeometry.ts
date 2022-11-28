import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlaceGeometry
/** 
 * Places uses a point geometry to specify a location or a Place.
**/
export class PlaceGeometry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Point" })
  point?: number[];
}
