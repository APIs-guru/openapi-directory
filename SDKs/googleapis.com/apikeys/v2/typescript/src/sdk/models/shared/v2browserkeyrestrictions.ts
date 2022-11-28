import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// V2BrowserKeyRestrictions
/** 
 * The HTTP referrers (websites) that are allowed to use the key.
**/
export class V2BrowserKeyRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedReferrers" })
  allowedReferrers?: string[];
}
