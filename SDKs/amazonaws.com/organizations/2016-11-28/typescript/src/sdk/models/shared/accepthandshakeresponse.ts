import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Handshake } from "./handshake";


export class AcceptHandshakeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Handshake" })
  handshake?: Handshake;
}
