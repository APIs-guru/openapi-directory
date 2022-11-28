import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContactAddress
/** 
 * This complex type specifies the details of a geographical address.
**/
export class ContactAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressLine1" })
  addressLine1?: string;

  @SpeakeasyMetadata({ data: "json, name=addressLine2" })
  addressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=stateOrProvince" })
  stateOrProvince?: string;
}
