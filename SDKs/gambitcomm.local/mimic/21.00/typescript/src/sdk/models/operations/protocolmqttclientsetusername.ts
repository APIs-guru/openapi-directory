import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientSetUsernamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ProtocolMqttClientSetUsernameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientSetUsernamePathParams;
}


export class ProtocolMqttClientSetUsernameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientSetUsername200ApplicationJsonInt32Integers?: number[];
}
