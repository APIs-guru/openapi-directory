import { SpeakeasyBase } from "../../../internal/utils";
export declare class RecipeZapRecipePathParams extends SpeakeasyBase {
    id: number;
}
export declare class RecipeZapRecipeRequest extends SpeakeasyBase {
    pathParams: RecipeZapRecipePathParams;
}
export declare class RecipeZapRecipeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
