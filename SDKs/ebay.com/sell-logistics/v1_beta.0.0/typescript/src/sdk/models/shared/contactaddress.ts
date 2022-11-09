import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContactAddress
/** 
 * This complex type specifies the details of a geographical address.
**/
export class ContactAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=addressLine1" })
  addressLine1?: string;

  @Metadata({ data: "json, name=addressLine2" })
  addressLine2?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=county" })
  county?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=stateOrProvince" })
  stateOrProvince?: string;
}
