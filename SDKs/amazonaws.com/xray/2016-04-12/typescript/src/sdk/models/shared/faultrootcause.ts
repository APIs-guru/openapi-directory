import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FaultRootCauseService } from "./faultrootcauseservice";



// FaultRootCause
/** 
 * The root cause information for a trace summary fault.
**/
export class FaultRootCause extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientImpacting" })
  clientImpacting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Services", elemType: FaultRootCauseService })
  services?: FaultRootCauseService[];
}
