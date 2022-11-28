import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListTimerScriptsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ListTimerScriptsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListTimerScriptsPathParams;
}


export class ListTimerScriptsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TimerScript })
  timerScripts?: shared.TimerScript[];
}
