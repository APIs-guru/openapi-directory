import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyItemQuantity } from "./destinydestinyitemquantity";
import { DestinyDestinyUnlockStatus } from "./destinydestinyunlockstatus";



// DestinyEntitiesVendorsDestinyVendorSaleItemComponent
/** 
 * Request this component if you want the details about an item being sold in relation to the character making the request: whether the character can buy it, whether they can afford it, and other data related to purchasing the item.
 * Note that if you want instance, stats, etc... data for the item, you'll have to request additional components such as ItemInstances, ItemPerks etc... and acquire them from the DestinyVendorResponse's "items" property.
**/
export class DestinyEntitiesVendorsDestinyVendorSaleItemComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiPurchasable?: boolean;

  @SpeakeasyMetadata()
  augments?: number;

  @SpeakeasyMetadata({ elemType: DestinyDestinyItemQuantity })
  costs?: DestinyDestinyItemQuantity[];

  @SpeakeasyMetadata()
  failureIndexes?: number[];

  @SpeakeasyMetadata()
  itemHash?: number;

  @SpeakeasyMetadata()
  itemValueVisibility?: boolean[];

  @SpeakeasyMetadata()
  overrideNextRefreshDate?: Date;

  @SpeakeasyMetadata()
  overrideStyleItemHash?: number;

  @SpeakeasyMetadata()
  quantity?: number;

  @SpeakeasyMetadata()
  requiredUnlocks?: number[];

  @SpeakeasyMetadata()
  saleStatus?: number;

  @SpeakeasyMetadata({ elemType: DestinyDestinyUnlockStatus })
  unlockStatuses?: DestinyDestinyUnlockStatus[];

  @SpeakeasyMetadata()
  vendorItemIndex?: number;
}
