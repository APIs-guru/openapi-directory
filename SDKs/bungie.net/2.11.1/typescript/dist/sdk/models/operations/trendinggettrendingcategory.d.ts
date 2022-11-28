import { SpeakeasyBase } from "../../../internal/utils";
export declare class TrendingGetTrendingCategoryPathParams extends SpeakeasyBase {
    categoryId: string;
    pageNumber: number;
}
export declare class TrendingGetTrendingCategoryRequest extends SpeakeasyBase {
    pathParams: TrendingGetTrendingCategoryPathParams;
}
export declare class TrendingGetTrendingCategoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
