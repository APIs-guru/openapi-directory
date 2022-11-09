import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientSetCleansessionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=cleanOrNot" })
  cleanOrNot: number;
}


export class ProtocolMqttClientSetCleansessionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientSetCleansessionPathParams;
}


export class ProtocolMqttClientSetCleansessionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientSetCleansession200ApplicationJsonInt32Integers?: number[];
}
