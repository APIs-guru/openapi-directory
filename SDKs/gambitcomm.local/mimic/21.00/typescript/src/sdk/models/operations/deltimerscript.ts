import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DelTimerScriptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=arg" })
  arg: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=interval" })
  interval: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=script" })
  script: string;
}


export class DelTimerScriptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DelTimerScriptPathParams;
}


export class DelTimerScriptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  delTimerScript200ApplicationJsonString?: string;
}
