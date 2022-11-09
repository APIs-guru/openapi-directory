import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTelnetSetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolTelnetSetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetSetTracePathParams;
}


export class ProtocolTelnetSetTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTelnetSetTrace200ApplicationJsonString?: string;
}
