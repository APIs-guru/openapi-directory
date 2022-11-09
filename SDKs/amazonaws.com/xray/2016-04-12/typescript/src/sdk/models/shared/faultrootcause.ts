import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FaultRootCauseService } from "./faultrootcauseservice";


// FaultRootCause
/** 
 * The root cause information for a trace summary fault.
**/
export class FaultRootCause extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientImpacting" })
  clientImpacting?: boolean;

  @Metadata({ data: "json, name=Services", elemType: shared.FaultRootCauseService })
  services?: FaultRootCauseService[];
}
