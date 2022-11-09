import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSyslogSetAttrPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolSyslogSetAttrRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSyslogSetAttrPathParams;
}


export class ProtocolSyslogSetAttrResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSyslogSetAttr200ApplicationJsonString?: string;
}
