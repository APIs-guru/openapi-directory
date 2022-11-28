import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeadLetterConfig
/** 
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
**/
export class DeadLetterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TargetArn" })
  targetArn?: string;
}
