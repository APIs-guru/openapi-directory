import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeadLetterConfig
/** 
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
**/
export class DeadLetterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=TargetArn" })
  targetArn?: string;
}
