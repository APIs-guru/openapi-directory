import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetPrivdirPathParams extends SpeakeasyBase {
    agentNum: number;
    privdir: string;
}
export declare class SetPrivdirRequest extends SpeakeasyBase {
    pathParams: SetPrivdirPathParams;
}
export declare class SetPrivdirResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setPrivdir200ApplicationJsonString?: string;
}
