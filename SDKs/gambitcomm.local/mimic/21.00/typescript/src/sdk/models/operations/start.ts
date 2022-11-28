import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class StartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StartPathParams;
}


export class StartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  start200ApplicationJsonString?: string;
}
