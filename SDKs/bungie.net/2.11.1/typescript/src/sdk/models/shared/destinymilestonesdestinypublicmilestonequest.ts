import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyPublicMilestoneActivityVariant } from "./destinymilestonesdestinypublicmilestoneactivityvariant";
import { DestinyMilestonesDestinyPublicMilestoneChallenge } from "./destinymilestonesdestinypublicmilestonechallenge";



// DestinyMilestonesDestinyPublicMilestoneQuestActivity
/** 
 * A milestone need not have an active activity, but if there is one it will be returned here, along with any variant and additional information.
**/
export class DestinyMilestonesDestinyPublicMilestoneQuestActivity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityHash?: number;

  @SpeakeasyMetadata()
  activityModeHash?: number;

  @SpeakeasyMetadata()
  activityModeType?: number;

  @SpeakeasyMetadata()
  modifierHashes?: number[];

  @SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyPublicMilestoneActivityVariant })
  variants?: DestinyMilestonesDestinyPublicMilestoneActivityVariant[];
}


export class DestinyMilestonesDestinyPublicMilestoneQuest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activity?: DestinyMilestonesDestinyPublicMilestoneQuestActivity;

  @SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyPublicMilestoneChallenge })
  challenges?: DestinyMilestonesDestinyPublicMilestoneChallenge[];

  @SpeakeasyMetadata()
  questItemHash?: number;
}
