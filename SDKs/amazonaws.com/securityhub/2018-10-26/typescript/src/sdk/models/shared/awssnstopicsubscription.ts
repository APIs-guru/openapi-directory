import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsSnsTopicSubscription
/** 
 * A wrapper type for the attributes of an Amazon SNS subscription.
**/
export class AwsSnsTopicSubscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=Endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=Protocol" })
  protocol?: string;
}
