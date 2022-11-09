import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlaceGeometry
/** 
 * Places uses a point geometry to specify a location or a Place.
**/
export class PlaceGeometry extends SpeakeasyBase {
  @Metadata({ data: "json, name=Point" })
  point?: number[];
}
