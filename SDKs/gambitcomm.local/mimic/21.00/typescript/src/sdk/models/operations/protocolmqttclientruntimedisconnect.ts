import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientRuntimeDisconnectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolMqttClientRuntimeDisconnectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientRuntimeDisconnectPathParams;
}


export class ProtocolMqttClientRuntimeDisconnectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientRuntimeDisconnect200ApplicationJsonStrings?: string[];
}
