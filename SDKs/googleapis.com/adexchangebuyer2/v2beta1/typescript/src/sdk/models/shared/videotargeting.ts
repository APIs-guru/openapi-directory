import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VideoTargetingExcludedPositionTypesEnum {
    PositionTypeUnspecified = "POSITION_TYPE_UNSPECIFIED",
    Preroll = "PREROLL",
    Midroll = "MIDROLL",
    Postroll = "POSTROLL"
}

export enum VideoTargetingTargetedPositionTypesEnum {
    PositionTypeUnspecified = "POSITION_TYPE_UNSPECIFIED",
    Preroll = "PREROLL",
    Midroll = "MIDROLL",
    Postroll = "POSTROLL"
}


// VideoTargeting
/** 
 * Represents targeting information about video.
**/
export class VideoTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludedPositionTypes" })
  excludedPositionTypes?: VideoTargetingExcludedPositionTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=targetedPositionTypes" })
  targetedPositionTypes?: VideoTargetingTargetedPositionTypesEnum[];
}
