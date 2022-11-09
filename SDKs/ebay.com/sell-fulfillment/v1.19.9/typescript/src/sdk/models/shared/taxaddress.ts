import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TaxAddress
/** 
 * This container consists of address information that can be used by sellers for tax purpose.
**/
export class TaxAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=stateOrProvince" })
  stateOrProvince?: string;
}
