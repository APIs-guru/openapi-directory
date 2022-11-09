import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OutputParameter } from "./outputparameter";


// CallbackStepMetadata
/** 
 * Metadata about a callback step.
**/
export class CallbackStepMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=CallbackToken" })
  callbackToken?: string;

  @Metadata({ data: "json, name=OutputParameters", elemType: shared.OutputParameter })
  outputParameters?: OutputParameter[];

  @Metadata({ data: "json, name=SqsQueueUrl" })
  sqsQueueUrl?: string;
}
