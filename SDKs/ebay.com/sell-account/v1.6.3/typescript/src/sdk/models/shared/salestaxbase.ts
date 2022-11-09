import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SalesTaxBase
/** 
 * A container that describes the how the sales tax rate is calculated.
**/
export class SalesTaxBase extends SpeakeasyBase {
  @Metadata({ data: "json, name=salesTaxPercentage" })
  salesTaxPercentage?: string;

  @Metadata({ data: "json, name=shippingAndHandlingTaxed" })
  shippingAndHandlingTaxed?: boolean;
}
