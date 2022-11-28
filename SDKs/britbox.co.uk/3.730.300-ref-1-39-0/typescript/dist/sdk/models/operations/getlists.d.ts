import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetListsQueryParams extends SpeakeasyBase {
    device?: string;
    ff?: shared.FeatureFlagsEnum[];
    ids: string[];
    itemType?: shared.ItemTypeEnum;
    lang?: string;
    maxRating?: string;
    order?: shared.ListOrderEnum;
    orderBy?: shared.ListOrderByEnum;
    pageSize?: number;
    segments?: string[];
    sub?: string;
}
export declare class GetListsRequest extends SpeakeasyBase {
    queryParams: GetListsQueryParams;
}
export declare class GetListsResponse extends SpeakeasyBase {
    contentType: string;
    itemLists?: shared.ItemList[];
    serviceError?: shared.ServiceError;
    statusCode: number;
}
