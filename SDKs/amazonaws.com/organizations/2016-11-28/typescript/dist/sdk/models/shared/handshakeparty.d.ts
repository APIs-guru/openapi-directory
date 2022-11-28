import { SpeakeasyBase } from "../../../internal/utils";
import { HandshakePartyTypeEnum } from "./handshakepartytypeenum";
/**
 * Identifies a participant in a handshake.
**/
export declare class HandshakeParty extends SpeakeasyBase {
    id: string;
    type: HandshakePartyTypeEnum;
}
