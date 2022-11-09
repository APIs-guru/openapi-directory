import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubscriptionListing
/** 
 * The consumer-visible metadata of a subscription.
**/
export class SubscriptionListing extends SpeakeasyBase {
  @Metadata({ data: "json, name=benefits" })
  benefits?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
