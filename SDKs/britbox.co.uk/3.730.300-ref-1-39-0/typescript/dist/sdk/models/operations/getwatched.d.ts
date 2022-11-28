import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWatchedQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetWatchedSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class GetWatchedRequest extends SpeakeasyBase {
    queryParams: GetWatchedQueryParams;
    security: GetWatchedSecurity;
}
export declare class GetWatchedResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
    getWatched200ApplicationJsonObject?: Map<string, shared.Watched>;
}
