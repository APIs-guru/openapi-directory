import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetAccountSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetAccountRequest extends SpeakeasyBase {
    queryParams: GetAccountQueryParams;
    security: GetAccountSecurity;
}
export declare class GetAccountResponse extends SpeakeasyBase {
    account?: Map<string, any>;
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
