import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BuildingAddress } from "./buildingaddress";
import { BuildingCoordinates } from "./buildingcoordinates";


// Building
/** 
 * Public API: Resources.buildings
**/
export class Building extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: BuildingAddress;

  @Metadata({ data: "json, name=buildingId" })
  buildingId?: string;

  @Metadata({ data: "json, name=buildingName" })
  buildingName?: string;

  @Metadata({ data: "json, name=coordinates" })
  coordinates?: BuildingCoordinates;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etags" })
  etags?: string;

  @Metadata({ data: "json, name=floorNames" })
  floorNames?: string[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
