import { SpeakeasyBase } from "../../../internal/utils";
import { DayPartTargeting } from "./dayparttargeting";
import { CriteriaTargeting } from "./criteriatargeting";
import { InventorySizeTargeting } from "./inventorysizetargeting";
import { InventoryTypeTargeting } from "./inventorytypetargeting";
import { PlacementTargeting } from "./placementtargeting";
import { TechnologyTargeting } from "./technologytargeting";
import { VideoTargeting } from "./videotargeting";
/**
 * Targeting represents different criteria that can be used to target inventory. For example, they can choose to target inventory only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
**/
export declare class MarketplaceTargeting extends SpeakeasyBase {
    daypartTargeting?: DayPartTargeting;
    geoTargeting?: CriteriaTargeting;
    inventorySizeTargeting?: InventorySizeTargeting;
    inventoryTypeTargeting?: InventoryTypeTargeting;
    placementTargeting?: PlacementTargeting;
    technologyTargeting?: TechnologyTargeting;
    userListTargeting?: CriteriaTargeting;
    videoTargeting?: VideoTargeting;
}
