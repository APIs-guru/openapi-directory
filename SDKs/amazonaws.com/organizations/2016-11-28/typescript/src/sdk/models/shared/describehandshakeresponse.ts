import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Handshake } from "./handshake";



export class DescribeHandshakeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Handshake" })
  handshake?: Handshake;
}
