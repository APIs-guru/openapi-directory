import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VideoTargetingExcludedPositionTypesEnum {
    PositionTypeUnspecified = "POSITION_TYPE_UNSPECIFIED",
    Preroll = "PREROLL",
    Midroll = "MIDROLL",
    Postroll = "POSTROLL"
}
export declare enum VideoTargetingTargetedPositionTypesEnum {
    PositionTypeUnspecified = "POSITION_TYPE_UNSPECIFIED",
    Preroll = "PREROLL",
    Midroll = "MIDROLL",
    Postroll = "POSTROLL"
}
/**
 * Represents targeting information about video.
**/
export declare class VideoTargeting extends SpeakeasyBase {
    excludedPositionTypes?: VideoTargetingExcludedPositionTypesEnum[];
    targetedPositionTypes?: VideoTargetingTargetedPositionTypesEnum[];
}
