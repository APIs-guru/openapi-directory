import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DimensionUnitEnum } from "./dimensionunitenum";
/**
 * Contains details about the truck dimensions in the unit of measurement that you specify. Used to filter out roads that can't support or allow the specified dimensions for requests that specify <code>TravelMode</code> as <code>Truck</code>.
**/
export declare class TruckDimensions extends SpeakeasyBase {
    height?: number;
    length?: number;
    unit?: DimensionUnitEnum;
    width?: number;
}
