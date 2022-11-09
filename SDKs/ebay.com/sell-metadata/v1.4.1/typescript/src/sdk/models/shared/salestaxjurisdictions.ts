import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SalesTaxJurisdiction } from "./salestaxjurisdiction";


// SalesTaxJurisdictions
/** 
 * This complex type contains a list of sales tax jurisdictions.
**/
export class SalesTaxJurisdictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=salesTaxJurisdictions", elemType: shared.SalesTaxJurisdiction })
  salesTaxJurisdictions?: SalesTaxJurisdiction[];
}
