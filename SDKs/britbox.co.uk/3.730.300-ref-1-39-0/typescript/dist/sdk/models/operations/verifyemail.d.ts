import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VerifyEmailQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class VerifyEmailSecurity extends SpeakeasyBase {
    verifyEmailAuth: shared.SchemeVerifyEmailAuth;
}
export declare class VerifyEmailRequest extends SpeakeasyBase {
    queryParams: VerifyEmailQueryParams;
    security: VerifyEmailSecurity;
}
export declare class VerifyEmailResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
