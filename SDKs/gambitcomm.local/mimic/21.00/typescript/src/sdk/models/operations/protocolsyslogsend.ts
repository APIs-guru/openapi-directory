import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolSyslogSendPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pri" })
  pri: number;
}


export class ProtocolSyslogSendRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSyslogSendPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SyslogMsg;
}


export class ProtocolSyslogSendResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSyslogSend200ApplicationJsonString?: string;
}
