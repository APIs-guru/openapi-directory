import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetListQueryParams extends SpeakeasyBase {
    device?: string;
    ff?: shared.FeatureFlagsEnum[];
    itemType?: shared.ItemTypeEnum;
    lang?: string;
    maxRating?: string;
    order?: shared.ListOrderEnum;
    orderBy?: shared.ListOrderByEnum;
    page?: number;
    pageSize?: number;
    param?: string;
    segments?: string[];
    sub?: string;
}
export declare class GetListRequest extends SpeakeasyBase {
    pathParams: GetListPathParams;
    queryParams: GetListQueryParams;
}
export declare class GetListResponse extends SpeakeasyBase {
    contentType: string;
    itemList?: shared.ItemList;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
