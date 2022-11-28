import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkAddressReservation
/** 
 * A reservation of one or more addresses in a network.
**/
export class NetworkAddressReservation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endAddress" })
  endAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=startAddress" })
  startAddress?: string;
}
