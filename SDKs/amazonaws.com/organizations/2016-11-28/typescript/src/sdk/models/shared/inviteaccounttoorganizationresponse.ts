import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Handshake } from "./handshake";


export class InviteAccountToOrganizationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Handshake" })
  handshake?: Handshake;
}
