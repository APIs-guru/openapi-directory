import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDelayPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetDelayRequest extends SpeakeasyBase {
    pathParams: GetDelayPathParams;
}
export declare class GetDelayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDelay200ApplicationJsonInt32Integer?: number;
}
