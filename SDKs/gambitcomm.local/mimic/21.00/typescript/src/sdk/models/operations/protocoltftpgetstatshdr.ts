import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTftpGetStatsHdrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTftpGetStatsHdr200ApplicationJsonStrings?: string[];
}
