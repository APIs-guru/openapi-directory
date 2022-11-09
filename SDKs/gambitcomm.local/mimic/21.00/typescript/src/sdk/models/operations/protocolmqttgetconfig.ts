import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolMqttGetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolMqttGetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolMqttGetConfigPathParams;
}


export class ProtocolMqttGetConfigResponse extends SpeakeasyBase {
  @Metadata()
  configMqtt?: shared.ConfigMqtt;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
