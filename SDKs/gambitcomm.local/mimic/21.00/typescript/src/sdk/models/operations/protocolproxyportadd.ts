import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolProxyPortAddPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=target" })
  target: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=targetPort" })
  targetPort: number;
}


export class ProtocolProxyPortAddRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolProxyPortAddPathParams;
}


export class ProtocolProxyPortAddResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolProxyPortAdd200ApplicationJsonString?: string;
}
