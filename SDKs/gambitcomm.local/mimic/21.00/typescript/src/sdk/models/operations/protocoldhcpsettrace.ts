import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolDhcpSetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolDhcpSetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolDhcpSetTracePathParams;
}


export class ProtocolDhcpSetTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolDhcpSetTrace200ApplicationJsonString?: string;
}
