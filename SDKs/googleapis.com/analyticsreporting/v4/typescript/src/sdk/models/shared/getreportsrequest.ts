import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportRequest } from "./reportrequest";


// GetReportsRequest
/** 
 * The batch request containing multiple report request.
**/
export class GetReportsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=reportRequests", elemType: shared.ReportRequest })
  reportRequests?: ReportRequest[];

  @Metadata({ data: "json, name=useResourceQuotas" })
  useResourceQuotas?: boolean;
}
