import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetInformTimeoutPathParams extends SpeakeasyBase {
    agentNum: number;
    informTimeout: number;
}
export declare class SetInformTimeoutRequest extends SpeakeasyBase {
    pathParams: SetInformTimeoutPathParams;
}
export declare class SetInformTimeoutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setInformTimeout200ApplicationJsonInt32Integer?: number;
}
