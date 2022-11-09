import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SnsDestination
/** 
 * An object that contains information about an event destination that sends data to Amazon SNS.
**/
export class SnsDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=TopicArn" })
  topicArn?: string;
}
