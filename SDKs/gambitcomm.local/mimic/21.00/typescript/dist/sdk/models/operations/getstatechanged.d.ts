import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetStateChangedPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetStateChangedRequest extends SpeakeasyBase {
    pathParams: GetStateChangedPathParams;
}
export declare class GetStateChangedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getStateChanged200ApplicationJsonInt32Integer?: number;
}
