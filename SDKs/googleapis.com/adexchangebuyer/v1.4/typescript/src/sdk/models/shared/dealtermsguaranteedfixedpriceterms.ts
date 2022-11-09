import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DealTermsGuaranteedFixedPriceTermsBillingInfo } from "./dealtermsguaranteedfixedpricetermsbillinginfo";
import { PricePerBuyer } from "./priceperbuyer";


export class DealTermsGuaranteedFixedPriceTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingInfo" })
  billingInfo?: DealTermsGuaranteedFixedPriceTermsBillingInfo;

  @Metadata({ data: "json, name=fixedPrices", elemType: shared.PricePerBuyer })
  fixedPrices?: PricePerBuyer[];

  @Metadata({ data: "json, name=guaranteedImpressions" })
  guaranteedImpressions?: string;

  @Metadata({ data: "json, name=guaranteedLooks" })
  guaranteedLooks?: string;

  @Metadata({ data: "json, name=minimumDailyLooks" })
  minimumDailyLooks?: string;
}
