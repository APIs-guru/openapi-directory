import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SalesTax } from "./salestax";



// SalesTaxes
/** 
 * A list of sales tax tables.
**/
export class SalesTaxes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=salesTaxes", elemType: SalesTax })
  salesTaxes?: SalesTax[];
}
