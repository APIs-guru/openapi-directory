import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientRuntimeConnectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolMqttClientRuntimeConnectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientRuntimeConnectPathParams;
}


export class ProtocolMqttClientRuntimeConnectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientRuntimeConnect200ApplicationJsonStrings?: string[];
}
