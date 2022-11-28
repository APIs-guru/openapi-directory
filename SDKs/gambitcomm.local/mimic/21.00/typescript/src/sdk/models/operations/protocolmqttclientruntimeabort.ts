import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolMqttClientRuntimeAbortPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolMqttClientRuntimeAbortRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolMqttClientRuntimeAbortPathParams;
}


export class ProtocolMqttClientRuntimeAbortResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolMqttClientRuntimeAbort200ApplicationJsonStrings?: string[];
}
