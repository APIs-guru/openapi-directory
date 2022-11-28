import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyProgression } from "./destinydestinyprogression";



// DestinyComponentsProfilesDestinyProfileProgressionComponentSeasonalArtifact
/** 
 * Data related to your progress on the current season's artifact that is the same across characters.
**/
export class DestinyComponentsProfilesDestinyProfileProgressionComponentSeasonalArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artifactHash?: number;

  @SpeakeasyMetadata()
  pointProgression?: DestinyDestinyProgression;

  @SpeakeasyMetadata()
  pointsAcquired?: number;

  @SpeakeasyMetadata()
  powerBonus?: number;

  @SpeakeasyMetadata()
  powerBonusProgression?: DestinyDestinyProgression;
}


// DestinyComponentsProfilesDestinyProfileProgressionComponent
/** 
 * The set of progression-related information that applies at a Profile-wide level for your Destiny experience. This differs from the Jimi Hendrix Experience because there's less guitars on fire. Yet. #spoileralert?
 * This will include information such as Checklist info.
**/
export class DestinyComponentsProfilesDestinyProfileProgressionComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checklists?: Map<string, Map<string, boolean>>;

  @SpeakeasyMetadata()
  seasonalArtifact?: DestinyComponentsProfilesDestinyProfileProgressionComponentSeasonalArtifact;
}
