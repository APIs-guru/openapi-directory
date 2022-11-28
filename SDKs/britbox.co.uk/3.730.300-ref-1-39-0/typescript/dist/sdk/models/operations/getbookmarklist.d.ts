import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBookmarkListQueryParams extends SpeakeasyBase {
    device?: string;
    ff?: shared.FeatureFlagsEnum[];
    itemType?: shared.ItemTypeEnum;
    lang?: string;
    order?: shared.ListOrderEnum;
    page?: number;
    pageSize?: number;
    segments?: string[];
    sub?: string;
}
export declare class GetBookmarkListSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class GetBookmarkListRequest extends SpeakeasyBase {
    queryParams: GetBookmarkListQueryParams;
    security: GetBookmarkListSecurity;
}
export declare class GetBookmarkListResponse extends SpeakeasyBase {
    contentType: string;
    itemList?: shared.ItemList;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
