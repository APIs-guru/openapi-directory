import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedNodeOffering } from "./reservednodeoffering";



export class GetReservedNodeExchangeOfferingsOutputMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedNodeOffering })
  reservedNodeOfferings?: ReservedNodeOffering[];
}
