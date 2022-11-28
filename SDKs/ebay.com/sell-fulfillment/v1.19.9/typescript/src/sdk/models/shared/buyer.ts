import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaxAddress } from "./taxaddress";
import { TaxIdentifier } from "./taxidentifier";



// Buyer
/** 
 * This type contains information about the order's buyer.
**/
export class Buyer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taxAddress" })
  taxAddress?: TaxAddress;

  @SpeakeasyMetadata({ data: "json, name=taxIdentifier" })
  taxIdentifier?: TaxIdentifier;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
