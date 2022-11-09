import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttSetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolMqttSetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttSetTracePathParams;
}


export class ProtocolMqttSetTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttSetTrace200ApplicationJsonString?: string;
}
