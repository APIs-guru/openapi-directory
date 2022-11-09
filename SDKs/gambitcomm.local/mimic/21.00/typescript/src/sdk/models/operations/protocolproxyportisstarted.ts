import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolProxyPortIsstartedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolProxyPortIsstartedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolProxyPortIsstartedPathParams;
}


export class ProtocolProxyPortIsstartedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolProxyPortIsstarted200ApplicationJsonString?: string;
}
