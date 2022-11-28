import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedDbInstance } from "./reserveddbinstance";



export class PurchaseReservedDbInstancesOfferingResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  reservedDbInstance?: ReservedDbInstance;
}
