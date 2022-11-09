import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolNetflowGetStatsHdrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolNetflowGetStatsHdr200ApplicationJsonStrings?: string[];
}
