import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyChallengesDestinyChallengeStatusObjective
/** 
 * The progress - including completion status - of the active challenge.
**/
export class DestinyChallengesDestinyChallengeStatusObjective extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityHash?: number;

  @SpeakeasyMetadata()
  complete?: boolean;

  @SpeakeasyMetadata()
  completionValue?: number;

  @SpeakeasyMetadata()
  destinationHash?: number;

  @SpeakeasyMetadata()
  objectiveHash?: number;

  @SpeakeasyMetadata()
  progress?: number;

  @SpeakeasyMetadata()
  visible?: boolean;
}


// DestinyChallengesDestinyChallengeStatus
/** 
 * Represents the status and other related information for a challenge that is - or was - available to a player. 
 * A challenge is a bonus objective, generally tacked onto Quests or Activities, that provide additional variations on play.
**/
export class DestinyChallengesDestinyChallengeStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  objective?: DestinyChallengesDestinyChallengeStatusObjective;
}
