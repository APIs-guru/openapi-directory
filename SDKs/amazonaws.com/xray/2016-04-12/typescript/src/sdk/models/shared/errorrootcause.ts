import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ErrorRootCauseService } from "./errorrootcauseservice";


// ErrorRootCause
/** 
 * The root cause of a trace summary error.
**/
export class ErrorRootCause extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientImpacting" })
  clientImpacting?: boolean;

  @Metadata({ data: "json, name=Services", elemType: shared.ErrorRootCauseService })
  services?: ErrorRootCauseService[];
}
