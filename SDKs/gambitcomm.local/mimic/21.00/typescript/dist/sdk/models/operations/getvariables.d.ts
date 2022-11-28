import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetVariablesPathParams extends SpeakeasyBase {
    agentNum: number;
    instance: string;
    object: string;
}
export declare class GetVariablesRequest extends SpeakeasyBase {
    pathParams: GetVariablesPathParams;
}
export declare class GetVariablesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getVariables200ApplicationJsonStrings?: string[];
}
