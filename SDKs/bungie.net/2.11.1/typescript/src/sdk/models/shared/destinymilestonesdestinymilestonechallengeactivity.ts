import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyChallengesDestinyChallengeStatus } from "./destinychallengesdestinychallengestatus";
import { DestinyMilestonesDestinyMilestoneActivityPhase } from "./destinymilestonesdestinymilestoneactivityphase";



export class DestinyMilestonesDestinyMilestoneChallengeActivity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityHash?: number;

  @SpeakeasyMetadata()
  booleanActivityOptions?: Map<string, boolean>;

  @SpeakeasyMetadata({ elemType: DestinyChallengesDestinyChallengeStatus })
  challenges?: DestinyChallengesDestinyChallengeStatus[];

  @SpeakeasyMetadata()
  loadoutRequirementIndex?: number;

  @SpeakeasyMetadata()
  modifierHashes?: number[];

  @SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestoneActivityPhase })
  phases?: DestinyMilestonesDestinyMilestoneActivityPhase[];
}
