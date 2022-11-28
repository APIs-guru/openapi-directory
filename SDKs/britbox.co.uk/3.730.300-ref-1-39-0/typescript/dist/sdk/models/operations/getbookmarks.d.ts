import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBookmarksQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetBookmarksSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class GetBookmarksRequest extends SpeakeasyBase {
    queryParams: GetBookmarksQueryParams;
    security: GetBookmarksSecurity;
}
export declare class GetBookmarksResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
    getBookmarks200ApplicationJsonObject?: Map<string, Date>;
}
