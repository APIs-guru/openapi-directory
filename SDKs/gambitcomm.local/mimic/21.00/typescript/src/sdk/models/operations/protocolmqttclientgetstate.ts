import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolMqttClientGetStatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolMqttClientGetStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolMqttClientGetStatePathParams;
}


export class ProtocolMqttClientGetStateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolMqttClientGetState200ApplicationJsonInt32Integers?: number[];
}
