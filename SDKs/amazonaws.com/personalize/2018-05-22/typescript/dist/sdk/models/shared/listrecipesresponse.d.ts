import { SpeakeasyBase } from "../../../internal/utils";
import { RecipeSummary } from "./recipesummary";
export declare class ListRecipesResponse extends SpeakeasyBase {
    nextToken?: string;
    recipes?: RecipeSummary[];
}
