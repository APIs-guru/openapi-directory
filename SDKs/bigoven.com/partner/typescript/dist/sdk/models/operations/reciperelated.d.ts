import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecipeRelatedPathParams extends SpeakeasyBase {
    recipeId: number;
}
export declare class RecipeRelatedQueryParams extends SpeakeasyBase {
    pg?: number;
    rpp?: number;
}
export declare class RecipeRelatedRequest extends SpeakeasyBase {
    pathParams: RecipeRelatedPathParams;
    queryParams: RecipeRelatedQueryParams;
}
export declare class RecipeRelatedResponse extends SpeakeasyBase {
    bigOvenModelApi2RecipeSearchResult?: shared.BigOvenModelApi2RecipeSearchResult;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
