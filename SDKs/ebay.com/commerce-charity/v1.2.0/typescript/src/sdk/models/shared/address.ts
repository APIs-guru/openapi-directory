import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Address
/** 
 * The physical location of the item.
**/
export class Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=stateOrProvince" })
  stateOrProvince?: string;
}
