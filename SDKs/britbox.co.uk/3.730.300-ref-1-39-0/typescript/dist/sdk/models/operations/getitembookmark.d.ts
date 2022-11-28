import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemBookmarkPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class GetItemBookmarkQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetItemBookmarkSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class GetItemBookmarkRequest extends SpeakeasyBase {
    pathParams: GetItemBookmarkPathParams;
    queryParams: GetItemBookmarkQueryParams;
    security: GetItemBookmarkSecurity;
}
export declare class GetItemBookmarkResponse extends SpeakeasyBase {
    bookmark?: shared.Bookmark;
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
