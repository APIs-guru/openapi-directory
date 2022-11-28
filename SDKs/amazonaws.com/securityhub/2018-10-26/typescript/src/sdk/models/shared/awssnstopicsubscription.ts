import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsSnsTopicSubscription
/** 
 * A wrapper type for the attributes of an Amazon SNS subscription.
**/
export class AwsSnsTopicSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol?: string;
}
