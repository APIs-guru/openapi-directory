import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecommendedListQueryParams extends SpeakeasyBase {
    device?: string;
    ff?: shared.FeatureFlagsEnum[];
    itemTypes?: string[];
    lang?: string;
    page?: number;
    pageSize?: number;
    segments?: string[];
    sub?: string;
}
export declare class GetRecommendedListSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class GetRecommendedListRequest extends SpeakeasyBase {
    queryParams: GetRecommendedListQueryParams;
    security: GetRecommendedListSecurity;
}
export declare class GetRecommendedListResponse extends SpeakeasyBase {
    contentType: string;
    itemList?: shared.ItemList;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
