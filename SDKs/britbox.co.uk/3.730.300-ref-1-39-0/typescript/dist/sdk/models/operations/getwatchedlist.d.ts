import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetWatchedListOrderByEnum {
    DateAdded = "date-added",
    DateModified = "date-modified"
}
export declare class GetWatchedListQueryParams extends SpeakeasyBase {
    completed?: boolean;
    device?: string;
    ff?: shared.FeatureFlagsEnum[];
    itemType?: shared.ItemTypeEnum;
    lang?: string;
    order?: shared.ListOrderEnum;
    orderBy?: GetWatchedListOrderByEnum;
    page?: number;
    pageSize?: number;
    segments?: string[];
    sub?: string;
}
export declare class GetWatchedListSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class GetWatchedListRequest extends SpeakeasyBase {
    queryParams: GetWatchedListQueryParams;
    security: GetWatchedListSecurity;
}
export declare class GetWatchedListResponse extends SpeakeasyBase {
    contentType: string;
    itemList?: shared.ItemList;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
