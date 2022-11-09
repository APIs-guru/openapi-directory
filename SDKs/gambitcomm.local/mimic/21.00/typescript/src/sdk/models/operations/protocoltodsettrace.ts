import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTodSetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=enableOrNot" })
  enableOrNot: string;
}


export class ProtocolTodSetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTodSetTracePathParams;
}


export class ProtocolTodSetTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTodSetTrace200ApplicationJsonString?: string;
}
