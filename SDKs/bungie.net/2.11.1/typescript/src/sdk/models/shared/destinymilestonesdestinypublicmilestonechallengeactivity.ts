import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DestinyMilestonesDestinyPublicMilestoneChallengeActivity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityHash?: number;

  @SpeakeasyMetadata()
  booleanActivityOptions?: Map<string, boolean>;

  @SpeakeasyMetadata()
  challengeObjectiveHashes?: number[];

  @SpeakeasyMetadata()
  loadoutRequirementIndex?: number;

  @SpeakeasyMetadata()
  modifierHashes?: number[];

  @SpeakeasyMetadata()
  phaseHashes?: number[];
}
