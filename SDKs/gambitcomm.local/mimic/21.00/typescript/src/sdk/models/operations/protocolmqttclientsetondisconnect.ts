import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientSetOnDisconnectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=action" })
  action: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolMqttClientSetOnDisconnectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientSetOnDisconnectPathParams;
}


export class ProtocolMqttClientSetOnDisconnectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientSetOnDisconnect200ApplicationJsonInt32Integers?: number[];
}
