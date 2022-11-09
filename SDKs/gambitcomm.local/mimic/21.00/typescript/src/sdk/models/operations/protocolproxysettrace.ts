import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolProxySetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolProxySetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolProxySetTracePathParams;
}


export class ProtocolProxySetTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolProxySetTrace200ApplicationJsonString?: string;
}
