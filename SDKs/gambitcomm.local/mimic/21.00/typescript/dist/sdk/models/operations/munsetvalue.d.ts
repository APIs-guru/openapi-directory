import { SpeakeasyBase } from "../../../internal/utils";
export declare class MunsetValuePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class MunsetValueRequest extends SpeakeasyBase {
    pathParams: MunsetValuePathParams;
    request?: string[][];
}
export declare class MunsetValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    munsetValue200ApplicationJsonString?: string;
}
