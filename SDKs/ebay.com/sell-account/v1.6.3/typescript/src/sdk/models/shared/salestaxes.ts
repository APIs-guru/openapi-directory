import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SalesTax } from "./salestax";


// SalesTaxes
/** 
 * A list of sales tax tables.
**/
export class SalesTaxes extends SpeakeasyBase {
  @Metadata({ data: "json, name=salesTaxes", elemType: shared.SalesTax })
  salesTaxes?: SalesTax[];
}
