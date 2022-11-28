import { SpeakeasyBase } from "../../../internal/utils";
export declare class RecipeAutoCompleteQueryParams extends SpeakeasyBase {
    limit?: number;
    query: string;
}
export declare class RecipeAutoCompleteRequest extends SpeakeasyBase {
    queryParams: RecipeAutoCompleteQueryParams;
}
export declare class RecipeAutoCompleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    recipeAutoComplete200ApplicationJsonStrings?: string[];
    recipeAutoComplete200TextJsonStrings?: string[];
    statusCode: number;
}
