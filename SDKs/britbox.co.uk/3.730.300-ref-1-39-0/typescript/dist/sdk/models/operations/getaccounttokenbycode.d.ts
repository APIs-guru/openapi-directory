import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountTokenByCodeQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetAccountTokenByCodeRequest extends SpeakeasyBase {
    queryParams: GetAccountTokenByCodeQueryParams;
    request: shared.AccountTokenByCodeRequest;
}
export declare class GetAccountTokenByCodeResponse extends SpeakeasyBase {
    accessTokens?: shared.AccessToken[];
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
