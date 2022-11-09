import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeclineHandshakeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HandshakeId" })
  handshakeId: string;
}
