import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PauseNowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class PauseNowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PauseNowPathParams;
}


export class PauseNowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pauseNow200ApplicationJsonString?: string;
}
