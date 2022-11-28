import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { GuaranteedFixedPriceTerms } from "./guaranteedfixedpriceterms";
import { NonGuaranteedAuctionTerms } from "./nonguaranteedauctionterms";
import { NonGuaranteedFixedPriceTerms } from "./nonguaranteedfixedpriceterms";
export declare enum DealTermsBrandingTypeEnum {
    BrandingTypeUnspecified = "BRANDING_TYPE_UNSPECIFIED",
    Branded = "BRANDED",
    SemiTransparent = "SEMI_TRANSPARENT"
}
/**
 * The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher.
**/
export declare class DealTerms extends SpeakeasyBase {
    brandingType?: DealTermsBrandingTypeEnum;
    description?: string;
    estimatedGrossSpend?: Price;
    estimatedImpressionsPerDay?: string;
    guaranteedFixedPriceTerms?: GuaranteedFixedPriceTerms;
    nonGuaranteedAuctionTerms?: NonGuaranteedAuctionTerms;
    nonGuaranteedFixedPriceTerms?: NonGuaranteedFixedPriceTerms;
    sellerTimeZone?: string;
}
