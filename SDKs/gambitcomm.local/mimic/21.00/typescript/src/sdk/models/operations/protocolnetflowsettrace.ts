import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolNetflowSetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolNetflowSetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolNetflowSetTracePathParams;
}


export class ProtocolNetflowSetTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolNetflowSetTrace200ApplicationJsonString?: string;
}
