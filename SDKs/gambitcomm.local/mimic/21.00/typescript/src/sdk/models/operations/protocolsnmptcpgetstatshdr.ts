import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolSnmptcpGetStatsHdrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSnmptcpGetStatsHdr200ApplicationJsonStrings?: string[];
}
