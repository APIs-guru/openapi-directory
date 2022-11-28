import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetPdusizePathParams extends SpeakeasyBase {
    agentNum: number;
    pdusize: number;
}
export declare class SetPdusizeRequest extends SpeakeasyBase {
    pathParams: SetPdusizePathParams;
}
export declare class SetPdusizeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setPdusize200ApplicationJsonInt32Integer?: number;
}
