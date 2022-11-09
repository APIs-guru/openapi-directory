import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmptcpGetStatsHdrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmptcpGetStatsHdr200ApplicationJsonStrings?: string[];
}
