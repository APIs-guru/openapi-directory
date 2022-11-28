import { SpeakeasyBase } from "../../../internal/utils";
export declare class DelDaemonTimerScriptPathParams extends SpeakeasyBase {
    arg: string;
    interval: number;
    script: string;
}
export declare class DelDaemonTimerScriptRequest extends SpeakeasyBase {
    pathParams: DelDaemonTimerScriptPathParams;
}
export declare class DelDaemonTimerScriptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    delDaemonTimerScript200ApplicationJsonString?: string;
}
