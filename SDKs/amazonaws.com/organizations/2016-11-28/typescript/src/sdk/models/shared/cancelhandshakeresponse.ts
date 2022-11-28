import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Handshake } from "./handshake";



export class CancelHandshakeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Handshake" })
  handshake?: Handshake;
}
