import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SetDelayPathParams extends SpeakeasyBase {
    agentNum: number;
    delay: number;
}
export declare class SetDelayRequest extends SpeakeasyBase {
    pathParams: SetDelayPathParams;
}
export declare class SetDelayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setDelay200ApplicationJsonInt32Integer?: number;
}
