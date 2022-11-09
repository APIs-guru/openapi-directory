import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BuildingCoordinates
/** 
 * Public API: Resources.buildings
**/
export class BuildingCoordinates extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;
}
