import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IntroductoryPriceInfo
/** 
 * Contains the introductory price information for a subscription.
**/
export class IntroductoryPriceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=introductoryPriceAmountMicros" })
  introductoryPriceAmountMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=introductoryPriceCurrencyCode" })
  introductoryPriceCurrencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=introductoryPriceCycles" })
  introductoryPriceCycles?: number;

  @SpeakeasyMetadata({ data: "json, name=introductoryPricePeriod" })
  introductoryPricePeriod?: string;
}
