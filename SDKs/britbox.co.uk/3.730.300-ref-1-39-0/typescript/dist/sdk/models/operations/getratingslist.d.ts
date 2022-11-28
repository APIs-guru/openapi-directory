import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRatingsListOrderByEnum {
    DateAdded = "date-added",
    DateModified = "date-modified"
}
export declare class GetRatingsListQueryParams extends SpeakeasyBase {
    device?: string;
    ff?: shared.FeatureFlagsEnum[];
    itemType?: shared.ItemTypeEnum;
    lang?: string;
    order?: shared.ListOrderEnum;
    orderBy?: GetRatingsListOrderByEnum;
    page?: number;
    pageSize?: number;
    segments?: string[];
    sub?: string;
}
export declare class GetRatingsListSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class GetRatingsListRequest extends SpeakeasyBase {
    queryParams: GetRatingsListQueryParams;
    security: GetRatingsListSecurity;
}
export declare class GetRatingsListResponse extends SpeakeasyBase {
    contentType: string;
    itemList?: shared.ItemList;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
