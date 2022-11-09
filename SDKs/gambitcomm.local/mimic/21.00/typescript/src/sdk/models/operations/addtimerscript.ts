import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddTimerScriptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=arg" })
  arg: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=interval" })
  interval: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=script" })
  script: string;
}


export class AddTimerScriptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddTimerScriptPathParams;
}


export class AddTimerScriptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  addTimerScript200ApplicationJsonString?: string;
}
