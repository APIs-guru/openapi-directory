import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemChildrenListPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetItemChildrenListQueryParams extends SpeakeasyBase {
    device?: string;
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
    maxRating?: string;
    order?: shared.ListOrderEnum;
    page?: number;
    pageSize?: number;
    segments?: string[];
    sub?: string;
}
export declare class GetItemChildrenListRequest extends SpeakeasyBase {
    pathParams: GetItemChildrenListPathParams;
    queryParams: GetItemChildrenListQueryParams;
}
export declare class GetItemChildrenListResponse extends SpeakeasyBase {
    contentType: string;
    itemList?: shared.ItemList;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
