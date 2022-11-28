import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedNode } from "./reservednode";



export class AcceptReservedNodeExchangeOutputMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  exchangedReservedNode?: ReservedNode;
}
