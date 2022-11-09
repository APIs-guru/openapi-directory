import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolMqttGetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolMqttGetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttGetTracePathParams;
}


export class ProtocolMqttGetTraceResponse extends SpeakeasyBase {
  @Metadata()
  configMqtt?: shared.ConfigMqtt;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
