import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// V2BrowserKeyRestrictions
/** 
 * The HTTP referrers (websites) that are allowed to use the key.
**/
export class V2BrowserKeyRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedReferrers" })
  allowedReferrers?: string[];
}
