import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyChallengesDestinyChallengeStatus } from "./destinychallengesdestinychallengestatus";



// DestinyDestinyActivity
/** 
 * Represents the "Live" data that we can obtain about a Character's status with a specific Activity. This will tell you whether the character can participate in the activity, as well as some other basic mutable information. 
 * Meant to be combined with static DestinyActivityDefinition data for a full picture of the Activity.
**/
export class DestinyDestinyActivity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityHash?: number;

  @SpeakeasyMetadata()
  booleanActivityOptions?: Map<string, boolean>;

  @SpeakeasyMetadata()
  canJoin?: boolean;

  @SpeakeasyMetadata()
  canLead?: boolean;

  @SpeakeasyMetadata({ elemType: DestinyChallengesDestinyChallengeStatus })
  challenges?: DestinyChallengesDestinyChallengeStatus[];

  @SpeakeasyMetadata()
  difficultyTier?: number;

  @SpeakeasyMetadata()
  displayLevel?: number;

  @SpeakeasyMetadata()
  isCompleted?: boolean;

  @SpeakeasyMetadata()
  isNew?: boolean;

  @SpeakeasyMetadata()
  isVisible?: boolean;

  @SpeakeasyMetadata()
  loadoutRequirementIndex?: number;

  @SpeakeasyMetadata()
  modifierHashes?: number[];

  @SpeakeasyMetadata()
  recommendedLight?: number;
}
