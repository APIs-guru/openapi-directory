import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SnsDestination
/** 
 * An object that contains information about an event destination that sends data to Amazon SNS.
**/
export class SnsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TopicArn" })
  topicArn?: string;
}
