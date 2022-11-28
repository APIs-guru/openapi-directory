import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecipeRavesQueryParams extends SpeakeasyBase {
    pg?: number;
    rpp?: number;
}
export declare class RecipeRavesRequest extends SpeakeasyBase {
    queryParams: RecipeRavesQueryParams;
}
export declare class RecipeRavesResponse extends SpeakeasyBase {
    bigOvenModelRecipeInfoReviewTuple2s?: shared.BigOvenModelRecipeInfoReviewTuple2[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
