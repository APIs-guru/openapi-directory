import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientSetPortPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: string;
}


export class ProtocolMqttClientSetPortRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientSetPortPathParams;
}


export class ProtocolMqttClientSetPortResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientSetPort200ApplicationJsonInt32Integers?: number[];
}
