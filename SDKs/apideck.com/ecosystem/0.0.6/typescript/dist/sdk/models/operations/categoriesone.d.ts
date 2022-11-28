import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CategoriesOnePathParams extends SpeakeasyBase {
    ecosystemId: string;
    id: string;
}
export declare class CategoriesOneRequest extends SpeakeasyBase {
    pathParams: CategoriesOnePathParams;
}
export declare class CategoriesOneResponse extends SpeakeasyBase {
    contentType: string;
    getCategoryResponse?: shared.GetCategoryResponse;
    statusCode: number;
}
