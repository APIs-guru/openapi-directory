import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedNode } from "./reservednode";



export class PurchaseReservedNodeOfferingResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  reservedNode?: ReservedNode;
}
