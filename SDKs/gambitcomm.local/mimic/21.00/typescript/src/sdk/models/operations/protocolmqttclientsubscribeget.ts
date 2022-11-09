import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientSubscribeGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subNum" })
  subNum: number;
}


export class ProtocolMqttClientSubscribeGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientSubscribeGetPathParams;
}


export class ProtocolMqttClientSubscribeGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientSubscribeGet200ApplicationJsonStrings?: string[];
}
