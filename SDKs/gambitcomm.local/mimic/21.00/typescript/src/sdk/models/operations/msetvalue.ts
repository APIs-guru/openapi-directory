import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MsetValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class MsetValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MsetValuePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: string[][];
}


export class MsetValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  msetValue200ApplicationJsonString?: string;
}
