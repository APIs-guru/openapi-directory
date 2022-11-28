import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyDestinyItemQuantity } from "./destinydestinyitemquantity";
/**
 * The item that was received, and its quantity.
**/
export declare class DestinyVendorsDestinyVendorReceiptItemReceived extends SpeakeasyBase {
    hasConditionalVisibility?: boolean;
    itemHash?: number;
    itemInstanceId?: number;
    quantity?: number;
}
/**
 * If a character purchased an item that is refundable, a Vendor Receipt will be created on the user's Destiny Profile. These expire after a configurable period of time, but until then can be used to get refunds on items. BNet does not provide the ability to refund a purchase *yet*, but you know.
**/
export declare class DestinyVendorsDestinyVendorReceipt extends SpeakeasyBase {
    currencyPaid?: DestinyDestinyItemQuantity[];
    expiresOn?: Date;
    itemReceived?: DestinyVendorsDestinyVendorReceiptItemReceived;
    licenseUnlockHash?: number;
    purchasedByCharacterId?: number;
    refundPolicy?: number;
    sequenceNumber?: number;
    timeToExpiration?: number;
}
