import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BookmarkItemPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class BookmarkItemQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class BookmarkItemSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class BookmarkItemRequest extends SpeakeasyBase {
    pathParams: BookmarkItemPathParams;
    queryParams: BookmarkItemQueryParams;
    security: BookmarkItemSecurity;
}
export declare class BookmarkItemResponse extends SpeakeasyBase {
    bookmark?: shared.Bookmark;
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
