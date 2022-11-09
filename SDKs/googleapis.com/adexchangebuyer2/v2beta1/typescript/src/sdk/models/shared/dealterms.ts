import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";
import { GuaranteedFixedPriceTerms } from "./guaranteedfixedpriceterms";
import { NonGuaranteedAuctionTerms } from "./nonguaranteedauctionterms";
import { NonGuaranteedFixedPriceTerms } from "./nonguaranteedfixedpriceterms";

export enum DealTermsBrandingTypeEnum {
    BrandingTypeUnspecified = "BRANDING_TYPE_UNSPECIFIED"
,    Branded = "BRANDED"
,    SemiTransparent = "SEMI_TRANSPARENT"
}


// DealTerms
/** 
 * The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher.
**/
export class DealTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=brandingType" })
  brandingType?: DealTermsBrandingTypeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=estimatedGrossSpend" })
  estimatedGrossSpend?: Price;

  @Metadata({ data: "json, name=estimatedImpressionsPerDay" })
  estimatedImpressionsPerDay?: string;

  @Metadata({ data: "json, name=guaranteedFixedPriceTerms" })
  guaranteedFixedPriceTerms?: GuaranteedFixedPriceTerms;

  @Metadata({ data: "json, name=nonGuaranteedAuctionTerms" })
  nonGuaranteedAuctionTerms?: NonGuaranteedAuctionTerms;

  @Metadata({ data: "json, name=nonGuaranteedFixedPriceTerms" })
  nonGuaranteedFixedPriceTerms?: NonGuaranteedFixedPriceTerms;

  @Metadata({ data: "json, name=sellerTimeZone" })
  sellerTimeZone?: string;
}
