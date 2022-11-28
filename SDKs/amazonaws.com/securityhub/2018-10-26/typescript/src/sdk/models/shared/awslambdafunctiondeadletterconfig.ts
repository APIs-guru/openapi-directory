import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsLambdaFunctionDeadLetterConfig
/** 
 * The dead-letter queue for failed asynchronous invocations.
**/
export class AwsLambdaFunctionDeadLetterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TargetArn" })
  targetArn?: string;
}
