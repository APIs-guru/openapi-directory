import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountTokenQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetAccountTokenRequest extends SpeakeasyBase {
    queryParams: GetAccountTokenQueryParams;
    request: shared.AccountTokenRequest;
}
export declare class GetAccountTokenResponse extends SpeakeasyBase {
    accessTokens?: shared.AccessToken[];
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
