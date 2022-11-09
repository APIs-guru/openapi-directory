import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SalesTax
/** 
 * The applicable sales tax rate, as a percentage of the sale amount, for a given country and sales tax jurisdiction within that country.
**/
export class SalesTax extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=salesTaxJurisdictionId" })
  salesTaxJurisdictionId?: string;

  @Metadata({ data: "json, name=salesTaxPercentage" })
  salesTaxPercentage?: string;

  @Metadata({ data: "json, name=shippingAndHandlingTaxed" })
  shippingAndHandlingTaxed?: boolean;
}
