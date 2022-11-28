import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddDaemonTimerScriptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=arg" })
  arg: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=interval" })
  interval: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=script" })
  script: string;
}


export class AddDaemonTimerScriptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddDaemonTimerScriptPathParams;
}


export class AddDaemonTimerScriptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addDaemonTimerScript200ApplicationJsonString?: string;
}
