import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used by the aspectsRecommendation container, which is returned if eBay has found a listing with missing or invalid item aspects (ASPECTS_ADOPTION compliance type).
**/
export declare class AspectRecommendations extends SpeakeasyBase {
    localizedAspectName?: string;
    suggestedValues?: string[];
}
