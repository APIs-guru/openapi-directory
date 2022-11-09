import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContentAdsSettings } from "./contentadssettings";

export enum AdUnitStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Archived = "ARCHIVED"
}


// AdUnit
/** 
 * Representation of an ad unit. An ad unit represents a saved ad unit with a specific set of ad settings that have been customized within an account.
**/
export class AdUnit extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentAdsSettings" })
  contentAdsSettings?: ContentAdsSettings;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reportingDimensionId" })
  reportingDimensionId?: string;

  @Metadata({ data: "json, name=state" })
  state?: AdUnitStateEnum;
}
