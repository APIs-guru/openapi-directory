import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleRpcPreconditionFailureViolation
/** 
 * A message type used to describe a single precondition failure.
**/
export class GoogleRpcPreconditionFailureViolation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
