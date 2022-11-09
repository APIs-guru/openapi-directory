import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsLambdaFunctionDeadLetterConfig
/** 
 * The dead-letter queue for failed asynchronous invocations.
**/
export class AwsLambdaFunctionDeadLetterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=TargetArn" })
  targetArn?: string;
}
