import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyChallengesDestinyChallengeStatus } from "./destinychallengesdestinychallengestatus";
import { DestinyMilestonesDestinyMilestoneActivityPhase } from "./destinymilestonesdestinymilestoneactivityphase";
export declare class DestinyMilestonesDestinyMilestoneChallengeActivity extends SpeakeasyBase {
    activityHash?: number;
    booleanActivityOptions?: Map<string, boolean>;
    challenges?: DestinyChallengesDestinyChallengeStatus[];
    loadoutRequirementIndex?: number;
    modifierHashes?: number[];
    phases?: DestinyMilestonesDestinyMilestoneActivityPhase[];
}
