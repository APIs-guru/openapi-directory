import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DealTermsGuaranteedFixedPriceTermsBillingInfo } from "./dealtermsguaranteedfixedpricetermsbillinginfo";
import { PricePerBuyer } from "./priceperbuyer";



export class DealTermsGuaranteedFixedPriceTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingInfo" })
  billingInfo?: DealTermsGuaranteedFixedPriceTermsBillingInfo;

  @SpeakeasyMetadata({ data: "json, name=fixedPrices", elemType: PricePerBuyer })
  fixedPrices?: PricePerBuyer[];

  @SpeakeasyMetadata({ data: "json, name=guaranteedImpressions" })
  guaranteedImpressions?: string;

  @SpeakeasyMetadata({ data: "json, name=guaranteedLooks" })
  guaranteedLooks?: string;

  @SpeakeasyMetadata({ data: "json, name=minimumDailyLooks" })
  minimumDailyLooks?: string;
}
