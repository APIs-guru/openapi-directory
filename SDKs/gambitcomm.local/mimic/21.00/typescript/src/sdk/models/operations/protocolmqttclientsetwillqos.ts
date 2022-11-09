import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientSetWillqosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=qos" })
  qos: string;
}


export class ProtocolMqttClientSetWillqosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientSetWillqosPathParams;
}


export class ProtocolMqttClientSetWillqosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientSetWillqos200ApplicationJsonInt32Integers?: number[];
}
