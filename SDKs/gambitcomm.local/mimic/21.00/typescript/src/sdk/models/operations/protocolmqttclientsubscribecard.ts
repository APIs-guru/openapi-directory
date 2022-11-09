import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientSubscribeCardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolMqttClientSubscribeCardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientSubscribeCardPathParams;
}


export class ProtocolMqttClientSubscribeCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientSubscribeCard200ApplicationJsonInt32Integers?: number[];
}
