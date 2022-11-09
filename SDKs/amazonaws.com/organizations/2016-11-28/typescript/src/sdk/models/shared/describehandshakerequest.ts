import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeHandshakeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HandshakeId" })
  handshakeId: string;
}
