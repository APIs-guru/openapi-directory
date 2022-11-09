import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInformTimeoutPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetInformTimeoutRequest extends SpeakeasyBase {
    pathParams: GetInformTimeoutPathParams;
}
export declare class GetInformTimeoutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getInformTimeout200ApplicationJsonInt32Integer?: number;
}
