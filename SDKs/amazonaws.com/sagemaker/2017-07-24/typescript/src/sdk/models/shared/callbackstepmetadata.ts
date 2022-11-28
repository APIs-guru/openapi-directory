import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutputParameter } from "./outputparameter";



// CallbackStepMetadata
/** 
 * Metadata about a callback step.
**/
export class CallbackStepMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CallbackToken" })
  callbackToken?: string;

  @SpeakeasyMetadata({ data: "json, name=OutputParameters", elemType: OutputParameter })
  outputParameters?: OutputParameter[];

  @SpeakeasyMetadata({ data: "json, name=SqsQueueUrl" })
  sqsQueueUrl?: string;
}
