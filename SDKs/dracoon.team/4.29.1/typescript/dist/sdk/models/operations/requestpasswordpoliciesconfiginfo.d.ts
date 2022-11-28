import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestPasswordPoliciesConfigInfoHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestPasswordPoliciesConfigInfoRequest extends SpeakeasyBase {
    headers: RequestPasswordPoliciesConfigInfoHeaders;
}
export declare class RequestPasswordPoliciesConfigInfoResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    passwordPoliciesConfig?: shared.PasswordPoliciesConfig;
    statusCode: number;
}
