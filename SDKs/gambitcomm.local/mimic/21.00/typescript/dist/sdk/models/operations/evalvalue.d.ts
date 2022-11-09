import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class EvalValuePathParams extends SpeakeasyBase {
    agentNum: number;
    instance: string;
    object: string;
}
export declare class EvalValueRequest extends SpeakeasyBase {
    pathParams: EvalValuePathParams;
}
export declare class EvalValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    evalValue200ApplicationJsonString?: string;
}
