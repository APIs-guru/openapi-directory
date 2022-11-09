import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UriTargeting
/** 
 * Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.
**/
export class UriTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludedUris" })
  excludedUris?: string[];

  @Metadata({ data: "json, name=targetedUris" })
  targetedUris?: string[];
}
