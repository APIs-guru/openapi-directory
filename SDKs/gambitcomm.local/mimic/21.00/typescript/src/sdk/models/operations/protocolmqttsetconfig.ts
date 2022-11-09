import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttSetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=argument" })
  argument: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolMqttSetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttSetConfigPathParams;
}


export class ProtocolMqttSetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttSetConfig200ApplicationJsonString?: string;
}
