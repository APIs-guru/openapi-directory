import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PivotSelection } from "./pivotselection";


// PivotOrderBy
/** 
 * Sorts by a pivot column group.
**/
export class PivotOrderBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricName" })
  metricName?: string;

  @Metadata({ data: "json, name=pivotSelections", elemType: shared.PivotSelection })
  pivotSelections?: PivotSelection[];
}
