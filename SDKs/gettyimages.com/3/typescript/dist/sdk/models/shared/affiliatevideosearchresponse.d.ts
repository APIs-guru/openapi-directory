import { SpeakeasyBase } from "../../../internal/utils";
import { AutoCorrections } from "./autocorrections";
import { AffiliateVideo } from "./affiliatevideo";
export declare class AffiliateVideoSearchResponse extends SpeakeasyBase {
    autoCorrections?: AutoCorrections;
    videos?: AffiliateVideo[];
}
