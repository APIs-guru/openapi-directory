import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleRpcPreconditionFailureViolation } from "./googlerpcpreconditionfailureviolation";


// GoogleRpcPreconditionFailure
/** 
 * Describes what preconditions have failed. For example, if an RPC failed because it required the Terms of Service to be acknowledged, it could list the terms of service violation in the PreconditionFailure message.
**/
export class GoogleRpcPreconditionFailure extends SpeakeasyBase {
  @Metadata({ data: "json, name=violations", elemType: shared.GoogleRpcPreconditionFailureViolation })
  violations?: GoogleRpcPreconditionFailureViolation[];
}
