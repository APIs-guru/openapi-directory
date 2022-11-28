import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { HandshakeParty } from "./handshakeparty";
export declare class InviteAccountToOrganizationRequest extends SpeakeasyBase {
    notes?: string;
    tags?: Tag[];
    target: HandshakeParty;
}
