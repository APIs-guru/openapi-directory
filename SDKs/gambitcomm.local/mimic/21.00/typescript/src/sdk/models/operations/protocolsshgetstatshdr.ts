import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolSshGetStatsHdrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSshGetStatsHdr200ApplicationJsonStrings?: string[];
}
