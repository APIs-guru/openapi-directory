import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VehicleWeightUnitEnum } from "./vehicleweightunitenum";
/**
 * Contains details about the truck's weight specifications. Used to avoid roads that can't support or allow the total weight for requests that specify <code>TravelMode</code> as <code>Truck</code>.
**/
export declare class TruckWeight extends SpeakeasyBase {
    total?: number;
    unit?: VehicleWeightUnitEnum;
}
