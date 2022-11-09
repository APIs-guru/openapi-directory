import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelHandshakeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HandshakeId" })
  handshakeId: string;
}
