import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeHandshakeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HandshakeId" })
  handshakeId: string;
}
