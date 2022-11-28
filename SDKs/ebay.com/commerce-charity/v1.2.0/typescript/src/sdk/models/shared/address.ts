import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Address
/** 
 * The physical location of the item.
**/
export class Address extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=stateOrProvince" })
  stateOrProvince?: string;
}
