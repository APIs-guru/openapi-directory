import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFactSearchQueryParams extends SpeakeasyBase {
    category?: string;
    query?: string;
    subcategory?: string;
}
export declare class GetFactSearchSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetFactSearchRequest extends SpeakeasyBase {
    queryParams: GetFactSearchQueryParams;
    security: GetFactSearchSecurity;
}
export declare class GetFactSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
