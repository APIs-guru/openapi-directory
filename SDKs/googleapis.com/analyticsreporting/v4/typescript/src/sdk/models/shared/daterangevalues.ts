import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PivotValueRegion } from "./pivotvalueregion";


// DateRangeValues
/** 
 * Used to return a list of metrics for a single DateRange / dimension combination
**/
export class DateRangeValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=pivotValueRegions", elemType: shared.PivotValueRegion })
  pivotValueRegions?: PivotValueRegion[];

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
