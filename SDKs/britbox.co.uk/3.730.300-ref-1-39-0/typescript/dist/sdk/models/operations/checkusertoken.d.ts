import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckUserTokenQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    id: string;
    lang?: string;
}
export declare class CheckUserTokenRequest extends SpeakeasyBase {
    queryParams: CheckUserTokenQueryParams;
}
export declare class CheckUserTokenResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
