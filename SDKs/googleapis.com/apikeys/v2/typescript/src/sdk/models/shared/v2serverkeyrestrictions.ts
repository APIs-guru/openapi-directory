import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// V2ServerKeyRestrictions
/** 
 * The IP addresses of callers that are allowed to use the key.
**/
export class V2ServerKeyRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedIps" })
  allowedIps?: string[];
}
