import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction and AdX Preferred Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.
**/
export declare class UrlTargeting extends SpeakeasyBase {
    excludedUrls?: string[];
    targetedUrls?: string[];
}
