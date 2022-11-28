import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountTokenWithPinQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetAccountTokenWithPinSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetAccountTokenWithPinRequest extends SpeakeasyBase {
    queryParams: GetAccountTokenWithPinQueryParams;
    request: shared.ItvPinAuthRequest;
    security: GetAccountTokenWithPinSecurity;
}
export declare class GetAccountTokenWithPinResponse extends SpeakeasyBase {
    accessTokens?: shared.AccessToken[];
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
