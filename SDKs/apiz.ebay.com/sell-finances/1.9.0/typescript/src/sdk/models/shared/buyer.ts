import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Buyer
/** 
 * This type is used to express details about the buyer associated with an order. At this time, the only field in this type is the eBay user ID of the buyer, but more fields may get added at a later date.
**/
export class Buyer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
