import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ItemLocation
/** 
 * This type describes the physical location of an order.
**/
export class ItemLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;
}
