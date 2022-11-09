import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolSyslogGetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSyslogGetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSyslogGetTracePathParams;
}


export class ProtocolSyslogGetTraceResponse extends SpeakeasyBase {
  @Metadata()
  configSyslog?: shared.ConfigSyslog;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
