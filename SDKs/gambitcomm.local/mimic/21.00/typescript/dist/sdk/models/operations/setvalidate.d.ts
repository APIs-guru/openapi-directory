import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetValidatePathParams extends SpeakeasyBase {
    agentNum: number;
    validate: number;
}
export declare class SetValidateRequest extends SpeakeasyBase {
    pathParams: SetValidatePathParams;
}
export declare class SetValidateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setValidate200ApplicationJsonInt32Integer?: number;
}
