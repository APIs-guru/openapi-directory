import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeclineHandshakeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HandshakeId" })
  handshakeId: string;
}
