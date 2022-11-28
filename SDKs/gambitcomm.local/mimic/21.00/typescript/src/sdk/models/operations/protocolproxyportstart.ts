import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolProxyPortStartPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolProxyPortStartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolProxyPortStartPathParams;
}


export class ProtocolProxyPortStartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolProxyPortStart200ApplicationJsonString?: string;
}
