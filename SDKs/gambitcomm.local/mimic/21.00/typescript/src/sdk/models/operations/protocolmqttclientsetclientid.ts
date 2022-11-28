import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolMqttClientSetClientidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientID" })
  clientId: string;
}


export class ProtocolMqttClientSetClientidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolMqttClientSetClientidPathParams;
}


export class ProtocolMqttClientSetClientidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolMqttClientSetClientid200ApplicationJsonInt32Integers?: number[];
}
