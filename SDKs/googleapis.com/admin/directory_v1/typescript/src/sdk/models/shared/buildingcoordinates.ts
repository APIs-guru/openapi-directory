import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BuildingCoordinates
/** 
 * Public API: Resources.buildings
**/
export class BuildingCoordinates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;
}
