import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolProxyPortAddPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target" })
  target: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetPort" })
  targetPort: number;
}


export class ProtocolProxyPortAddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolProxyPortAddPathParams;
}


export class ProtocolProxyPortAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolProxyPortAdd200ApplicationJsonString?: string;
}
