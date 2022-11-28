import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a summary of the properties of a recipe. For a complete listing, call the <a>DescribeRecipe</a> API.
**/
export declare class RecipeSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    lastUpdatedDateTime?: Date;
    name?: string;
    recipeArn?: string;
    status?: string;
}
