import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpCountry
/** 
 * Provides information about the country that an IP address originated from.
**/
export class IpCountry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
