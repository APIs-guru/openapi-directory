import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddTimerScriptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=arg" })
  arg: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=interval" })
  interval: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=script" })
  script: string;
}


export class AddTimerScriptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddTimerScriptPathParams;
}


export class AddTimerScriptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addTimerScript200ApplicationJsonString?: string;
}
