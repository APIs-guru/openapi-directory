import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolProxyPortStopPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolProxyPortStopRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolProxyPortStopPathParams;
}


export class ProtocolProxyPortStopResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolProxyPortStop200ApplicationJsonString?: string;
}
