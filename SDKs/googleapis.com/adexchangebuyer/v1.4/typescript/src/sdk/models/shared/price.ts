import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Price extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountMicros" })
  amountMicros?: number;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=expectedCpmMicros" })
  expectedCpmMicros?: number;

  @SpeakeasyMetadata({ data: "json, name=pricingType" })
  pricingType?: string;
}
