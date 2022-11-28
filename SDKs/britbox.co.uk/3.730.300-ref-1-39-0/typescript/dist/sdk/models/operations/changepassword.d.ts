import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangePasswordQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class ChangePasswordSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class ChangePasswordRequest extends SpeakeasyBase {
    queryParams: ChangePasswordQueryParams;
    request: shared.ChangePasswordRequest;
    security: ChangePasswordSecurity;
}
export declare class ChangePasswordResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
