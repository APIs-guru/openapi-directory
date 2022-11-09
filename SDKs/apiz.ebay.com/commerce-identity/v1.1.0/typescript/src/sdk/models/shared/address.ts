import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Address
/** 
 * The type that defines the fields for an address.
**/
export class Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=addressLine1" })
  addressLine1?: string;

  @Metadata({ data: "json, name=addressLine2" })
  addressLine2?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=county" })
  county?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=stateOrProvince" })
  stateOrProvince?: string;
}
