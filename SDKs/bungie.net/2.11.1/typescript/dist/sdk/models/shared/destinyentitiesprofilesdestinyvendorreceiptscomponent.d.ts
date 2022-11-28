import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyVendorsDestinyVendorReceipt } from "./destinyvendorsdestinyvendorreceipt";
/**
 * For now, this isn't used for much: it's a record of the recent refundable purchases that the user has made. In the future, it could be used for providing refunds/buyback via the API. Wouldn't that be fun?
**/
export declare class DestinyEntitiesProfilesDestinyVendorReceiptsComponent extends SpeakeasyBase {
    receipts?: DestinyVendorsDestinyVendorReceipt[];
}
