import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentAdsSettings } from "./contentadssettings";


export enum AdUnitStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Archived = "ARCHIVED"
}


// AdUnitInput
/** 
 * Representation of an ad unit. An ad unit represents a saved ad unit with a specific set of ad settings that have been customized within an account.
**/
export class AdUnitInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentAdsSettings" })
  contentAdsSettings?: ContentAdsSettings;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: AdUnitStateEnum;
}


// AdUnit
/** 
 * Representation of an ad unit. An ad unit represents a saved ad unit with a specific set of ad settings that have been customized within an account.
**/
export class AdUnit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentAdsSettings" })
  contentAdsSettings?: ContentAdsSettings;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reportingDimensionId" })
  reportingDimensionId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: AdUnitStateEnum;
}
