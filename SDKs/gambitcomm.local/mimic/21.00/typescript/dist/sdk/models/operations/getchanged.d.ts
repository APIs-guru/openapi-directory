import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetChangedPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetChangedRequest extends SpeakeasyBase {
    pathParams: GetChangedPathParams;
}
export declare class GetChangedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getChanged200ApplicationJsonInt32Integer?: number;
}
