import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecipeAutoCompleteAllRecipesQueryParams extends SpeakeasyBase {
    limit: number;
    query: string;
}
export declare class RecipeAutoCompleteAllRecipesRequest extends SpeakeasyBase {
    queryParams: RecipeAutoCompleteAllRecipesQueryParams;
}
export declare class RecipeAutoCompleteAllRecipesResponse extends SpeakeasyBase {
    bigOvenModelRecipeInfoTinies?: shared.BigOvenModelRecipeInfoTiny[];
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
