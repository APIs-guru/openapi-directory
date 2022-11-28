import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SalesTaxJurisdiction
/** 
 * A unique ID for a sales tax jurisdiction.
**/
export class SalesTaxJurisdiction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=salesTaxJurisdictionId" })
  salesTaxJurisdictionId?: string;
}
