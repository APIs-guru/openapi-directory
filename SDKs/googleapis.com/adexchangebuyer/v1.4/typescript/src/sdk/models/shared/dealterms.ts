import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";
import { DealTermsGuaranteedFixedPriceTerms } from "./dealtermsguaranteedfixedpriceterms";
import { DealTermsNonGuaranteedAuctionTerms } from "./dealtermsnonguaranteedauctionterms";
import { DealTermsNonGuaranteedFixedPriceTerms } from "./dealtermsnonguaranteedfixedpriceterms";
import { DealTermsRubiconNonGuaranteedTerms } from "./dealtermsrubiconnonguaranteedterms";


export class DealTerms extends SpeakeasyBase {
  @Metadata({ data: "json, name=brandingType" })
  brandingType?: string;

  @Metadata({ data: "json, name=crossListedExternalDealIdType" })
  crossListedExternalDealIdType?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=estimatedGrossSpend" })
  estimatedGrossSpend?: Price;

  @Metadata({ data: "json, name=estimatedImpressionsPerDay" })
  estimatedImpressionsPerDay?: string;

  @Metadata({ data: "json, name=guaranteedFixedPriceTerms" })
  guaranteedFixedPriceTerms?: DealTermsGuaranteedFixedPriceTerms;

  @Metadata({ data: "json, name=nonGuaranteedAuctionTerms" })
  nonGuaranteedAuctionTerms?: DealTermsNonGuaranteedAuctionTerms;

  @Metadata({ data: "json, name=nonGuaranteedFixedPriceTerms" })
  nonGuaranteedFixedPriceTerms?: DealTermsNonGuaranteedFixedPriceTerms;

  @Metadata({ data: "json, name=rubiconNonGuaranteedTerms" })
  rubiconNonGuaranteedTerms?: DealTermsRubiconNonGuaranteedTerms;

  @Metadata({ data: "json, name=sellerTimeZone" })
  sellerTimeZone?: string;
}
