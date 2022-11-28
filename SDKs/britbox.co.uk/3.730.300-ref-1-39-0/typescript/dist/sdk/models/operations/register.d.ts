import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RegisterQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class RegisterRequest extends SpeakeasyBase {
    queryParams: RegisterQueryParams;
    request: shared.RegistrationRequest;
}
export declare class RegisterResponse extends SpeakeasyBase {
    accessTokens?: shared.AccessToken[];
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
