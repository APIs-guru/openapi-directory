import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VehicleWeightUnitEnum } from "./vehicleweightunitenum";



// TruckWeight
/** 
 * Contains details about the truck's weight specifications. Used to avoid roads that can't support or allow the total weight for requests that specify <code>TravelMode</code> as <code>Truck</code>.
**/
export class TruckWeight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=Unit" })
  unit?: VehicleWeightUnitEnum;
}
