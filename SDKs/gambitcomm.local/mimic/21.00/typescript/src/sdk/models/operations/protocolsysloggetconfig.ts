import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolSyslogGetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSyslogGetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSyslogGetConfigPathParams;
}


export class ProtocolSyslogGetConfigResponse extends SpeakeasyBase {
  @Metadata()
  configSyslog?: shared.ConfigSyslog;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
