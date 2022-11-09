import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RunReportResponse } from "./runreportresponse";


// BatchRunReportsResponse
/** 
 * The batch response containing multiple reports.
**/
export class BatchRunReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=reports", elemType: shared.RunReportResponse })
  reports?: RunReportResponse[];
}
