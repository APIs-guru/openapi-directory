import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyMilestonesDestinyMilestoneContentItemCategory
/** 
 * Part of our dynamic, localized Milestone content is arbitrary categories of items. These are built in our content management system, and thus aren't the same as programmatically generated rewards.
**/
export class DestinyMilestonesDestinyMilestoneContentItemCategory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  itemHashes?: number[];

  @SpeakeasyMetadata()
  title?: string;
}
