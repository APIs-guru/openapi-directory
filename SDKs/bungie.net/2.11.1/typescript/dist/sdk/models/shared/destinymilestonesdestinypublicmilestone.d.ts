import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyPublicMilestoneChallengeActivity } from "./destinymilestonesdestinypublicmilestonechallengeactivity";
import { DestinyMilestonesDestinyPublicMilestoneQuest } from "./destinymilestonesdestinypublicmilestonequest";
import { DestinyMilestonesDestinyPublicMilestoneVendor } from "./destinymilestonesdestinypublicmilestonevendor";
/**
 * Information about milestones, presented in a character state-agnostic manner. Combine this data with DestinyMilestoneDefinition to get a full picture of the milestone, which is basically a checklist of things to do in the game. Think of this as GetPublicAdvisors 3.0, for those who used the Destiny 1 API.
**/
export declare class DestinyMilestonesDestinyPublicMilestone extends SpeakeasyBase {
    activities?: DestinyMilestonesDestinyPublicMilestoneChallengeActivity[];
    availableQuests?: DestinyMilestonesDestinyPublicMilestoneQuest[];
    endDate?: Date;
    milestoneHash?: number;
    order?: number;
    startDate?: Date;
    vendorHashes?: number[];
    vendors?: DestinyMilestonesDestinyPublicMilestoneVendor[];
}
