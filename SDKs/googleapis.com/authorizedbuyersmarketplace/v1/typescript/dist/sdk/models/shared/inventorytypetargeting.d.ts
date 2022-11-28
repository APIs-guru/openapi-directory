import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InventoryTypeTargetingInventoryTypesEnum {
    InventoryTypeUnspecified = "INVENTORY_TYPE_UNSPECIFIED",
    Browser = "BROWSER",
    MobileApp = "MOBILE_APP",
    VideoPlayer = "VIDEO_PLAYER"
}
/**
 * Targeting of the inventory types a bid request can originate from.
**/
export declare class InventoryTypeTargeting extends SpeakeasyBase {
    inventoryTypes?: InventoryTypeTargetingInventoryTypesEnum[];
}
