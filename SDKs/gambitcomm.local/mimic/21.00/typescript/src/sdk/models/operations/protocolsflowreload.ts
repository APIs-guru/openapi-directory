import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSflowReloadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSflowReloadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSflowReloadPathParams;
}


export class ProtocolSflowReloadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSflowReload200ApplicationJsonString?: string;
}
