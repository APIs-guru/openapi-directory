import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelHandshakeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HandshakeId" })
  handshakeId: string;
}
