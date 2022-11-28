import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetPasswordQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class ResetPasswordRequest extends SpeakeasyBase {
    queryParams: ResetPasswordQueryParams;
    request: shared.PasswordResetRequest;
}
export declare class ResetPasswordResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
