import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolNetflowReloadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolNetflowReloadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolNetflowReloadPathParams;
}


export class ProtocolNetflowReloadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolNetflowReload200ApplicationJsonString?: string;
}
