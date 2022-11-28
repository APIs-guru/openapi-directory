import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolSflowReloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSflowReloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSflowReloadPathParams;
}


export class ProtocolSflowReloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSflowReload200ApplicationJsonString?: string;
}
