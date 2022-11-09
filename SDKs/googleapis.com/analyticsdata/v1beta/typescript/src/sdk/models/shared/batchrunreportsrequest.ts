import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RunReportRequest } from "./runreportrequest";


// BatchRunReportsRequest
/** 
 * The batch request containing multiple report requests.
**/
export class BatchRunReportsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requests", elemType: shared.RunReportRequest })
  requests?: RunReportRequest[];
}
