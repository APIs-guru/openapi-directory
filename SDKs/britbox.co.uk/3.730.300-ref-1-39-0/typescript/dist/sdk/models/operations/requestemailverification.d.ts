import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestEmailVerificationQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class RequestEmailVerificationSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class RequestEmailVerificationRequest extends SpeakeasyBase {
    queryParams: RequestEmailVerificationQueryParams;
    security: RequestEmailVerificationSecurity;
}
export declare class RequestEmailVerificationResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
