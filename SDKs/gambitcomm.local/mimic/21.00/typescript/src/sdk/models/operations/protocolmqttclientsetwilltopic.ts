import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolMqttClientSetWilltopicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=topic" })
  topic: string;
}


export class ProtocolMqttClientSetWilltopicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttClientSetWilltopicPathParams;
}


export class ProtocolMqttClientSetWilltopicResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolMqttClientSetWilltopic200ApplicationJsonInt32Integers?: number[];
}
