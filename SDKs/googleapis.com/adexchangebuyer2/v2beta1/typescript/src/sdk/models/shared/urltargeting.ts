import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UrlTargeting
/** 
 * Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction and AdX Preferred Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.
**/
export class UrlTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludedUrls" })
  excludedUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=targetedUrls" })
  targetedUrls?: string[];
}
