import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAccountQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class UpdateAccountSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class UpdateAccountRequest extends SpeakeasyBase {
    queryParams: UpdateAccountQueryParams;
    request: shared.AccountUpdateRequest;
    security: UpdateAccountSecurity;
}
export declare class UpdateAccountResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
