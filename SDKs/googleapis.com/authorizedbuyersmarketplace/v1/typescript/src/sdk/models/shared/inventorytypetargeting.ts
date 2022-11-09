import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InventoryTypeTargetingInventoryTypesEnum {
    InventoryTypeUnspecified = "INVENTORY_TYPE_UNSPECIFIED"
,    Browser = "BROWSER"
,    MobileApp = "MOBILE_APP"
,    VideoPlayer = "VIDEO_PLAYER"
}


// InventoryTypeTargeting
/** 
 * Targeting of the inventory types a bid request can originate from.
**/
export class InventoryTypeTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=inventoryTypes" })
  inventoryTypes?: InventoryTypeTargetingInventoryTypesEnum[];
}
