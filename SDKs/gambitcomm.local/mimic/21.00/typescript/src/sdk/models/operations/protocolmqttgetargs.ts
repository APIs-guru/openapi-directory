import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttGetArgsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolMqttGetArgsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttGetArgsPathParams;
}


export class ProtocolMqttGetArgsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttGetArgs200ApplicationJsonObject?: Map<string, any>;
}
