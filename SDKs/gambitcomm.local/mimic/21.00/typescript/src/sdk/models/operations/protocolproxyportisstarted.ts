import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolProxyPortIsstartedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolProxyPortIsstartedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolProxyPortIsstartedPathParams;
}


export class ProtocolProxyPortIsstartedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolProxyPortIsstarted200ApplicationJsonString?: string;
}
