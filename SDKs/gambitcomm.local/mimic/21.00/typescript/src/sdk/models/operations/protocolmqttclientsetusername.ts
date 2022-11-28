import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolMqttClientSetUsernamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class ProtocolMqttClientSetUsernameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolMqttClientSetUsernamePathParams;
}


export class ProtocolMqttClientSetUsernameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolMqttClientSetUsername200ApplicationJsonInt32Integers?: number[];
}
