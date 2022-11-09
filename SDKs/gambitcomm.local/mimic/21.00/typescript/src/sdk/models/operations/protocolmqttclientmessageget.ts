import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientMessageGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=msgNum" })
  msgNum: number;
}


export class ProtocolMqttClientMessageGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientMessageGetPathParams;
}


export class ProtocolMqttClientMessageGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientMessageGet200ApplicationJsonStrings?: string[];
}
