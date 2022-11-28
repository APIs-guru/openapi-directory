import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyPublicMilestoneChallengeActivity } from "./destinymilestonesdestinypublicmilestonechallengeactivity";
import { DestinyMilestonesDestinyPublicMilestoneQuest } from "./destinymilestonesdestinypublicmilestonequest";
import { DestinyMilestonesDestinyPublicMilestoneVendor } from "./destinymilestonesdestinypublicmilestonevendor";



// DestinyMilestonesDestinyPublicMilestone
/** 
 * Information about milestones, presented in a character state-agnostic manner. Combine this data with DestinyMilestoneDefinition to get a full picture of the milestone, which is basically a checklist of things to do in the game. Think of this as GetPublicAdvisors 3.0, for those who used the Destiny 1 API.
**/
export class DestinyMilestonesDestinyPublicMilestone extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyPublicMilestoneChallengeActivity })
  activities?: DestinyMilestonesDestinyPublicMilestoneChallengeActivity[];

  @SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyPublicMilestoneQuest })
  availableQuests?: DestinyMilestonesDestinyPublicMilestoneQuest[];

  @SpeakeasyMetadata()
  endDate?: Date;

  @SpeakeasyMetadata()
  milestoneHash?: number;

  @SpeakeasyMetadata()
  order?: number;

  @SpeakeasyMetadata()
  startDate?: Date;

  @SpeakeasyMetadata()
  vendorHashes?: number[];

  @SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyPublicMilestoneVendor })
  vendors?: DestinyMilestonesDestinyPublicMilestoneVendor[];
}
