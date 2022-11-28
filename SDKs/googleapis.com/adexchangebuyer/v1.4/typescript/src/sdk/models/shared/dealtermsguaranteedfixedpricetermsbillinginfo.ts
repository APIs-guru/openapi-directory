import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



export class DealTermsGuaranteedFixedPriceTermsBillingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyConversionTimeMs" })
  currencyConversionTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=dfpLineItemId" })
  dfpLineItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=originalContractedQuantity" })
  originalContractedQuantity?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Price;
}
