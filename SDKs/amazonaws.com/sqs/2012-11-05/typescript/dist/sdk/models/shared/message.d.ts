import { SpeakeasyBase } from "../../../internal/utils";
import { MessageAttributeValue } from "./messageattributevalue";
/**
 * An Amazon SQS message.
**/
export declare class Message extends SpeakeasyBase {
    attributes?: Map<string, string>;
    body?: string;
    md5OfBody?: string;
    md5OfMessageAttributes?: string;
    messageAttributes?: Map<string, MessageAttributeValue>;
    messageId?: string;
    receiptHandle?: string;
}
