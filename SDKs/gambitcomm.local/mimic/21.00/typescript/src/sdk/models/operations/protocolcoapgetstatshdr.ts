import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolCoapGetStatsHdrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolCoapGetStatsHdr200ApplicationJsonStrings?: string[];
}
