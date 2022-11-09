import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoCorrections } from "./autocorrections";
import { AffiliateImage } from "./affiliateimage";
export declare class AffiliateImageSearchResponse extends SpeakeasyBase {
    autoCorrections?: AutoCorrections;
    images?: AffiliateImage[];
}
