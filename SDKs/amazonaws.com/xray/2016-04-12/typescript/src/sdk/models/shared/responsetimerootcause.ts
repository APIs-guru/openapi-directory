import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseTimeRootCauseService } from "./responsetimerootcauseservice";



// ResponseTimeRootCause
/** 
 * The root cause information for a response time warning.
**/
export class ResponseTimeRootCause extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientImpacting" })
  clientImpacting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Services", elemType: ResponseTimeRootCauseService })
  services?: ResponseTimeRootCauseService[];
}
