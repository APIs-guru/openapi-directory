import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemWatchedStatusPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetItemWatchedStatusQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetItemWatchedStatusSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class GetItemWatchedStatusRequest extends SpeakeasyBase {
    pathParams: GetItemWatchedStatusPathParams;
    queryParams: GetItemWatchedStatusQueryParams;
    security: GetItemWatchedStatusSecurity;
}
export declare class GetItemWatchedStatusResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
    watched?: shared.Watched;
}
