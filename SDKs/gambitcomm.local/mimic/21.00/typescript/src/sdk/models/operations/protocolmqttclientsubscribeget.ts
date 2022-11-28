import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolMqttClientSubscribeGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subNum" })
  subNum: number;
}


export class ProtocolMqttClientSubscribeGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolMqttClientSubscribeGetPathParams;
}


export class ProtocolMqttClientSubscribeGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolMqttClientSubscribeGet200ApplicationJsonStrings?: string[];
}
