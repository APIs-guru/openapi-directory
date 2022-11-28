import { SpeakeasyBase } from "../../../internal/utils";
import { BuildingAddress } from "./buildingaddress";
import { BuildingCoordinates } from "./buildingcoordinates";
/**
 * Public API: Resources.buildings
**/
export declare class Building extends SpeakeasyBase {
    address?: BuildingAddress;
    buildingId?: string;
    buildingName?: string;
    coordinates?: BuildingCoordinates;
    description?: string;
    etags?: string;
    floorNames?: string[];
    kind?: string;
}
