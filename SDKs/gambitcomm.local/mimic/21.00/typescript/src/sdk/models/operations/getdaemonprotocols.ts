import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDaemonProtocolsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDaemonProtocols200ApplicationJsonObject?: Map<string, number>;
}
