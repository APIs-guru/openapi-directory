import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSshGetStatsHdrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSshGetStatsHdr200ApplicationJsonStrings?: string[];
}
