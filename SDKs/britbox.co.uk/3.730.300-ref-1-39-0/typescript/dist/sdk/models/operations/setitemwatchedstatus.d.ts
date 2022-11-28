import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetItemWatchedStatusPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class SetItemWatchedStatusQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
    position: number;
}
export declare class SetItemWatchedStatusSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class SetItemWatchedStatusRequest extends SpeakeasyBase {
    pathParams: SetItemWatchedStatusPathParams;
    queryParams: SetItemWatchedStatusQueryParams;
    security: SetItemWatchedStatusSecurity;
}
export declare class SetItemWatchedStatusResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
    watched?: shared.Watched;
}
