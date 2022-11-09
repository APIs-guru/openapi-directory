import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientGetStatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolMqttClientGetStateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientGetStatePathParams;
}


export class ProtocolMqttClientGetStateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientGetState200ApplicationJsonInt32Integers?: number[];
}
