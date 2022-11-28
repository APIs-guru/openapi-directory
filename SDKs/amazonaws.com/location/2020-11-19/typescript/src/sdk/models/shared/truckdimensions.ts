import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionUnitEnum } from "./dimensionunitenum";



// TruckDimensions
/** 
 * Contains details about the truck dimensions in the unit of measurement that you specify. Used to filter out roads that can't support or allow the specified dimensions for requests that specify <code>TravelMode</code> as <code>Truck</code>.
**/
export class TruckDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=Length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=Unit" })
  unit?: DimensionUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=Width" })
  width?: number;
}
