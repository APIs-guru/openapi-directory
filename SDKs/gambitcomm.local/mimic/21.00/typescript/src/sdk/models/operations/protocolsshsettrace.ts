import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSshSetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolSshSetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSshSetTracePathParams;
}


export class ProtocolSshSetTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSshSetTrace200ApplicationJsonString?: string;
}
