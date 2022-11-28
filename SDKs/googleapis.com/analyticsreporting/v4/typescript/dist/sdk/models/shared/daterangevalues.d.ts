import { SpeakeasyBase } from "../../../internal/utils";
import { PivotValueRegion } from "./pivotvalueregion";
/**
 * Used to return a list of metrics for a single DateRange / dimension combination
**/
export declare class DateRangeValues extends SpeakeasyBase {
    pivotValueRegions?: PivotValueRegion[];
    values?: string[];
}
