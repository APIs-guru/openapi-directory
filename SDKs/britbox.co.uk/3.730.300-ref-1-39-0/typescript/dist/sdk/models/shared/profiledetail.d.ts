import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationSummary } from "./classificationsummary";
import { Watched } from "./watched";
export declare class ProfileDetail extends SpeakeasyBase {
    bookmarked: Map<string, Date>;
    color?: string;
    heroAutoplay?: boolean;
    heroWithAudio?: boolean;
    id: string;
    isActive: boolean;
    languageCode?: string;
    marketingEnabled: boolean;
    maxRatingContentFilter?: ClassificationSummary;
    minRatingPlaybackGuard?: ClassificationSummary;
    name: string;
    pinEnabled: boolean;
    purchaseEnabled: boolean;
    rated: Map<string, number>;
    segments: string[];
    watched: Map<string, Watched>;
}
