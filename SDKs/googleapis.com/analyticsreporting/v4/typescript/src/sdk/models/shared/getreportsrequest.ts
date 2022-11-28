import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportRequest } from "./reportrequest";



// GetReportsRequest
/** 
 * The batch request containing multiple report request.
**/
export class GetReportsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reportRequests", elemType: ReportRequest })
  reportRequests?: ReportRequest[];

  @SpeakeasyMetadata({ data: "json, name=useResourceQuotas" })
  useResourceQuotas?: boolean;
}
