import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IntroductoryPriceInfo
/** 
 * Contains the introductory price information for a subscription.
**/
export class IntroductoryPriceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=introductoryPriceAmountMicros" })
  introductoryPriceAmountMicros?: string;

  @Metadata({ data: "json, name=introductoryPriceCurrencyCode" })
  introductoryPriceCurrencyCode?: string;

  @Metadata({ data: "json, name=introductoryPriceCycles" })
  introductoryPriceCycles?: number;

  @Metadata({ data: "json, name=introductoryPricePeriod" })
  introductoryPricePeriod?: string;
}
