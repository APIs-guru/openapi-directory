import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteItemBookmarkPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class DeleteItemBookmarkQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class DeleteItemBookmarkSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class DeleteItemBookmarkRequest extends SpeakeasyBase {
    pathParams: DeleteItemBookmarkPathParams;
    queryParams: DeleteItemBookmarkQueryParams;
    security: DeleteItemBookmarkSecurity;
}
export declare class DeleteItemBookmarkResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
