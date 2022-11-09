import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSyslogSetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=argument" })
  argument: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolSyslogSetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSyslogSetConfigPathParams;
}


export class ProtocolSyslogSetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSyslogSetConfig200ApplicationJsonString?: string;
}
