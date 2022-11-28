import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The progress - including completion status - of the active challenge.
**/
export declare class DestinyChallengesDestinyChallengeStatusObjective extends SpeakeasyBase {
    activityHash?: number;
    complete?: boolean;
    completionValue?: number;
    destinationHash?: number;
    objectiveHash?: number;
    progress?: number;
    visible?: boolean;
}
/**
 * Represents the status and other related information for a challenge that is - or was - available to a player.
 * A challenge is a bonus objective, generally tacked onto Quests or Activities, that provide additional variations on play.
**/
export declare class DestinyChallengesDestinyChallengeStatus extends SpeakeasyBase {
    objective?: DestinyChallengesDestinyChallengeStatusObjective;
}
