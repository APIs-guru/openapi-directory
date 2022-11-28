import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CategoryListingsAllPathParams extends SpeakeasyBase {
    ecosystemId: string;
    id: string;
}
export declare class CategoryListingsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
}
export declare class CategoryListingsAllRequest extends SpeakeasyBase {
    pathParams: CategoryListingsAllPathParams;
    queryParams: CategoryListingsAllQueryParams;
}
export declare class CategoryListingsAllResponse extends SpeakeasyBase {
    contentType: string;
    getListingsResponse?: shared.GetListingsResponse;
    statusCode: number;
}
