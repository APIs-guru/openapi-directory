import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SalesTax
/** 
 * The applicable sales tax rate, as a percentage of the sale amount, for a given country and sales tax jurisdiction within that country.
**/
export class SalesTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=salesTaxJurisdictionId" })
  salesTaxJurisdictionId?: string;

  @SpeakeasyMetadata({ data: "json, name=salesTaxPercentage" })
  salesTaxPercentage?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingAndHandlingTaxed" })
  shippingAndHandlingTaxed?: boolean;
}
