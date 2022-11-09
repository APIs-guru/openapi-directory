import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolDhcpGetStatsHdrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolDhcpGetStatsHdr200ApplicationJsonStrings?: string[];
}
