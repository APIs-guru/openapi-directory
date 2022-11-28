import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  custSubscriptionId?: string;

  @SpeakeasyMetadata()
  customerAwsId?: string;

  @SpeakeasyMetadata()
  enabled?: boolean;

  @SpeakeasyMetadata()
  eventCategoriesList?: string[];

  @SpeakeasyMetadata()
  snsTopicArn?: string;

  @SpeakeasyMetadata()
  sourceIdsList?: string[];

  @SpeakeasyMetadata()
  sourceType?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  subscriptionCreationTime?: string;
}
