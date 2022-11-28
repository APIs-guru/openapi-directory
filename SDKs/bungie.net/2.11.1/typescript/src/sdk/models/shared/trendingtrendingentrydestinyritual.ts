import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyMilestoneContentItemCategory } from "./destinymilestonesdestinymilestonecontentitemcategory";
import { DestinyMilestonesDestinyPublicMilestoneChallengeActivity } from "./destinymilestonesdestinypublicmilestonechallengeactivity";
import { DestinyMilestonesDestinyPublicMilestoneQuest } from "./destinymilestonesdestinypublicmilestonequest";
import { DestinyMilestonesDestinyPublicMilestoneVendor } from "./destinymilestonesdestinypublicmilestonevendor";



// TrendingTrendingEntryDestinyRitualEventContent
/** 
 * A destiny event will not necessarily have milestone "custom content", but if it does the details will be here.
**/
export class TrendingTrendingEntryDestinyRitualEventContent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  about?: string;

  @SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestoneContentItemCategory })
  itemCategories?: DestinyMilestonesDestinyMilestoneContentItemCategory[];

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  tips?: string[];
}


// TrendingTrendingEntryDestinyRitualMilestoneDetails
/** 
 * A destiny event does not necessarily have a related Milestone, but if it does the details will be returned here.
**/
export class TrendingTrendingEntryDestinyRitualMilestoneDetails extends SpeakeasyBase {
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


export class TrendingTrendingEntryDestinyRitual extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dateEnd?: Date;

  @SpeakeasyMetadata()
  dateStart?: Date;

  @SpeakeasyMetadata()
  eventContent?: TrendingTrendingEntryDestinyRitualEventContent;

  @SpeakeasyMetadata()
  icon?: string;

  @SpeakeasyMetadata()
  image?: string;

  @SpeakeasyMetadata()
  milestoneDetails?: TrendingTrendingEntryDestinyRitualMilestoneDetails;

  @SpeakeasyMetadata()
  subtitle?: string;

  @SpeakeasyMetadata()
  title?: string;
}
