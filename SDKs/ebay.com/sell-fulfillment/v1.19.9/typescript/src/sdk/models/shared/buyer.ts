import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaxAddress } from "./taxaddress";
import { TaxIdentifier } from "./taxidentifier";


// Buyer
/** 
 * This type contains information about the order's buyer.
**/
export class Buyer extends SpeakeasyBase {
  @Metadata({ data: "json, name=taxAddress" })
  taxAddress?: TaxAddress;

  @Metadata({ data: "json, name=taxIdentifier" })
  taxIdentifier?: TaxIdentifier;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
