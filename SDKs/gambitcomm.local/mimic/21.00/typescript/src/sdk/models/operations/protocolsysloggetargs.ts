import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSyslogGetArgsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSyslogGetArgsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSyslogGetArgsPathParams;
}


export class ProtocolSyslogGetArgsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSyslogGetArgs200ApplicationJsonObject?: Map<string, any>;
}
