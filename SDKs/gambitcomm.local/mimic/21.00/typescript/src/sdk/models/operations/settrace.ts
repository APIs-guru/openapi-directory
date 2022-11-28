import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetTracePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=trace" })
  trace: number;
}


export class SetTraceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetTracePathParams;
}


export class SetTraceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setTrace200ApplicationJsonInt32Integer?: number;
}
