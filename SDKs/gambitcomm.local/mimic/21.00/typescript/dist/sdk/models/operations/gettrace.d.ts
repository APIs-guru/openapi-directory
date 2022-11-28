import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTracePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetTraceRequest extends SpeakeasyBase {
    pathParams: GetTracePathParams;
}
export declare class GetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTrace200ApplicationJsonInt32Integer?: number;
}
