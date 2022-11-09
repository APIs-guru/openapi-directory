import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientSetClientidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientID" })
  clientId: string;
}


export class ProtocolMqttClientSetClientidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientSetClientidPathParams;
}


export class ProtocolMqttClientSetClientidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientSetClientid200ApplicationJsonInt32Integers?: number[];
}
