import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientGetProtstatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolMqttClientGetProtstateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientGetProtstatePathParams;
}


export class ProtocolMqttClientGetProtstateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientGetProtstate200ApplicationJsonInt32Integers?: number[];
}
