import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AcceptHandshakeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HandshakeId" })
  handshakeId: string;
}
