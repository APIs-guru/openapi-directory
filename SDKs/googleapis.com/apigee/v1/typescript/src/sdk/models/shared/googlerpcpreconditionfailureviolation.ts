import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleRpcPreconditionFailureViolation
/** 
 * A message type used to describe a single precondition failure.
**/
export class GoogleRpcPreconditionFailureViolation extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=subject" })
  subject?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
