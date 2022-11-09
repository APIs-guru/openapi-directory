import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTodGetStatsHdrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTodGetStatsHdr200ApplicationJsonStrings?: string[];
}
