import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetValidatePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetValidateRequest extends SpeakeasyBase {
    pathParams: GetValidatePathParams;
}
export declare class GetValidateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getValidate200ApplicationJsonInt32Integer?: number;
}
