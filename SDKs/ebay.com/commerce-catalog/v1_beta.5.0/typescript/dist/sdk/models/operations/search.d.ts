import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchQueryParams extends SpeakeasyBase {
    aspectFilter?: string;
    categoryIds?: string;
    fieldgroups?: string;
    gtin?: string;
    limit?: string;
    mpn?: string;
    offset?: string;
    q?: string;
}
export declare class SearchSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class SearchRequest extends SpeakeasyBase {
    queryParams: SearchQueryParams;
    security: SearchSecurity;
}
export declare class SearchResponse extends SpeakeasyBase {
    contentType: string;
    productSearchResponse?: shared.ProductSearchResponse;
    statusCode: number;
}
