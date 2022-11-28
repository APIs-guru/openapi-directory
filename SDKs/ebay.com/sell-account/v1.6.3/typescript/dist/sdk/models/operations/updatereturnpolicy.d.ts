import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateReturnPolicyPathParams extends SpeakeasyBase {
    returnPolicyId: string;
}
export declare class UpdateReturnPolicySecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class UpdateReturnPolicyRequest extends SpeakeasyBase {
    pathParams: UpdateReturnPolicyPathParams;
    request: shared.ReturnPolicyRequest;
    security: UpdateReturnPolicySecurity;
}
export declare class UpdateReturnPolicyResponse extends SpeakeasyBase {
    contentType: string;
    setReturnPolicyResponse?: shared.SetReturnPolicyResponse;
    statusCode: number;
}
