import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResponseTimeRootCauseService } from "./responsetimerootcauseservice";


// ResponseTimeRootCause
/** 
 * The root cause information for a response time warning.
**/
export class ResponseTimeRootCause extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientImpacting" })
  clientImpacting?: boolean;

  @Metadata({ data: "json, name=Services", elemType: shared.ResponseTimeRootCauseService })
  services?: ResponseTimeRootCauseService[];
}
