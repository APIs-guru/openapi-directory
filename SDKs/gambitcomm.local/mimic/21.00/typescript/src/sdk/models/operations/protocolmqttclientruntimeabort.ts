import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientRuntimeAbortPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolMqttClientRuntimeAbortRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientRuntimeAbortPathParams;
}


export class ProtocolMqttClientRuntimeAbortResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientRuntimeAbort200ApplicationJsonStrings?: string[];
}
