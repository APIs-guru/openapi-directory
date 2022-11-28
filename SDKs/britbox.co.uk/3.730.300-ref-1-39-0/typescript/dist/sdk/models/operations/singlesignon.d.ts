import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SingleSignOnQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class SingleSignOnRequest extends SpeakeasyBase {
    queryParams: SingleSignOnQueryParams;
    request: shared.SingleSignOnRequest;
}
export declare class SingleSignOnResponse extends SpeakeasyBase {
    accessTokens?: shared.AccessToken[];
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
