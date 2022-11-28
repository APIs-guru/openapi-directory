import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangePasswordPoliciesConfigHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class ChangePasswordPoliciesConfigRequest extends SpeakeasyBase {
    headers: ChangePasswordPoliciesConfigHeaders;
    request: shared.UpdatePasswordPoliciesConfig;
}
export declare class ChangePasswordPoliciesConfigResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    passwordPoliciesConfig?: shared.PasswordPoliciesConfig;
    statusCode: number;
}
