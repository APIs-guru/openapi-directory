import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientSubscribeSetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subNum" })
  subNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolMqttClientSubscribeSetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientSubscribeSetPathParams;
}


export class ProtocolMqttClientSubscribeSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientSubscribeSet200ApplicationJsonStrings?: string[];
}
