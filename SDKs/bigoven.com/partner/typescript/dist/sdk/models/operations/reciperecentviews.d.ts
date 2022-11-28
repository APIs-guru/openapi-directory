import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecipeRecentViewsQueryParams extends SpeakeasyBase {
    pg?: number;
    rpp?: number;
}
export declare class RecipeRecentViewsRequest extends SpeakeasyBase {
    queryParams: RecipeRecentViewsQueryParams;
}
export declare class RecipeRecentViewsResponse extends SpeakeasyBase {
    bigOvenModelRecipeInfoDateTuple2s?: shared.BigOvenModelRecipeInfoDateTuple2[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
