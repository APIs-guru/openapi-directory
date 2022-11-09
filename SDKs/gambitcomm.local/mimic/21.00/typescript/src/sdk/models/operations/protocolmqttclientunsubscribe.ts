import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientUnsubscribePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subNum" })
  subNum: number;
}


export class ProtocolMqttClientUnsubscribeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientUnsubscribePathParams;
}


export class ProtocolMqttClientUnsubscribeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientUnsubscribe200ApplicationJsonString?: string;
}
