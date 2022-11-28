import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteReturnPolicyPathParams extends SpeakeasyBase {
    returnPolicyId: string;
}
export declare class DeleteReturnPolicySecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class DeleteReturnPolicyRequest extends SpeakeasyBase {
    pathParams: DeleteReturnPolicyPathParams;
    security: DeleteReturnPolicySecurity;
}
export declare class DeleteReturnPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
