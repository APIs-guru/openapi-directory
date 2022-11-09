import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IpCity
/** 
 * Provides information about the city that an IP address originated from.
**/
export class IpCity extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
