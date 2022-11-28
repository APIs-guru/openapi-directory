import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolDhcpGetStatsHdrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolDhcpGetStatsHdr200ApplicationJsonStrings?: string[];
}
