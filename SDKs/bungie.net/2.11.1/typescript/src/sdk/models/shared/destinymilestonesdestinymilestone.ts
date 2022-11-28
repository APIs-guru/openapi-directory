import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyMilestoneChallengeActivity } from "./destinymilestonesdestinymilestonechallengeactivity";
import { DestinyMilestonesDestinyMilestoneQuest } from "./destinymilestonesdestinymilestonequest";
import { DestinyMilestonesDestinyMilestoneRewardCategory } from "./destinymilestonesdestinymilestonerewardcategory";
import { DestinyMilestonesDestinyMilestoneVendor } from "./destinymilestonesdestinymilestonevendor";



// DestinyMilestonesDestinyMilestone
/** 
 * Represents a runtime instance of a user's milestone status. Live Milestone data should be combined with DestinyMilestoneDefinition data to show the user a picture of what is available for them to do in the game, and their status in regards to said "things to do." Consider it a big, wonky to-do list, or Advisors 3.0 for those who remember the Destiny 1 API.
**/
export class DestinyMilestonesDestinyMilestone extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestoneChallengeActivity })
  activities?: DestinyMilestonesDestinyMilestoneChallengeActivity[];

  @SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestoneQuest })
  availableQuests?: DestinyMilestonesDestinyMilestoneQuest[];

  @SpeakeasyMetadata()
  endDate?: Date;

  @SpeakeasyMetadata()
  milestoneHash?: number;

  @SpeakeasyMetadata()
  order?: number;

  @SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestoneRewardCategory })
  rewards?: DestinyMilestonesDestinyMilestoneRewardCategory[];

  @SpeakeasyMetadata()
  startDate?: Date;

  @SpeakeasyMetadata()
  values?: Map<string, number>;

  @SpeakeasyMetadata()
  vendorHashes?: number[];

  @SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestoneVendor })
  vendors?: DestinyMilestonesDestinyMilestoneVendor[];
}
