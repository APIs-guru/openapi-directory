import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRiddleSearchQueryParams extends SpeakeasyBase {
    category?: string;
    query?: string;
}
export declare class GetRiddleSearchSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetRiddleSearchRequest extends SpeakeasyBase {
    queryParams: GetRiddleSearchQueryParams;
    security: GetRiddleSearchSecurity;
}
export declare class GetRiddleSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
