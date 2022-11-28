import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyItemQuantity } from "./destinydestinyitemquantity";



// DestinyVendorsDestinyVendorReceiptItemReceived
/** 
 * The item that was received, and its quantity.
**/
export class DestinyVendorsDestinyVendorReceiptItemReceived extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hasConditionalVisibility?: boolean;

  @SpeakeasyMetadata()
  itemHash?: number;

  @SpeakeasyMetadata()
  itemInstanceId?: number;

  @SpeakeasyMetadata()
  quantity?: number;
}


// DestinyVendorsDestinyVendorReceipt
/** 
 * If a character purchased an item that is refundable, a Vendor Receipt will be created on the user's Destiny Profile. These expire after a configurable period of time, but until then can be used to get refunds on items. BNet does not provide the ability to refund a purchase *yet*, but you know.
**/
export class DestinyVendorsDestinyVendorReceipt extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyDestinyItemQuantity })
  currencyPaid?: DestinyDestinyItemQuantity[];

  @SpeakeasyMetadata()
  expiresOn?: Date;

  @SpeakeasyMetadata()
  itemReceived?: DestinyVendorsDestinyVendorReceiptItemReceived;

  @SpeakeasyMetadata()
  licenseUnlockHash?: number;

  @SpeakeasyMetadata()
  purchasedByCharacterId?: number;

  @SpeakeasyMetadata()
  refundPolicy?: number;

  @SpeakeasyMetadata()
  sequenceNumber?: number;

  @SpeakeasyMetadata()
  timeToExpiration?: number;
}
