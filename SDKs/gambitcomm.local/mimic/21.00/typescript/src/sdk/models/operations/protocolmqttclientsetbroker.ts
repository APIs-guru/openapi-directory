import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientSetBrokerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=brokerAddr" })
  brokerAddr: string;
}


export class ProtocolMqttClientSetBrokerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientSetBrokerPathParams;
}


export class ProtocolMqttClientSetBrokerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientSetBroker200ApplicationJsonInt32Integers?: number[];
}
