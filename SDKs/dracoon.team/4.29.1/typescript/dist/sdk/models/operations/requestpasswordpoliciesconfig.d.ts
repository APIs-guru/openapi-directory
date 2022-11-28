import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestPasswordPoliciesConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestPasswordPoliciesConfigRequest extends SpeakeasyBase {
    headers: RequestPasswordPoliciesConfigHeaders;
}
export declare class RequestPasswordPoliciesConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    passwordPoliciesConfig?: shared.PasswordPoliciesConfig;
    statusCode: number;
}
