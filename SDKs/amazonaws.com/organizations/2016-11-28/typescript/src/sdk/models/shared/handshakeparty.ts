import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HandshakePartyTypeEnum } from "./handshakepartytypeenum";


// HandshakeParty
/** 
 * Identifies a participant in a handshake.
**/
export class HandshakeParty extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Type" })
  type: HandshakePartyTypeEnum;
}
