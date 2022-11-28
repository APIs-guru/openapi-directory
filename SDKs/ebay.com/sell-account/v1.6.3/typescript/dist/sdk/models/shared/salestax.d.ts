import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The applicable sales tax rate, as a percentage of the sale amount, for a given country and sales tax jurisdiction within that country.
**/
export declare class SalesTax extends SpeakeasyBase {
    countryCode?: string;
    salesTaxJurisdictionId?: string;
    salesTaxPercentage?: string;
    shippingAndHandlingTaxed?: boolean;
}
