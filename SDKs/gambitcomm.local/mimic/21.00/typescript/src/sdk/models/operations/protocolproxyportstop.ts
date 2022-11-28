import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolProxyPortStopPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolProxyPortStopRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolProxyPortStopPathParams;
}


export class ProtocolProxyPortStopResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolProxyPortStop200ApplicationJsonString?: string;
}
