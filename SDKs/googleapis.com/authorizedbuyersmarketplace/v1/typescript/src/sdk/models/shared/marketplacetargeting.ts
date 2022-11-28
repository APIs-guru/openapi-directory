import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DayPartTargeting } from "./dayparttargeting";
import { CriteriaTargeting } from "./criteriatargeting";
import { InventorySizeTargeting } from "./inventorysizetargeting";
import { InventoryTypeTargeting } from "./inventorytypetargeting";
import { PlacementTargeting } from "./placementtargeting";
import { TechnologyTargeting } from "./technologytargeting";
import { VideoTargeting } from "./videotargeting";



// MarketplaceTargeting
/** 
 * Targeting represents different criteria that can be used to target inventory. For example, they can choose to target inventory only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
**/
export class MarketplaceTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=daypartTargeting" })
  daypartTargeting?: DayPartTargeting;

  @SpeakeasyMetadata({ data: "json, name=geoTargeting" })
  geoTargeting?: CriteriaTargeting;

  @SpeakeasyMetadata({ data: "json, name=inventorySizeTargeting" })
  inventorySizeTargeting?: InventorySizeTargeting;

  @SpeakeasyMetadata({ data: "json, name=inventoryTypeTargeting" })
  inventoryTypeTargeting?: InventoryTypeTargeting;

  @SpeakeasyMetadata({ data: "json, name=placementTargeting" })
  placementTargeting?: PlacementTargeting;

  @SpeakeasyMetadata({ data: "json, name=technologyTargeting" })
  technologyTargeting?: TechnologyTargeting;

  @SpeakeasyMetadata({ data: "json, name=userListTargeting" })
  userListTargeting?: CriteriaTargeting;

  @SpeakeasyMetadata({ data: "json, name=videoTargeting" })
  videoTargeting?: VideoTargeting;
}
