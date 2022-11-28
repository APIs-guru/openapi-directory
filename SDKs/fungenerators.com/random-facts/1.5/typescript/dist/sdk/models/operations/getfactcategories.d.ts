import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFactCategoriesQueryParams extends SpeakeasyBase {
    start?: number;
}
export declare class GetFactCategoriesSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}
export declare class GetFactCategoriesRequest extends SpeakeasyBase {
    queryParams: GetFactCategoriesQueryParams;
    security: GetFactCategoriesSecurity;
}
export declare class GetFactCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
