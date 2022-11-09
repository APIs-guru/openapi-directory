import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Buyer
/** 
 * Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID.
**/
export class Buyer extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;
}
