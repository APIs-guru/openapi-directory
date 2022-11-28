import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { DealTermsGuaranteedFixedPriceTerms } from "./dealtermsguaranteedfixedpriceterms";
import { DealTermsNonGuaranteedAuctionTerms } from "./dealtermsnonguaranteedauctionterms";
import { DealTermsNonGuaranteedFixedPriceTerms } from "./dealtermsnonguaranteedfixedpriceterms";
import { DealTermsRubiconNonGuaranteedTerms } from "./dealtermsrubiconnonguaranteedterms";



export class DealTerms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brandingType" })
  brandingType?: string;

  @SpeakeasyMetadata({ data: "json, name=crossListedExternalDealIdType" })
  crossListedExternalDealIdType?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=estimatedGrossSpend" })
  estimatedGrossSpend?: Price;

  @SpeakeasyMetadata({ data: "json, name=estimatedImpressionsPerDay" })
  estimatedImpressionsPerDay?: string;

  @SpeakeasyMetadata({ data: "json, name=guaranteedFixedPriceTerms" })
  guaranteedFixedPriceTerms?: DealTermsGuaranteedFixedPriceTerms;

  @SpeakeasyMetadata({ data: "json, name=nonGuaranteedAuctionTerms" })
  nonGuaranteedAuctionTerms?: DealTermsNonGuaranteedAuctionTerms;

  @SpeakeasyMetadata({ data: "json, name=nonGuaranteedFixedPriceTerms" })
  nonGuaranteedFixedPriceTerms?: DealTermsNonGuaranteedFixedPriceTerms;

  @SpeakeasyMetadata({ data: "json, name=rubiconNonGuaranteedTerms" })
  rubiconNonGuaranteedTerms?: DealTermsRubiconNonGuaranteedTerms;

  @SpeakeasyMetadata({ data: "json, name=sellerTimeZone" })
  sellerTimeZone?: string;
}
