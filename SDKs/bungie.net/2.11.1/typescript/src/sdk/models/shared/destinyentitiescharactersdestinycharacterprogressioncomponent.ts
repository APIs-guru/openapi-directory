import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyProgressionDestinyFactionProgression } from "./destinyprogressiondestinyfactionprogression";
import { DestinyMilestonesDestinyMilestone } from "./destinymilestonesdestinymilestone";
import { DestinyDestinyProgression } from "./destinydestinyprogression";
import { DestinyQuestsDestinyQuestStatus } from "./destinyquestsdestinyqueststatus";
import { DestinyArtifactsDestinyArtifactTier } from "./destinyartifactsdestinyartifacttier";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";



// DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact
/** 
 * Data related to your progress on the current season's artifact that can vary per character.
**/
export class DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artifactHash?: number;

  @SpeakeasyMetadata()
  pointsUsed?: number;

  @SpeakeasyMetadata()
  resetCount?: number;

  @SpeakeasyMetadata({ elemType: DestinyArtifactsDestinyArtifactTier })
  tiers?: DestinyArtifactsDestinyArtifactTier[];
}


// DestinyEntitiesCharactersDestinyCharacterProgressionComponent
/** 
 * This component returns anything that could be considered "Progression" on a user: data where the user is gaining levels, reputation, completions, rewards, etc...
**/
export class DestinyEntitiesCharactersDestinyCharacterProgressionComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checklists?: Map<string, Map<string, boolean>>;

  @SpeakeasyMetadata({ elemType: DestinyProgressionDestinyFactionProgression })
  factions?: Map<string, DestinyProgressionDestinyFactionProgression>;

  @SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestone })
  milestones?: Map<string, DestinyMilestonesDestinyMilestone>;

  @SpeakeasyMetadata({ elemType: DestinyDestinyProgression })
  progressions?: Map<string, DestinyDestinyProgression>;

  @SpeakeasyMetadata({ elemType: DestinyQuestsDestinyQuestStatus })
  quests?: DestinyQuestsDestinyQuestStatus[];

  @SpeakeasyMetadata()
  seasonalArtifact?: DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact;

  @SpeakeasyMetadata({ elemType: DestinyQuestsDestinyObjectiveProgress, elemDepth: 2 })
  uninstancedItemObjectives?: Map<string, DestinyQuestsDestinyObjectiveProgress[]>;
}
