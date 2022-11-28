import { SpeakeasyBase } from "../../../internal/utils";
import { CriteriaTargeting } from "./criteriatargeting";
import { InventorySizeTargeting } from "./inventorysizetargeting";
import { PlacementTargeting } from "./placementtargeting";
import { TechnologyTargeting } from "./technologytargeting";
import { VideoTargeting } from "./videotargeting";
/**
 * Targeting represents different criteria that can be used by advertisers to target ad inventory. For example, they can choose to target ad requests only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.
**/
export declare class MarketplaceTargeting extends SpeakeasyBase {
    geoTargeting?: CriteriaTargeting;
    inventorySizeTargeting?: InventorySizeTargeting;
    placementTargeting?: PlacementTargeting;
    technologyTargeting?: TechnologyTargeting;
    videoTargeting?: VideoTargeting;
}
