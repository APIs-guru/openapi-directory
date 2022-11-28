import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Buyer
/** 
 * Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID.
**/
export class Buyer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;
}
