import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTracePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetTraceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTracePathParams;
}


export class GetTraceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTrace200ApplicationJsonInt32Integer?: number;
}
