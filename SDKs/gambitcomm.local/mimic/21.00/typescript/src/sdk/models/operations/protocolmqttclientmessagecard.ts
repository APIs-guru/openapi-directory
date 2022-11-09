import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientMessageCardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolMqttClientMessageCardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientMessageCardPathParams;
}


export class ProtocolMqttClientMessageCardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientMessageCard200ApplicationJsonInt32Integers?: number[];
}
