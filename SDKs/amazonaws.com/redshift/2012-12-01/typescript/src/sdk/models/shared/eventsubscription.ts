import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// EventSubscription
/** 
 * Describes event subscriptions.
**/
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
  severity?: string;

  @SpeakeasyMetadata()
  snsTopicArn?: string;

  @SpeakeasyMetadata()
  sourceIdsList?: string[];

  @SpeakeasyMetadata()
  sourceType?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  subscriptionCreationTime?: Date;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
