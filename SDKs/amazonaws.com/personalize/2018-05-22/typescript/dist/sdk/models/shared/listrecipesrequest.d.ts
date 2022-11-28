import { SpeakeasyBase } from "../../../internal/utils";
import { RecipeProviderEnum } from "./recipeproviderenum";
export declare class ListRecipesRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    recipeProvider?: RecipeProviderEnum;
}
