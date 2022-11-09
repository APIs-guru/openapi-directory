import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Price extends SpeakeasyBase {
  @Metadata({ data: "json, name=amountMicros" })
  amountMicros?: number;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=expectedCpmMicros" })
  expectedCpmMicros?: number;

  @Metadata({ data: "json, name=pricingType" })
  pricingType?: string;
}
