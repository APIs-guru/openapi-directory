import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Handshake } from "./handshake";



export class InviteAccountToOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Handshake" })
  handshake?: Handshake;
}
