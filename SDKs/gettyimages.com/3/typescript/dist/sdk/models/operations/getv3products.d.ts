import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV3ProductsQueryParams extends SpeakeasyBase {
    fields?: shared.ProductFieldValuesEnum[];
}
export declare class GetV3ProductsHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3ProductsRequest extends SpeakeasyBase {
    queryParams: GetV3ProductsQueryParams;
    headers: GetV3ProductsHeaders;
}
export declare class GetV3ProductsResponse extends SpeakeasyBase {
    contentType: string;
    productsResult?: shared.ProductsResult;
    statusCode: number;
}
