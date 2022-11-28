import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWatchedQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    itemIds?: string[];
    lang?: string;
}
export declare class DeleteWatchedSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class DeleteWatchedRequest extends SpeakeasyBase {
    queryParams: DeleteWatchedQueryParams;
    security: DeleteWatchedSecurity;
}
export declare class DeleteWatchedResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
