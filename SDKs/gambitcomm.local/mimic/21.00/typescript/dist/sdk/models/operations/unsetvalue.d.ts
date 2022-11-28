import { SpeakeasyBase } from "../../../internal/utils";
export declare class UnsetValuePathParams extends SpeakeasyBase {
    agentNum: number;
    instance: string;
    object: string;
    variable: string;
}
export declare class UnsetValueRequest extends SpeakeasyBase {
    pathParams: UnsetValuePathParams;
}
export declare class UnsetValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    unsetValue200ApplicationJsonString?: string;
}
