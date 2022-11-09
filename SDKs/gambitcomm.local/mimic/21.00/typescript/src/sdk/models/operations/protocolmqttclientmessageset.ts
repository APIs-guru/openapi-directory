import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientMessageSetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=msgNum" })
  msgNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolMqttClientMessageSetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientMessageSetPathParams;
}


export class ProtocolMqttClientMessageSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientMessageSet200ApplicationJsonStrings?: string[];
}
