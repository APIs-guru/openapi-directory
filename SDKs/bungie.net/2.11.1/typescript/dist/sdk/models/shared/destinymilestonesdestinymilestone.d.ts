import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyMilestoneChallengeActivity } from "./destinymilestonesdestinymilestonechallengeactivity";
import { DestinyMilestonesDestinyMilestoneQuest } from "./destinymilestonesdestinymilestonequest";
import { DestinyMilestonesDestinyMilestoneRewardCategory } from "./destinymilestonesdestinymilestonerewardcategory";
import { DestinyMilestonesDestinyMilestoneVendor } from "./destinymilestonesdestinymilestonevendor";
/**
 * Represents a runtime instance of a user's milestone status. Live Milestone data should be combined with DestinyMilestoneDefinition data to show the user a picture of what is available for them to do in the game, and their status in regards to said "things to do." Consider it a big, wonky to-do list, or Advisors 3.0 for those who remember the Destiny 1 API.
**/
export declare class DestinyMilestonesDestinyMilestone extends SpeakeasyBase {
    activities?: DestinyMilestonesDestinyMilestoneChallengeActivity[];
    availableQuests?: DestinyMilestonesDestinyMilestoneQuest[];
    endDate?: Date;
    milestoneHash?: number;
    order?: number;
    rewards?: DestinyMilestonesDestinyMilestoneRewardCategory[];
    startDate?: Date;
    values?: Map<string, number>;
    vendorHashes?: number[];
    vendors?: DestinyMilestonesDestinyMilestoneVendor[];
}
