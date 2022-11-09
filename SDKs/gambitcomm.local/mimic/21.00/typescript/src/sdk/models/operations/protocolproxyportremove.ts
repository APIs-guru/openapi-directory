import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolProxyPortRemovePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolProxyPortRemoveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolProxyPortRemovePathParams;
}


export class ProtocolProxyPortRemoveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolProxyPortRemove200ApplicationJsonString?: string;
}
