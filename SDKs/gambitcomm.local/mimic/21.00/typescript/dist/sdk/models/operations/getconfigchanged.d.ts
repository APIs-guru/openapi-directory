import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetConfigChangedPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetConfigChangedRequest extends SpeakeasyBase {
    pathParams: GetConfigChangedPathParams;
}
export declare class GetConfigChangedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getConfigChanged200ApplicationJsonInt32Integer?: number;
}
