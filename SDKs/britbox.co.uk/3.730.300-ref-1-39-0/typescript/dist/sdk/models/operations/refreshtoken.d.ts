import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RefreshTokenQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class RefreshTokenRequest extends SpeakeasyBase {
    queryParams: RefreshTokenQueryParams;
    request: shared.TokenRefreshRequest;
}
export declare class RefreshTokenResponse extends SpeakeasyBase {
    accessToken?: shared.AccessToken;
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
