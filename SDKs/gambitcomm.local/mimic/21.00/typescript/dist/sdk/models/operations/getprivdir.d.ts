import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPrivdirPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetPrivdirRequest extends SpeakeasyBase {
    pathParams: GetPrivdirPathParams;
}
export declare class GetPrivdirResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPrivdir200ApplicationJsonString?: string;
}
