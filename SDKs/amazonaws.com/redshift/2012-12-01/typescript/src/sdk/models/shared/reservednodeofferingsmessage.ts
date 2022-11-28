import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedNodeOffering } from "./reservednodeoffering";



// ReservedNodeOfferingsMessage
/** 
 * <p/>
**/
export class ReservedNodeOfferingsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedNodeOffering })
  reservedNodeOfferings?: ReservedNodeOffering[];
}
