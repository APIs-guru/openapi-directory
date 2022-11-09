import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTracePathParams;
}


export class GetTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTrace200ApplicationJsonInt32Integer?: number;
}
