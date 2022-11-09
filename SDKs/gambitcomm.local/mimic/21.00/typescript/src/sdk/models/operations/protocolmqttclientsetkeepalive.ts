import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientSetKeepalivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=aliveTime" })
  aliveTime: number;
}


export class ProtocolMqttClientSetKeepaliveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientSetKeepalivePathParams;
}


export class ProtocolMqttClientSetKeepaliveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientSetKeepalive200ApplicationJsonInt32Integers?: number[];
}
