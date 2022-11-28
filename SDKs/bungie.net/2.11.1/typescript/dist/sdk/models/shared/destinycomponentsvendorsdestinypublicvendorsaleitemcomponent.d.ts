import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyItemQuantity } from "./destinydestinyitemquantity";
/**
 * Has character-agnostic information about an item being sold by a vendor.
 * Note that if you want instance, stats, etc... data for the item, you'll have to request additional components such as ItemInstances, ItemPerks etc... and acquire them from the DestinyVendorResponse's "items" property. For most of these, however, you'll have to ask for it in context of a specific character.
**/
export declare class DestinyComponentsVendorsDestinyPublicVendorSaleItemComponent extends SpeakeasyBase {
    apiPurchasable?: boolean;
    costs?: DestinyDestinyItemQuantity[];
    itemHash?: number;
    overrideNextRefreshDate?: Date;
    overrideStyleItemHash?: number;
    quantity?: number;
    vendorItemIndex?: number;
}
