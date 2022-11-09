import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSyslogGetAttrPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;
}


export class ProtocolSyslogGetAttrRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSyslogGetAttrPathParams;
}


export class ProtocolSyslogGetAttrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSyslogGetAttr200ApplicationJsonString?: string;
}
