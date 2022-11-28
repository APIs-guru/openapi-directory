import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyProgression } from "./destinydestinyprogression";
/**
 * Data related to your progress on the current season's artifact that is the same across characters.
**/
export declare class DestinyComponentsProfilesDestinyProfileProgressionComponentSeasonalArtifact extends SpeakeasyBase {
    artifactHash?: number;
    pointProgression?: DestinyDestinyProgression;
    pointsAcquired?: number;
    powerBonus?: number;
    powerBonusProgression?: DestinyDestinyProgression;
}
/**
 * The set of progression-related information that applies at a Profile-wide level for your Destiny experience. This differs from the Jimi Hendrix Experience because there's less guitars on fire. Yet. #spoileralert?
 * This will include information such as Checklist info.
**/
export declare class DestinyComponentsProfilesDestinyProfileProgressionComponent extends SpeakeasyBase {
    checklists?: Map<string, Map<string, boolean>>;
    seasonalArtifact?: DestinyComponentsProfilesDestinyProfileProgressionComponentSeasonalArtifact;
}
