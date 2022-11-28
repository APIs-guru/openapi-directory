import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateReturnPolicySecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateReturnPolicyRequest extends SpeakeasyBase {
    request: shared.ReturnPolicyRequest;
    security: CreateReturnPolicySecurity;
}
export declare class CreateReturnPolicyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    setReturnPolicyResponse?: shared.SetReturnPolicyResponse;
    statusCode: number;
}
