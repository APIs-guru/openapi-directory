import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfileTokenQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetProfileTokenSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetProfileTokenRequest extends SpeakeasyBase {
    queryParams: GetProfileTokenQueryParams;
    request: shared.ProfileTokenRequest;
    security: GetProfileTokenSecurity;
}
export declare class GetProfileTokenResponse extends SpeakeasyBase {
    accessTokens?: shared.AccessToken[];
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
