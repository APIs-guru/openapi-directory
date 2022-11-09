import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PauseNowPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class PauseNowRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PauseNowPathParams;
}


export class PauseNowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  pauseNow200ApplicationJsonString?: string;
}
