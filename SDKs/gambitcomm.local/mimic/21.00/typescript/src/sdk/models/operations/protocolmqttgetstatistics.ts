import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttGetStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolMqttGetStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttGetStatisticsPathParams;
}


export class ProtocolMqttGetStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttGetStatistics200ApplicationJsonInt32Integers?: number[];
}
