import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSyslogSetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolSyslogSetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSyslogSetTracePathParams;
}


export class ProtocolSyslogSetTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSyslogSetTrace200ApplicationJsonString?: string;
}
