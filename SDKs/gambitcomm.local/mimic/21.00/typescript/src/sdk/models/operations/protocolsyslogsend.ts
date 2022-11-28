import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProtocolSyslogSendPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pri" })
  pri: number;
}


export class ProtocolSyslogSendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSyslogSendPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SyslogMsg;
}


export class ProtocolSyslogSendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSyslogSend200ApplicationJsonString?: string;
}
