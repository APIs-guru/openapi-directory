import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AcceptHandshakeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HandshakeId" })
  handshakeId: string;
}
