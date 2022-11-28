import { SpeakeasyBase } from "../../../internal/utils";
import { ContentAdsSettings } from "./contentadssettings";
export declare enum AdUnitStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Archived = "ARCHIVED"
}
/**
 * Representation of an ad unit. An ad unit represents a saved ad unit with a specific set of ad settings that have been customized within an account.
**/
export declare class AdUnitInput extends SpeakeasyBase {
    contentAdsSettings?: ContentAdsSettings;
    displayName?: string;
    state?: AdUnitStateEnum;
}
/**
 * Representation of an ad unit. An ad unit represents a saved ad unit with a specific set of ad settings that have been customized within an account.
**/
export declare class AdUnit extends SpeakeasyBase {
    contentAdsSettings?: ContentAdsSettings;
    displayName?: string;
    name?: string;
    reportingDimensionId?: string;
    state?: AdUnitStateEnum;
}
