import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.
**/
export declare class UriTargeting extends SpeakeasyBase {
    excludedUris?: string[];
    targetedUris?: string[];
}
