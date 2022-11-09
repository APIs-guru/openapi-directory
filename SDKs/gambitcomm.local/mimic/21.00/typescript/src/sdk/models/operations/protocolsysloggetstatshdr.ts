import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSyslogGetStatsHdrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSyslogGetStatsHdr200ApplicationJsonStrings?: string[];
}
