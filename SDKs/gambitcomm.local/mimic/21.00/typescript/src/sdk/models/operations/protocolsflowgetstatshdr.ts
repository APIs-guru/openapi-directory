import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSflowGetStatsHdrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSflowGetStatsHdr200ApplicationJsonStrings?: string[];
}
