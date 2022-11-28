import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MunsetValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class MunsetValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MunsetValuePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: string[][];
}


export class MunsetValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  munsetValue200ApplicationJsonString?: string;
}
