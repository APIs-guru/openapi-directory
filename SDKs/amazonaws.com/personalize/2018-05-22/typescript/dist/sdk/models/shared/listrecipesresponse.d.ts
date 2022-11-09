import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecipeSummary } from "./recipesummary";
export declare class ListRecipesResponse extends SpeakeasyBase {
    nextToken?: string;
    recipes?: RecipeSummary[];
}
