import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolWebSetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolWebSetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolWebSetTracePathParams;
}


export class ProtocolWebSetTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolWebSetTrace200ApplicationJsonString?: string;
}
