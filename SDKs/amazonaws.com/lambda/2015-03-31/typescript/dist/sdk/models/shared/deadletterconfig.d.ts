import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
**/
export declare class DeadLetterConfig extends SpeakeasyBase {
    targetArn?: string;
}
