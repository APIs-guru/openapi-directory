import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubscriptionListing
/** 
 * The consumer-visible metadata of a subscription.
**/
export class SubscriptionListing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=benefits" })
  benefits?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
