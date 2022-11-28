import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SalesTaxBase
/** 
 * A container that describes the how the sales tax rate is calculated.
**/
export class SalesTaxBase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=salesTaxPercentage" })
  salesTaxPercentage?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingAndHandlingTaxed" })
  shippingAndHandlingTaxed?: boolean;
}
