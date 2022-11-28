import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetValuePathParams extends SpeakeasyBase {
    agentNum: number;
    instance: string;
    object: string;
    variable: string;
}
export declare class GetValueRequest extends SpeakeasyBase {
    pathParams: GetValuePathParams;
}
export declare class GetValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getValue200ApplicationJsonString?: string;
}
