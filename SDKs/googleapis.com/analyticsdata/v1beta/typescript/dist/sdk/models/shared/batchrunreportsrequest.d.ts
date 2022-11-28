import { SpeakeasyBase } from "../../../internal/utils";
import { RunReportRequest } from "./runreportrequest";
/**
 * The batch request containing multiple report requests.
**/
export declare class BatchRunReportsRequest extends SpeakeasyBase {
    requests?: RunReportRequest[];
}
