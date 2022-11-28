import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestPasswordPoliciesForPasswordTypePathParams extends SpeakeasyBase {
    passwordType: any;
}
export declare class RequestPasswordPoliciesForPasswordTypeHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestPasswordPoliciesForPasswordTypeRequest extends SpeakeasyBase {
    pathParams: RequestPasswordPoliciesForPasswordTypePathParams;
    headers: RequestPasswordPoliciesForPasswordTypeHeaders;
}
export declare class RequestPasswordPoliciesForPasswordTypeResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    passwordPoliciesConfig?: shared.PasswordPoliciesConfig;
    statusCode: number;
}
