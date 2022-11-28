import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeEmailQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class ChangeEmailSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class ChangeEmailRequest extends SpeakeasyBase {
    queryParams: ChangeEmailQueryParams;
    request: shared.ItvChangeEmailRequest;
    security: ChangeEmailSecurity;
}
export declare class ChangeEmailResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
