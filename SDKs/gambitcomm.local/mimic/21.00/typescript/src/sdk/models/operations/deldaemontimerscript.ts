import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DelDaemonTimerScriptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=arg" })
  arg: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=interval" })
  interval: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=script" })
  script: string;
}


export class DelDaemonTimerScriptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DelDaemonTimerScriptPathParams;
}


export class DelDaemonTimerScriptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  delDaemonTimerScript200ApplicationJsonString?: string;
}
