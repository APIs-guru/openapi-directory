import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyItemQuantity } from "./destinydestinyitemquantity";
import { DestinyDestinyUnlockStatus } from "./destinydestinyunlockstatus";
/**
 * Request this component if you want the details about an item being sold in relation to the character making the request: whether the character can buy it, whether they can afford it, and other data related to purchasing the item.
 * Note that if you want instance, stats, etc... data for the item, you'll have to request additional components such as ItemInstances, ItemPerks etc... and acquire them from the DestinyVendorResponse's "items" property.
**/
export declare class DestinyEntitiesVendorsDestinyVendorSaleItemComponent extends SpeakeasyBase {
    apiPurchasable?: boolean;
    augments?: number;
    costs?: DestinyDestinyItemQuantity[];
    failureIndexes?: number[];
    itemHash?: number;
    itemValueVisibility?: boolean[];
    overrideNextRefreshDate?: Date;
    overrideStyleItemHash?: number;
    quantity?: number;
    requiredUnlocks?: number[];
    saleStatus?: number;
    unlockStatuses?: DestinyDestinyUnlockStatus[];
    vendorItemIndex?: number;
}
