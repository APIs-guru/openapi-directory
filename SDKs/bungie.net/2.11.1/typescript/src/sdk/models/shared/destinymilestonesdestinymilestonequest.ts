import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyMilestoneActivityVariant } from "./destinymilestonesdestinymilestoneactivityvariant";
import { DestinyChallengesDestinyChallengeStatus } from "./destinychallengesdestinychallengestatus";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";



// DestinyMilestonesDestinyMilestoneQuestActivity
/** 
 * *IF* the Milestone has an active Activity that can give you greater details about what you need to do, it will be returned here. Remember to associate this with the DestinyMilestoneDefinition's activities to get details about the activity, including what specific quest it is related to if you have multiple quests to choose from.
**/
export class DestinyMilestonesDestinyMilestoneQuestActivity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityHash?: number;

  @SpeakeasyMetadata()
  activityModeHash?: number;

  @SpeakeasyMetadata()
  activityModeType?: number;

  @SpeakeasyMetadata()
  modifierHashes?: number[];

  @SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestoneActivityVariant })
  variants?: DestinyMilestonesDestinyMilestoneActivityVariant[];
}


// DestinyMilestonesDestinyMilestoneQuestStatus
/** 
 * The current status of the quest for the character making the request.
**/
export class DestinyMilestonesDestinyMilestoneQuestStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  completed?: boolean;

  @SpeakeasyMetadata()
  itemInstanceId?: number;

  @SpeakeasyMetadata()
  questHash?: number;

  @SpeakeasyMetadata()
  redeemed?: boolean;

  @SpeakeasyMetadata()
  started?: boolean;

  @SpeakeasyMetadata()
  stepHash?: number;

  @SpeakeasyMetadata({ elemType: DestinyQuestsDestinyObjectiveProgress })
  stepObjectives?: DestinyQuestsDestinyObjectiveProgress[];

  @SpeakeasyMetadata()
  tracked?: boolean;

  @SpeakeasyMetadata()
  vendorHash?: number;
}


// DestinyMilestonesDestinyMilestoneQuest
/** 
 * If a Milestone has one or more Quests, this will contain the live information for the character's status with one of those quests.
**/
export class DestinyMilestonesDestinyMilestoneQuest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activity?: DestinyMilestonesDestinyMilestoneQuestActivity;

  @SpeakeasyMetadata({ elemType: DestinyChallengesDestinyChallengeStatus })
  challenges?: DestinyChallengesDestinyChallengeStatus[];

  @SpeakeasyMetadata()
  questItemHash?: number;

  @SpeakeasyMetadata()
  status?: DestinyMilestonesDestinyMilestoneQuestStatus;
}
