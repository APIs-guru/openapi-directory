import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PauseNowPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class PauseNowRequest extends SpeakeasyBase {
    pathParams: PauseNowPathParams;
}
export declare class PauseNowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pauseNow200ApplicationJsonString?: string;
}
