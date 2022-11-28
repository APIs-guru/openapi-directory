import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorRootCauseService } from "./errorrootcauseservice";



// ErrorRootCause
/** 
 * The root cause of a trace summary error.
**/
export class ErrorRootCause extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientImpacting" })
  clientImpacting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Services", elemType: ErrorRootCauseService })
  services?: ErrorRootCauseService[];
}
