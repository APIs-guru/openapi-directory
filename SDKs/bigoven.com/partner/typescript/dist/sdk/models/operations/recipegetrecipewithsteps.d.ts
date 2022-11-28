import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecipeGetRecipeWithStepsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class RecipeGetRecipeWithStepsQueryParams extends SpeakeasyBase {
    prefetch?: boolean;
}
export declare class RecipeGetRecipeWithStepsRequest extends SpeakeasyBase {
    pathParams: RecipeGetRecipeWithStepsPathParams;
    queryParams: RecipeGetRecipeWithStepsQueryParams;
}
export declare class RecipeGetRecipeWithStepsResponse extends SpeakeasyBase {
    bigOvenModelApi2Recipe?: shared.BigOvenModelApi2Recipe;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
