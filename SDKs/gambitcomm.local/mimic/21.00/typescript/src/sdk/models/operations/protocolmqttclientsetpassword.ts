import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientSetPasswordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=password" })
  password: string;
}


export class ProtocolMqttClientSetPasswordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientSetPasswordPathParams;
}


export class ProtocolMqttClientSetPasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientSetPassword200ApplicationJsonInt32Integers?: number[];
}
