import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetTracePathParams extends SpeakeasyBase {
    agentNum: number;
    trace: number;
}
export declare class SetTraceRequest extends SpeakeasyBase {
    pathParams: SetTracePathParams;
}
export declare class SetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setTrace200ApplicationJsonInt32Integer?: number;
}
