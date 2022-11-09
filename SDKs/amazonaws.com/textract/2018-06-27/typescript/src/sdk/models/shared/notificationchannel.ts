import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotificationChannel
/** 
 * The Amazon Simple Notification Service (Amazon SNS) topic to which Amazon Textract publishes the completion status of an asynchronous document operation, such as <a>StartDocumentTextDetection</a>. 
**/
export class NotificationChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=SNSTopicArn" })
  snsTopicArn: string;
}
