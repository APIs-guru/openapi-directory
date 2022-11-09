import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListTimerScriptsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ListTimerScriptsRequest extends SpeakeasyBase {
    pathParams: ListTimerScriptsPathParams;
}
export declare class ListTimerScriptsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    timerScripts?: shared.TimerScript[];
}
