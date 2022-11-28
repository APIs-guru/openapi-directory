import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpCity
/** 
 * Provides information about the city that an IP address originated from.
**/
export class IpCity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
