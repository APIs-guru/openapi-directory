import { SpeakeasyBase } from "../../../internal/utils";
import { RunPivotReportResponse } from "./runpivotreportresponse";
/**
 * The batch response containing multiple pivot reports.
**/
export declare class BatchRunPivotReportsResponse extends SpeakeasyBase {
    kind?: string;
    pivotReports?: RunPivotReportResponse[];
}
