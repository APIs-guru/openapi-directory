import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSflowSetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolSflowSetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSflowSetTracePathParams;
}


export class ProtocolSflowSetTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSflowSetTrace200ApplicationJsonString?: string;
}
