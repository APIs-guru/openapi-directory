import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRdsEventSubscriptionDetails
/** 
 * Details about an Amazon RDS event notification subscription. The subscription allows Amazon RDS to post events to an SNS topic.
**/
export class AwsRdsEventSubscriptionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustSubscriptionId" })
  custSubscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=CustomerAwsId" })
  customerAwsId?: string;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EventCategoriesList" })
  eventCategoriesList?: string[];

  @SpeakeasyMetadata({ data: "json, name=EventSubscriptionArn" })
  eventSubscriptionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SnsTopicArn" })
  snsTopicArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SourceIdsList" })
  sourceIdsList?: string[];

  @SpeakeasyMetadata({ data: "json, name=SourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionCreationTime" })
  subscriptionCreationTime?: string;
}
