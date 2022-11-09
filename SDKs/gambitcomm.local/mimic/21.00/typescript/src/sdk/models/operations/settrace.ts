import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetTracePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=trace" })
  trace: number;
}


export class SetTraceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetTracePathParams;
}


export class SetTraceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setTrace200ApplicationJsonInt32Integer?: number;
}
