import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RunReportResponse } from "./runreportresponse";



// BatchRunReportsResponse
/** 
 * The batch response containing multiple reports.
**/
export class BatchRunReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=reports", elemType: RunReportResponse })
  reports?: RunReportResponse[];
}
