import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VideoTargetingExcludedPositionTypesEnum {
    PositionTypeUnspecified = "POSITION_TYPE_UNSPECIFIED"
,    Preroll = "PREROLL"
,    Midroll = "MIDROLL"
,    Postroll = "POSTROLL"
}

export enum VideoTargetingTargetedPositionTypesEnum {
    PositionTypeUnspecified = "POSITION_TYPE_UNSPECIFIED"
,    Preroll = "PREROLL"
,    Midroll = "MIDROLL"
,    Postroll = "POSTROLL"
}


// VideoTargeting
/** 
 * Represents targeting information about video.
**/
export class VideoTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludedPositionTypes" })
  excludedPositionTypes?: VideoTargetingExcludedPositionTypesEnum[];

  @Metadata({ data: "json, name=targetedPositionTypes" })
  targetedPositionTypes?: VideoTargetingTargetedPositionTypesEnum[];
}
