import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyVendorsDestinyVendorReceipt } from "./destinyvendorsdestinyvendorreceipt";



// DestinyEntitiesProfilesDestinyVendorReceiptsComponent
/** 
 * For now, this isn't used for much: it's a record of the recent refundable purchases that the user has made. In the future, it could be used for providing refunds/buyback via the API. Wouldn't that be fun?
**/
export class DestinyEntitiesProfilesDestinyVendorReceiptsComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyVendorsDestinyVendorReceipt })
  receipts?: DestinyVendorsDestinyVendorReceipt[];
}
