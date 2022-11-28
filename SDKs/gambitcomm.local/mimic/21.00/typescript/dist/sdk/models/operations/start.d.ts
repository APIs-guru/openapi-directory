import { SpeakeasyBase } from "../../../internal/utils";
export declare class StartPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class StartRequest extends SpeakeasyBase {
    pathParams: StartPathParams;
}
export declare class StartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    start200ApplicationJsonString?: string;
}
