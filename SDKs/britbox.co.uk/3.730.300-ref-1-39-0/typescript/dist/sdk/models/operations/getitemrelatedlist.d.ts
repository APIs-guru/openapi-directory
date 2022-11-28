import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemRelatedListPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetItemRelatedListQueryParams extends SpeakeasyBase {
    device?: string;
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
    maxRating?: string;
    page?: number;
    pageSize?: number;
    segments?: string[];
    sub?: string;
}
export declare class GetItemRelatedListRequest extends SpeakeasyBase {
    pathParams: GetItemRelatedListPathParams;
    queryParams: GetItemRelatedListQueryParams;
}
export declare class GetItemRelatedListResponse extends SpeakeasyBase {
    contentType: string;
    itemList?: shared.ItemList;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
