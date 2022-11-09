import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmptcpSetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolSnmptcpSetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmptcpSetTracePathParams;
}


export class ProtocolSnmptcpSetTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmptcpSetTrace200ApplicationJsonString?: string;
}
