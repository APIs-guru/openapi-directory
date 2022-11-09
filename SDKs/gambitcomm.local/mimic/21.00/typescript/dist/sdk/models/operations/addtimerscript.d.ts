import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AddTimerScriptPathParams extends SpeakeasyBase {
    agentNum: number;
    arg: string;
    interval: number;
    script: string;
}
export declare class AddTimerScriptRequest extends SpeakeasyBase {
    pathParams: AddTimerScriptPathParams;
}
export declare class AddTimerScriptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    addTimerScript200ApplicationJsonString?: string;
}
