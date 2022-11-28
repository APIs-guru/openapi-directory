import { SpeakeasyBase } from "../../../internal/utils";
import { RunReportResponse } from "./runreportresponse";
/**
 * The batch response containing multiple reports.
**/
export declare class BatchRunReportsResponse extends SpeakeasyBase {
    kind?: string;
    reports?: RunReportResponse[];
}
