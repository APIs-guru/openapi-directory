import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// V2ServerKeyRestrictions
/** 
 * The IP addresses of callers that are allowed to use the key.
**/
export class V2ServerKeyRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedIps" })
  allowedIps?: string[];
}
