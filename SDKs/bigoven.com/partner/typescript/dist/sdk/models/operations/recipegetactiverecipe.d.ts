import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RecipeGetActiveRecipeQueryParams extends SpeakeasyBase {
    userName: string;
}
export declare class RecipeGetActiveRecipeRequest extends SpeakeasyBase {
    queryParams: RecipeGetActiveRecipeQueryParams;
}
export declare class RecipeGetActiveRecipeResponse extends SpeakeasyBase {
    bigOvenResult?: shared.BigOvenResult;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
