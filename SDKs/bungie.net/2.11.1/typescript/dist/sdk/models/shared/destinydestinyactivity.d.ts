import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyChallengesDestinyChallengeStatus } from "./destinychallengesdestinychallengestatus";
/**
 * Represents the "Live" data that we can obtain about a Character's status with a specific Activity. This will tell you whether the character can participate in the activity, as well as some other basic mutable information.
 * Meant to be combined with static DestinyActivityDefinition data for a full picture of the Activity.
**/
export declare class DestinyDestinyActivity extends SpeakeasyBase {
    activityHash?: number;
    booleanActivityOptions?: Map<string, boolean>;
    canJoin?: boolean;
    canLead?: boolean;
    challenges?: DestinyChallengesDestinyChallengeStatus[];
    difficultyTier?: number;
    displayLevel?: number;
    isCompleted?: boolean;
    isNew?: boolean;
    isVisible?: boolean;
    loadoutRequirementIndex?: number;
    modifierHashes?: number[];
    recommendedLight?: number;
}
