import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation, such as <a>StartDocumentTextDetection</a>.
**/
export declare class NotificationChannel extends SpeakeasyBase {
    roleArn: string;
    snsTopicArn: string;
}
