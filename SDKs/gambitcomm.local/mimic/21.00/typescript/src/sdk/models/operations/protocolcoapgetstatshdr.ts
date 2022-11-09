import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolCoapGetStatsHdrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolCoapGetStatsHdr200ApplicationJsonStrings?: string[];
}
