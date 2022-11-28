import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RunReportRequest } from "./runreportrequest";



// BatchRunReportsRequest
/** 
 * The batch request containing multiple report requests.
**/
export class BatchRunReportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requests", elemType: RunReportRequest })
  requests?: RunReportRequest[];
}
