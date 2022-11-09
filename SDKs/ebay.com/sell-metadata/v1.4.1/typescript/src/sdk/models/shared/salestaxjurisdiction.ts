import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SalesTaxJurisdiction
/** 
 * A unique ID for a sales tax jurisdiction.
**/
export class SalesTaxJurisdiction extends SpeakeasyBase {
  @Metadata({ data: "json, name=salesTaxJurisdictionId" })
  salesTaxJurisdictionId?: string;
}
