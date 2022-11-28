import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyMilestoneContentItemCategory } from "./destinymilestonesdestinymilestonecontentitemcategory";
import { DestinyMilestonesDestinyPublicMilestoneChallengeActivity } from "./destinymilestonesdestinypublicmilestonechallengeactivity";
import { DestinyMilestonesDestinyPublicMilestoneQuest } from "./destinymilestonesdestinypublicmilestonequest";
import { DestinyMilestonesDestinyPublicMilestoneVendor } from "./destinymilestonesdestinypublicmilestonevendor";
/**
 * A destiny event will not necessarily have milestone "custom content", but if it does the details will be here.
**/
export declare class TrendingTrendingEntryDestinyRitualEventContent extends SpeakeasyBase {
    about?: string;
    itemCategories?: DestinyMilestonesDestinyMilestoneContentItemCategory[];
    status?: string;
    tips?: string[];
}
/**
 * A destiny event does not necessarily have a related Milestone, but if it does the details will be returned here.
**/
export declare class TrendingTrendingEntryDestinyRitualMilestoneDetails extends SpeakeasyBase {
    activities?: DestinyMilestonesDestinyPublicMilestoneChallengeActivity[];
    availableQuests?: DestinyMilestonesDestinyPublicMilestoneQuest[];
    endDate?: Date;
    milestoneHash?: number;
    order?: number;
    startDate?: Date;
    vendorHashes?: number[];
    vendors?: DestinyMilestonesDestinyPublicMilestoneVendor[];
}
export declare class TrendingTrendingEntryDestinyRitual extends SpeakeasyBase {
    dateEnd?: Date;
    dateStart?: Date;
    eventContent?: TrendingTrendingEntryDestinyRitualEventContent;
    icon?: string;
    image?: string;
    milestoneDetails?: TrendingTrendingEntryDestinyRitualMilestoneDetails;
    subtitle?: string;
    title?: string;
}
