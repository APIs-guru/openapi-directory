import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDaemonTimerScriptsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    timerScripts?: shared.TimerScript[];
}
