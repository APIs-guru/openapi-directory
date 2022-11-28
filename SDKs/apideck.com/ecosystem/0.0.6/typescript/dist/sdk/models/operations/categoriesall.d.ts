import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CategoriesAllPathParams extends SpeakeasyBase {
    ecosystemId: string;
}
export declare class CategoriesAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
}
export declare class CategoriesAllRequest extends SpeakeasyBase {
    pathParams: CategoriesAllPathParams;
    queryParams: CategoriesAllQueryParams;
}
export declare class CategoriesAllResponse extends SpeakeasyBase {
    contentType: string;
    getCategoriesResponse?: shared.GetCategoriesResponse;
    statusCode: number;
}
