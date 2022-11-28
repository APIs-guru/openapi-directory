import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { GuaranteedFixedPriceTerms } from "./guaranteedfixedpriceterms";
import { NonGuaranteedAuctionTerms } from "./nonguaranteedauctionterms";
import { NonGuaranteedFixedPriceTerms } from "./nonguaranteedfixedpriceterms";


export enum DealTermsBrandingTypeEnum {
    BrandingTypeUnspecified = "BRANDING_TYPE_UNSPECIFIED",
    Branded = "BRANDED",
    SemiTransparent = "SEMI_TRANSPARENT"
}


// DealTerms
/** 
 * The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher.
**/
export class DealTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brandingType" })
  brandingType?: DealTermsBrandingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=estimatedGrossSpend" })
  estimatedGrossSpend?: Price;

  @SpeakeasyMetadata({ data: "json, name=estimatedImpressionsPerDay" })
  estimatedImpressionsPerDay?: string;

  @SpeakeasyMetadata({ data: "json, name=guaranteedFixedPriceTerms" })
  guaranteedFixedPriceTerms?: GuaranteedFixedPriceTerms;

  @SpeakeasyMetadata({ data: "json, name=nonGuaranteedAuctionTerms" })
  nonGuaranteedAuctionTerms?: NonGuaranteedAuctionTerms;

  @SpeakeasyMetadata({ data: "json, name=nonGuaranteedFixedPriceTerms" })
  nonGuaranteedFixedPriceTerms?: NonGuaranteedFixedPriceTerms;

  @SpeakeasyMetadata({ data: "json, name=sellerTimeZone" })
  sellerTimeZone?: string;
}
