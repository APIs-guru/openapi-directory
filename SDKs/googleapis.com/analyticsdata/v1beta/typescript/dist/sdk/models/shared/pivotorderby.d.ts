import { SpeakeasyBase } from "../../../internal/utils";
import { PivotSelection } from "./pivotselection";
/**
 * Sorts by a pivot column group.
**/
export declare class PivotOrderBy extends SpeakeasyBase {
    metricName?: string;
    pivotSelections?: PivotSelection[];
}
