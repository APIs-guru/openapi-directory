import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyItemQuantity } from "./destinydestinyitemquantity";



// DestinyComponentsVendorsDestinyPublicVendorSaleItemComponent
/** 
 * Has character-agnostic information about an item being sold by a vendor.
 * Note that if you want instance, stats, etc... data for the item, you'll have to request additional components such as ItemInstances, ItemPerks etc... and acquire them from the DestinyVendorResponse's "items" property. For most of these, however, you'll have to ask for it in context of a specific character.
**/
export class DestinyComponentsVendorsDestinyPublicVendorSaleItemComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiPurchasable?: boolean;

  @SpeakeasyMetadata({ elemType: DestinyDestinyItemQuantity })
  costs?: DestinyDestinyItemQuantity[];

  @SpeakeasyMetadata()
  itemHash?: number;

  @SpeakeasyMetadata()
  overrideNextRefreshDate?: Date;

  @SpeakeasyMetadata()
  overrideStyleItemHash?: number;

  @SpeakeasyMetadata()
  quantity?: number;

  @SpeakeasyMetadata()
  vendorItemIndex?: number;
}
