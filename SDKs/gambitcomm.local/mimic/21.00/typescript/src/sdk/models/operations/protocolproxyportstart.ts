import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolProxyPortStartPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolProxyPortStartRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolProxyPortStartPathParams;
}


export class ProtocolProxyPortStartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolProxyPortStart200ApplicationJsonString?: string;
}
