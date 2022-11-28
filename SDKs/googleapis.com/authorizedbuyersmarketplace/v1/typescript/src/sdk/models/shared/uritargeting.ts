import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UriTargeting
/** 
 * Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.
**/
export class UriTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludedUris" })
  excludedUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=targetedUris" })
  targetedUris?: string[];
}
