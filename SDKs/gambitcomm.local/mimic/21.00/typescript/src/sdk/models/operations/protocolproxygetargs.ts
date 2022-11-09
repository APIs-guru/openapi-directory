import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolProxyGetArgsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolProxyGetArgsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolProxyGetArgsPathParams;
}


export class ProtocolProxyGetArgsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolProxyGetArgs200ApplicationJsonObject?: Map<string, any>;
}
