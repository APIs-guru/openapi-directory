import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DayPartTargeting } from "./dayparttargeting";
import { CriteriaTargeting } from "./criteriatargeting";
import { InventorySizeTargeting } from "./inventorysizetargeting";
import { InventoryTypeTargeting } from "./inventorytypetargeting";
import { PlacementTargeting } from "./placementtargeting";
import { TechnologyTargeting } from "./technologytargeting";
import { CriteriaTargeting } from "./criteriatargeting";
import { VideoTargeting } from "./videotargeting";


// MarketplaceTargeting
/** 
 * Targeting represents different criteria that can be used to target inventory. For example, they can choose to target inventory only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
**/
export class MarketplaceTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=daypartTargeting" })
  daypartTargeting?: DayPartTargeting;

  @Metadata({ data: "json, name=geoTargeting" })
  geoTargeting?: CriteriaTargeting;

  @Metadata({ data: "json, name=inventorySizeTargeting" })
  inventorySizeTargeting?: InventorySizeTargeting;

  @Metadata({ data: "json, name=inventoryTypeTargeting" })
  inventoryTypeTargeting?: InventoryTypeTargeting;

  @Metadata({ data: "json, name=placementTargeting" })
  placementTargeting?: PlacementTargeting;

  @Metadata({ data: "json, name=technologyTargeting" })
  technologyTargeting?: TechnologyTargeting;

  @Metadata({ data: "json, name=userListTargeting" })
  userListTargeting?: CriteriaTargeting;

  @Metadata({ data: "json, name=videoTargeting" })
  videoTargeting?: VideoTargeting;
}
