import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTelnetGetStatsHdrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTelnetGetStatsHdr200ApplicationJsonStrings?: string[];
}
