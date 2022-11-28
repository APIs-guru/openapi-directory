import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildingAddress } from "./buildingaddress";
import { BuildingCoordinates } from "./buildingcoordinates";



// Building
/** 
 * Public API: Resources.buildings
**/
export class Building extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: BuildingAddress;

  @SpeakeasyMetadata({ data: "json, name=buildingId" })
  buildingId?: string;

  @SpeakeasyMetadata({ data: "json, name=buildingName" })
  buildingName?: string;

  @SpeakeasyMetadata({ data: "json, name=coordinates" })
  coordinates?: BuildingCoordinates;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etags" })
  etags?: string;

  @SpeakeasyMetadata({ data: "json, name=floorNames" })
  floorNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
