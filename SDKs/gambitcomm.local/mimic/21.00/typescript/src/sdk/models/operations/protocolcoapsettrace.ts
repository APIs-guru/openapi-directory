import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolCoapSetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolCoapSetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolCoapSetTracePathParams;
}


export class ProtocolCoapSetTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolCoapSetTrace200ApplicationJsonString?: string;
}
