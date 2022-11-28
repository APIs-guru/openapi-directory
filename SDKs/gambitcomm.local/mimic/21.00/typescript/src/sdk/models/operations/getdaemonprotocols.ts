import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDaemonProtocolsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDaemonProtocols200ApplicationJsonObject?: Map<string, number>;
}
