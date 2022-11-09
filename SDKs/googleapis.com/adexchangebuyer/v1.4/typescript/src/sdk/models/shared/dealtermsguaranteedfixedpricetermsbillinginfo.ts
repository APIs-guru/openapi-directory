import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";


export class DealTermsGuaranteedFixedPriceTermsBillingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyConversionTimeMs" })
  currencyConversionTimeMs?: string;

  @Metadata({ data: "json, name=dfpLineItemId" })
  dfpLineItemId?: string;

  @Metadata({ data: "json, name=originalContractedQuantity" })
  originalContractedQuantity?: string;

  @Metadata({ data: "json, name=price" })
  price?: Price;
}
