import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about a recipe. Each recipe provides an algorithm that Amazon Personalize uses in model training when you use the <a>CreateSolution</a> operation.
**/
export declare class Recipe extends SpeakeasyBase {
    algorithmArn?: string;
    creationDateTime?: Date;
    description?: string;
    featureTransformationArn?: string;
    lastUpdatedDateTime?: Date;
    name?: string;
    recipeArn?: string;
    recipeType?: string;
    status?: string;
}
