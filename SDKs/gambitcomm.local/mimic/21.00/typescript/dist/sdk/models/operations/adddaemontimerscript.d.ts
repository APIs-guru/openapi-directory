import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddDaemonTimerScriptPathParams extends SpeakeasyBase {
    arg: string;
    interval: number;
    script: string;
}
export declare class AddDaemonTimerScriptRequest extends SpeakeasyBase {
    pathParams: AddDaemonTimerScriptPathParams;
}
export declare class AddDaemonTimerScriptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    addDaemonTimerScript200ApplicationJsonString?: string;
}
