import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationSummary } from "./classificationsummary";
export declare class ProfileSummary extends SpeakeasyBase {
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
    segments: string[];
}
