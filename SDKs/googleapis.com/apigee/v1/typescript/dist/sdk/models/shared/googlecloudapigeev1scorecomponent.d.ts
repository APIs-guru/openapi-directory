import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1ScoreComponentRecommendation } from "./googlecloudapigeev1scorecomponentrecommendation";
/**
 * Component is an individual security element that is scored.
**/
export declare class GoogleCloudApigeeV1ScoreComponent extends SpeakeasyBase {
    calculateTime?: string;
    dataCaptureTime?: string;
    drilldownPaths?: string[];
    recommendations?: GoogleCloudApigeeV1ScoreComponentRecommendation[];
    score?: number;
    scorePath?: string;
}
