import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Handshake } from "./handshake";



export class DeclineHandshakeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Handshake" })
  handshake?: Handshake;
}
