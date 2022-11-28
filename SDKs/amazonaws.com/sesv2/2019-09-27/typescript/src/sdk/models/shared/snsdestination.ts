import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SnsDestination
/** 
 * An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.
**/
export class SnsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TopicArn" })
  topicArn: string;
}
