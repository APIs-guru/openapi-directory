import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolMqttClientSetWillqosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=qos" })
  qos: string;
}


export class ProtocolMqttClientSetWillqosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolMqttClientSetWillqosPathParams;
}


export class ProtocolMqttClientSetWillqosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolMqttClientSetWillqos200ApplicationJsonInt32Integers?: number[];
}
