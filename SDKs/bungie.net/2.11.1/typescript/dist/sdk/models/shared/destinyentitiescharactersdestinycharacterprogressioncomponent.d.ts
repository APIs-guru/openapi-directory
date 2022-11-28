import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyProgressionDestinyFactionProgression } from "./destinyprogressiondestinyfactionprogression";
import { DestinyMilestonesDestinyMilestone } from "./destinymilestonesdestinymilestone";
import { DestinyDestinyProgression } from "./destinydestinyprogression";
import { DestinyQuestsDestinyQuestStatus } from "./destinyquestsdestinyqueststatus";
import { DestinyArtifactsDestinyArtifactTier } from "./destinyartifactsdestinyartifacttier";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";
/**
 * Data related to your progress on the current season's artifact that can vary per character.
**/
export declare class DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact extends SpeakeasyBase {
    artifactHash?: number;
    pointsUsed?: number;
    resetCount?: number;
    tiers?: DestinyArtifactsDestinyArtifactTier[];
}
/**
 * This component returns anything that could be considered "Progression" on a user: data where the user is gaining levels, reputation, completions, rewards, etc...
**/
export declare class DestinyEntitiesCharactersDestinyCharacterProgressionComponent extends SpeakeasyBase {
    checklists?: Map<string, Map<string, boolean>>;
    factions?: Map<string, DestinyProgressionDestinyFactionProgression>;
    milestones?: Map<string, DestinyMilestonesDestinyMilestone>;
    progressions?: Map<string, DestinyDestinyProgression>;
    quests?: DestinyQuestsDestinyQuestStatus[];
    seasonalArtifact?: DestinyEntitiesCharactersDestinyCharacterProgressionComponentSeasonalArtifact;
    uninstancedItemObjectives?: Map<string, DestinyQuestsDestinyObjectiveProgress[]>;
}
