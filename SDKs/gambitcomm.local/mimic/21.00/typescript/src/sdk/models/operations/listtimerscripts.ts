import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTimerScriptsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ListTimerScriptsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListTimerScriptsPathParams;
}


export class ListTimerScriptsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TimerScript })
  timerScripts?: shared.TimerScript[];
}
