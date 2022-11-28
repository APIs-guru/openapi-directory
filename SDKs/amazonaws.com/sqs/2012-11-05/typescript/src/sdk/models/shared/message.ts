import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageAttributeValue } from "./messageattributevalue";



// Message
/** 
 * An Amazon SQS message.
**/
export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributes?: Map<string, string>;

  @SpeakeasyMetadata()
  body?: string;

  @SpeakeasyMetadata()
  md5OfBody?: string;

  @SpeakeasyMetadata()
  md5OfMessageAttributes?: string;

  @SpeakeasyMetadata({ elemType: MessageAttributeValue })
  messageAttributes?: Map<string, MessageAttributeValue>;

  @SpeakeasyMetadata()
  messageId?: string;

  @SpeakeasyMetadata()
  receiptHandle?: string;
}
