import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PivotValueRegion } from "./pivotvalueregion";



// DateRangeValues
/** 
 * Used to return a list of metrics for a single DateRange / dimension combination
**/
export class DateRangeValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pivotValueRegions", elemType: PivotValueRegion })
  pivotValueRegions?: PivotValueRegion[];

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
