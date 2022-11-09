import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientSetWillmsgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=msg" })
  msg: string;
}


export class ProtocolMqttClientSetWillmsgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientSetWillmsgPathParams;
}


export class ProtocolMqttClientSetWillmsgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientSetWillmsg200ApplicationJsonInt32Integers?: number[];
}
