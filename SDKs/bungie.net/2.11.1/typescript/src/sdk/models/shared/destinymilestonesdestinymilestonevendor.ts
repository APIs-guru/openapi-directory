import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyMilestonesDestinyMilestoneVendor
/** 
 * If a Milestone has one or more Vendors that are relevant to it, this will contain information about that vendor that you can choose to show.
**/
export class DestinyMilestonesDestinyMilestoneVendor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  previewItemHash?: number;

  @SpeakeasyMetadata()
  vendorHash?: number;
}
