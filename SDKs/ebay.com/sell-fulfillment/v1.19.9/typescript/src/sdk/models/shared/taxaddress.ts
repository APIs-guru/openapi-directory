import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TaxAddress
/** 
 * This container consists of address information that can be used by sellers for tax purpose.
**/
export class TaxAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=stateOrProvince" })
  stateOrProvince?: string;
}
