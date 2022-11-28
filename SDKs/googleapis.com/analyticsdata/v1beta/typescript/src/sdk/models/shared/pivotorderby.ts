import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PivotSelection } from "./pivotselection";



// PivotOrderBy
/** 
 * Sorts by a pivot column group.
**/
export class PivotOrderBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricName" })
  metricName?: string;

  @SpeakeasyMetadata({ data: "json, name=pivotSelections", elemType: PivotSelection })
  pivotSelections?: PivotSelection[];
}
