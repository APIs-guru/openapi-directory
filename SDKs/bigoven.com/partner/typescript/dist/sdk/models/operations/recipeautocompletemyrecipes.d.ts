import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecipeAutoCompleteMyRecipesQueryParams extends SpeakeasyBase {
    limit: number;
    query: string;
}
export declare class RecipeAutoCompleteMyRecipesRequest extends SpeakeasyBase {
    queryParams: RecipeAutoCompleteMyRecipesQueryParams;
}
export declare class RecipeAutoCompleteMyRecipesResponse extends SpeakeasyBase {
    bigOvenModelRecipeInfoTinies?: shared.BigOvenModelRecipeInfoTiny[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
