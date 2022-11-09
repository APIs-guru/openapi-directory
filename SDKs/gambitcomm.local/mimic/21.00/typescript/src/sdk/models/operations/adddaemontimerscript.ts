import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddDaemonTimerScriptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=arg" })
  arg: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=interval" })
  interval: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=script" })
  script: string;
}


export class AddDaemonTimerScriptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddDaemonTimerScriptPathParams;
}


export class AddDaemonTimerScriptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  addDaemonTimerScript200ApplicationJsonString?: string;
}
