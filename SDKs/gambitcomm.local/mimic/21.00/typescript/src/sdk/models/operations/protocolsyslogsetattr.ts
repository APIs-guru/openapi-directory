import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolSyslogSetAttrPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolSyslogSetAttrRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSyslogSetAttrPathParams;
}


export class ProtocolSyslogSetAttrResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSyslogSetAttr200ApplicationJsonString?: string;
}
