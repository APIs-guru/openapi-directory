import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkAddressReservation
/** 
 * A reservation of one or more addresses in a network.
**/
export class NetworkAddressReservation extends SpeakeasyBase {
  @Metadata({ data: "json, name=endAddress" })
  endAddress?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=startAddress" })
  startAddress?: string;
}
