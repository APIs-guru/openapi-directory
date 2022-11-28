import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductListingsAllPathParams extends SpeakeasyBase {
    ecosystemId: string;
    id: string;
}
export declare class ProductListingsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
}
export declare class ProductListingsAllRequest extends SpeakeasyBase {
    pathParams: ProductListingsAllPathParams;
    queryParams: ProductListingsAllQueryParams;
}
export declare class ProductListingsAllResponse extends SpeakeasyBase {
    contentType: string;
    getListingsResponse?: shared.GetListingsResponse;
    statusCode: number;
}
