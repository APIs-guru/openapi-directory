import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReturnPolicyPathParams extends SpeakeasyBase {
    returnPolicyId: string;
}
export declare class GetReturnPolicySecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetReturnPolicyRequest extends SpeakeasyBase {
    pathParams: GetReturnPolicyPathParams;
    security: GetReturnPolicySecurity;
}
export declare class GetReturnPolicyResponse extends SpeakeasyBase {
    contentType: string;
    returnPolicy?: shared.ReturnPolicy;
    statusCode: number;
}
