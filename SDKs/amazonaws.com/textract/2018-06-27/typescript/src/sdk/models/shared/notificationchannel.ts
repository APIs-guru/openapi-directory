import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationChannel
/** 
 * The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation, such as <a>StartDocumentTextDetection</a>. 
**/
export class NotificationChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=SNSTopicArn" })
  snsTopicArn: string;
}
