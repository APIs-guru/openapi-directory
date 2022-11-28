import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DelDaemonTimerScriptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=arg" })
  arg: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=interval" })
  interval: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=script" })
  script: string;
}


export class DelDaemonTimerScriptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DelDaemonTimerScriptPathParams;
}


export class DelDaemonTimerScriptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  delDaemonTimerScript200ApplicationJsonString?: string;
}
