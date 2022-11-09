import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolProxyGetStatsHdrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolProxyGetStatsHdr200ApplicationJsonStrings?: string[];
}
