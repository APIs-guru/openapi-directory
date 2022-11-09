import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientSetWillretainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=retain" })
  retain: string;
}


export class ProtocolMqttClientSetWillretainRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientSetWillretainPathParams;
}


export class ProtocolMqttClientSetWillretainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientSetWillretain200ApplicationJsonInt32Integers?: number[];
}
