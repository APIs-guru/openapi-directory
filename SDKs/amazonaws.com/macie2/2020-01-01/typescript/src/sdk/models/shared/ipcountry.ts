import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IpCountry
/** 
 * Provides information about the country that an IP address originated from.
**/
export class IpCountry extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
