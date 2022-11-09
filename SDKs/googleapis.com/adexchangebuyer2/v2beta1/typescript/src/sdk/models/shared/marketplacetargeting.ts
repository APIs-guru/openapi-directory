import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CriteriaTargeting } from "./criteriatargeting";
import { InventorySizeTargeting } from "./inventorysizetargeting";
import { PlacementTargeting } from "./placementtargeting";
import { TechnologyTargeting } from "./technologytargeting";
import { VideoTargeting } from "./videotargeting";


// MarketplaceTargeting
/** 
 * Targeting represents different criteria that can be used by advertisers to target ad inventory. For example, they can choose to target ad requests only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
**/
export class MarketplaceTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=geoTargeting" })
  geoTargeting?: CriteriaTargeting;

  @Metadata({ data: "json, name=inventorySizeTargeting" })
  inventorySizeTargeting?: InventorySizeTargeting;

  @Metadata({ data: "json, name=placementTargeting" })
  placementTargeting?: PlacementTargeting;

  @Metadata({ data: "json, name=technologyTargeting" })
  technologyTargeting?: TechnologyTargeting;

  @Metadata({ data: "json, name=videoTargeting" })
  videoTargeting?: VideoTargeting;
}
