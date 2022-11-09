import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolWebGetStatsHdrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolWebGetStatsHdr200ApplicationJsonStrings?: string[];
}
