import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyMilestonesDestinyMilestoneRewardEntry
/** 
 * The character-specific data for a milestone's reward entry. See DestinyMilestoneDefinition for more information about Reward Entries.
**/
export class DestinyMilestonesDestinyMilestoneRewardEntry extends SpeakeasyBase {
  @SpeakeasyMetadata()
  earned?: boolean;

  @SpeakeasyMetadata()
  redeemed?: boolean;

  @SpeakeasyMetadata()
  rewardEntryHash?: number;
}
