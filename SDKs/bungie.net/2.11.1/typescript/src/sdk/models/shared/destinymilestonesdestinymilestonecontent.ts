import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyMilestonesDestinyMilestoneContentItemCategory } from "./destinymilestonesdestinymilestonecontentitemcategory";



// DestinyMilestonesDestinyMilestoneContent
/** 
 * Represents localized, extended content related to Milestones. This is intentionally returned by a separate endpoint and not with Character-level Milestone data because we do not put localized data into standard Destiny responses, both for brevity of response and for caching purposes. If you really need this data, hit the Milestone Content endpoint.
**/
export class DestinyMilestonesDestinyMilestoneContent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  about?: string;

  @SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestoneContentItemCategory })
  itemCategories?: DestinyMilestonesDestinyMilestoneContentItemCategory[];

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  tips?: string[];
}
