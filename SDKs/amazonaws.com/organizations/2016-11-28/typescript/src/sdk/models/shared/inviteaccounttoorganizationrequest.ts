import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";
import { HandshakeParty } from "./handshakeparty";


export class InviteAccountToOrganizationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=Target" })
  target: HandshakeParty;
}
