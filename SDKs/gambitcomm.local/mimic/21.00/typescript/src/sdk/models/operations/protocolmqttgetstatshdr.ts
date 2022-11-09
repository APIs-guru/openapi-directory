import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttGetStatsHdrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttGetStatsHdr200ApplicationJsonStrings?: string[];
}
