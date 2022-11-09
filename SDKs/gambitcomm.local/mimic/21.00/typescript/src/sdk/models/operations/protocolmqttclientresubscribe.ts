import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientResubscribePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subNum" })
  subNum: number;
}


export class ProtocolMqttClientResubscribeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientResubscribePathParams;
}


export class ProtocolMqttClientResubscribeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientResubscribe200ApplicationJsonString?: string;
}
