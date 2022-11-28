import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HandshakePartyTypeEnum } from "./handshakepartytypeenum";



// HandshakeParty
/** 
 * Identifies a participant in a handshake.
**/
export class HandshakeParty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: HandshakePartyTypeEnum;
}
