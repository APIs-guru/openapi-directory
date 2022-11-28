import { SpeakeasyBase } from "../../../internal/utils";
import { DealTermsGuaranteedFixedPriceTermsBillingInfo } from "./dealtermsguaranteedfixedpricetermsbillinginfo";
import { PricePerBuyer } from "./priceperbuyer";
export declare class DealTermsGuaranteedFixedPriceTerms extends SpeakeasyBase {
    billingInfo?: DealTermsGuaranteedFixedPriceTermsBillingInfo;
    fixedPrices?: PricePerBuyer[];
    guaranteedImpressions?: string;
    guaranteedLooks?: string;
    minimumDailyLooks?: string;
}
