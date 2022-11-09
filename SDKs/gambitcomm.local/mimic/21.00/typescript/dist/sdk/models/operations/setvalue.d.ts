import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SetValuePathParams extends SpeakeasyBase {
    agentNum: number;
    instance: string;
    object: string;
    variable: string;
}
export declare class SetValueRequest extends SpeakeasyBase {
    pathParams: SetValuePathParams;
    request?: string;
}
export declare class SetValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setValue200ApplicationJsonString?: string;
}
