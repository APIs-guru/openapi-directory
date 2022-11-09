import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RunPivotReportResponse } from "./runpivotreportresponse";


// BatchRunPivotReportsResponse
/** 
 * The batch response containing multiple pivot reports.
**/
export class BatchRunPivotReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=pivotReports", elemType: shared.RunPivotReportResponse })
  pivotReports?: RunPivotReportResponse[];
}
