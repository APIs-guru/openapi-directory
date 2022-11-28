import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ScoreComponentRecommendationAction } from "./googlecloudapigeev1scorecomponentrecommendationaction";
/**
 * Recommendation based on security concerns and score.
**/
export declare class GoogleCloudApigeeV1ScoreComponentRecommendation extends SpeakeasyBase {
    actions?: GoogleCloudApigeeV1ScoreComponentRecommendationAction[];
    description?: string;
    impact?: number;
    title?: string;
}
