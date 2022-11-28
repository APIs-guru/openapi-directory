import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RunPivotReportResponse } from "./runpivotreportresponse";



// BatchRunPivotReportsResponse
/** 
 * The batch response containing multiple pivot reports.
**/
export class BatchRunPivotReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=pivotReports", elemType: RunPivotReportResponse })
  pivotReports?: RunPivotReportResponse[];
}
