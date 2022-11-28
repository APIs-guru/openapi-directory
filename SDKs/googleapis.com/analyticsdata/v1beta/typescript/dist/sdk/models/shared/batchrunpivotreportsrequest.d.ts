import { SpeakeasyBase } from "../../../internal/utils";
import { RunPivotReportRequest } from "./runpivotreportrequest";
/**
 * The batch request containing multiple pivot report requests.
**/
export declare class BatchRunPivotReportsRequest extends SpeakeasyBase {
    requests?: RunPivotReportRequest[];
}
