import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RunPivotReportRequest } from "./runpivotreportrequest";



// BatchRunPivotReportsRequest
/** 
 * The batch request containing multiple pivot report requests.
**/
export class BatchRunPivotReportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: RunPivotReportRequest })
  requests?: RunPivotReportRequest[];
}
