import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ForgotPasswordQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class ForgotPasswordRequest extends SpeakeasyBase {
    queryParams: ForgotPasswordQueryParams;
    request: shared.PasswordResetEmailRequest;
}
export declare class ForgotPasswordResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
