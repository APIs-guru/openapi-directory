import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SalesTaxJurisdiction } from "./salestaxjurisdiction";



// SalesTaxJurisdictions
/** 
 * This complex type contains a list of sales tax jurisdictions.
**/
export class SalesTaxJurisdictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=salesTaxJurisdictions", elemType: SalesTaxJurisdiction })
  salesTaxJurisdictions?: SalesTaxJurisdiction[];
}
