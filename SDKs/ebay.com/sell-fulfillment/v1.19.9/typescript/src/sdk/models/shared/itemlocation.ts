import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ItemLocation
/** 
 * This type describes the physical location of an order.
**/
export class ItemLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;
}
