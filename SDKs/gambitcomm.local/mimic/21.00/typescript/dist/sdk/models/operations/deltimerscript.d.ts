import { SpeakeasyBase } from "../../../internal/utils";
export declare class DelTimerScriptPathParams extends SpeakeasyBase {
    agentNum: number;
    arg: string;
    interval: number;
    script: string;
}
export declare class DelTimerScriptRequest extends SpeakeasyBase {
    pathParams: DelTimerScriptPathParams;
}
export declare class DelTimerScriptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    delTimerScript200ApplicationJsonString?: string;
}
