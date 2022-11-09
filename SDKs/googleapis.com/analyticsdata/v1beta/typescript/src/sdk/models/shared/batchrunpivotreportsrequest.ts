import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RunPivotReportRequest } from "./runpivotreportrequest";


// BatchRunPivotReportsRequest
/** 
 * The batch request containing multiple pivot report requests.
**/
export class BatchRunPivotReportsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.RunPivotReportRequest })
  requests?: RunPivotReportRequest[];
}
