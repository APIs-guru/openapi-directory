import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { DealTermsGuaranteedFixedPriceTerms } from "./dealtermsguaranteedfixedpriceterms";
import { DealTermsNonGuaranteedAuctionTerms } from "./dealtermsnonguaranteedauctionterms";
import { DealTermsNonGuaranteedFixedPriceTerms } from "./dealtermsnonguaranteedfixedpriceterms";
import { DealTermsRubiconNonGuaranteedTerms } from "./dealtermsrubiconnonguaranteedterms";
export declare class DealTerms extends SpeakeasyBase {
    brandingType?: string;
    crossListedExternalDealIdType?: string;
    description?: string;
    estimatedGrossSpend?: Price;
    estimatedImpressionsPerDay?: string;
    guaranteedFixedPriceTerms?: DealTermsGuaranteedFixedPriceTerms;
    nonGuaranteedAuctionTerms?: DealTermsNonGuaranteedAuctionTerms;
    nonGuaranteedFixedPriceTerms?: DealTermsNonGuaranteedFixedPriceTerms;
    rubiconNonGuaranteedTerms?: DealTermsRubiconNonGuaranteedTerms;
    sellerTimeZone?: string;
}
